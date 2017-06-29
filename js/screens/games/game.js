import Game1View from './game1-view';
import Game2View from './game2-view';
import Game3View from './game3-view';
import {TIME_FOR_QUESTION, QUICK_ANSWER_TIME, LATE_ANSWER_TIME, MAX_QUESTIONS, initialState, setTime, setLives} from '../../game/game';
import Application from '../../application';
import ResultType from '../../enums/result-type';
import StatisticModel from '../statistic/statistic-model';

const QuestionType = {
  TWO_OF_TWO: `two-of-two`,
  TINDER_LIKE: `tinder-like`,
  ONE_OF_THREE: `one-of-three`
};

export default class {

  constructor(data) {
    this._questionsList = data;

    this._gameViewsList = {
      [QuestionType.TWO_OF_TWO]: Game1View,
      [QuestionType.TINDER_LIKE]: Game2View,
      [QuestionType.ONE_OF_THREE]: Game3View
    };
  }

  init() {
    this._state = initialState();

    this._view = this._createView(initialState(), this._getQuestion());
    this._view.show();
    this._startTimer();
  }

  _createView(state) {
    const view = new this._gameViewsList[this._getQuestion().type](state, this._getQuestion());

    view.onAnswer = (isCorrectAnswer) => {
      this._stopTimer();

      this._checkAnswer(isCorrectAnswer);
    };

    view.onBack = () => {
      this._stopTimer();

      Application.showGreeting();
    };

    return view;
  }

  _checkAnswer(isCorrectAnswer) {
    if (!isCorrectAnswer) {
      this._state = setLives(this._state, this._state.lives - 1);
    }

    this._state.stats.push(this._getResult(isCorrectAnswer));
    this._state.question++;

    this._changeScreen(this._state);
  }

  _changeScreen(state) {
    if (state.question < MAX_QUESTIONS && state.lives > 0) {
      this._state = Object.assign({}, this._state, {time: initialState().time});

      this._view = this._createView(this._state);
      this._view.show();
      this._startTimer();

    } else {
      Application.showPreloader();
      StatisticModel.send({lives: state.lives, stats: state.stats})
        .then(() => Application.showStatistic(this._state));
    }
  }

  _startTimer() {
    this._timer = setInterval(() => {
      this._state = setTime(this._state, this._state.time - 1);
      this._view.updateTimer(this._state.time);

      if (this._state.time <= 0) {
        this._stopTimer();

        this._checkAnswer(false);
      }

    }, 1000);
  }

  _stopTimer() {
    if (!this._timer) {
      return;
    }

    clearInterval(this._timer);
  }

  _getQuestion() {
    return this._questionsList[this._state.question];
  }

  _getResult(isCorrectAnswer) {
    let str;

    if (!isCorrectAnswer) {
      str = ResultType.WRONG;
    } else if (TIME_FOR_QUESTION - this._state.time < QUICK_ANSWER_TIME) {
      str = ResultType.FAST;
    } else if (TIME_FOR_QUESTION - this._state.time > LATE_ANSWER_TIME) {
      str = ResultType.SLOW;
    } else {
      str = ResultType.CORRECT;
    }

    return str;
  }

}

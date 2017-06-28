import Game1View from './game1-view';
import Game2View from './game2-view';
import Game3View from './game3-view';
import {levels} from '../../data/data';
import {initialState} from '../../data/data';
import Application from '../../application';

export default class {

  constructor() {
    this._state = Object.assign({}, initialState);
    this._gameScreensList = [Game1View, Game2View, Game3View];
    this._gameScreen = 0;
  }

  get _screen() {
    if (!this._currentGameScreen) {
      this._currentGameScreen = this._createGameScreen(this._state);
    }

    return this._currentGameScreen;
  }

  init() {
    this._screen.show();
  }

  _createGameScreen(state) {
    const screen = new this._gameScreensList[this._gameScreen % this._gameScreensList.length](state);

    screen.onChangeGameScreen = () => {
      this._checkAnswer();
    };

    this._gameScreen++;

    return screen;
  }

  _checkAnswer() {
    const questionCount = this._state.question - 1;
    if (questionCount > 0) {
      this._state.level = levels[this._state.level].next;
      this._state.question = questionCount;

      this._currentGameScreen = this._createGameScreen(this._state);

      this._screen.show();
    } else {
      Application.showStatistic();
    }
  }

}

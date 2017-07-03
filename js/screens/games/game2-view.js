import AbstractView from '../../abstract-view';
import renderOption from '../../game-option';
import renderStats from '../../stats';
import renderHeader from '../../header/header';

export default class extends AbstractView {

  constructor(state, question) {
    super();

    this._question = question;
    this._state = state;
  }

  get template() {
    return `
    ${renderHeader(this._state)}
    <div class="game">
    <p class="game__task">${this._question.question}</p>
    <form class="game__content  game__content--wide">
      ${renderOption(this._question.answers[0], `Option 1`, `question1`)}
    </form>
    <div class="stats">
    ${renderStats(this._state.stats)}
    </div>
  </div>`;
  }

  bind() {
    this._backBtnNode = this.element.querySelector(`.back`);
    const gameContentNode = this.element.querySelector(`.game__content`);
    this._timerNode = this.element.querySelector(`.game__timer`);
    this._radioListNode = gameContentNode.querySelectorAll(`input[type='radio']`);

    this._onBackHandler = () => this.onBack();
    this._onChangeRadioHandler = () => {
      this.onAnswer(gameContentNode.querySelector(`input[name="question1"]:checked`).value === this._question.answers[0].type);
    };

    if (this._radioListNode) {
      Array.from(this._radioListNode).forEach((item) => {
        item.addEventListener(`click`, this._onChangeRadioHandler);
      });
    }

    if (this._backBtnNode) {
      this._backBtnNode.addEventListener(`click`, this._onBackHandler);
    }
  }

  unbind() {
    if (this._backBtnNode) {
      this._backBtnNode.removeEventListener(`click`, this._onBackHandler);
    }

    if (this._radioListNode) {
      Array.from(this._radioListNode).forEach((item) => {
        item.removeEventListener(`click`, this._onChangeRadioHandler);
      });
    }
  }

  updateTimer(time) {
    this._timerNode.innerHTML = time;
  }

  onAnswer() {

  }

  onBack() {

  }
}


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
    <form class="game__content  game__content--triple">        
      ${renderOption(this._question.answers[0], `Option 1`, null, 0)}
      ${renderOption(this._question.answers[1], `Option 1`, null, 1)}
      ${renderOption(this._question.answers[2], `Option 1`, null, 2)}      
    </form>
    <div class="stats">
    ${renderStats(this._state.stats)}
    </div>
  </div>`;
  }

  bind() {
    this._backBtnNode = this.element.querySelector(`.back`);
    this._timerNode = this.element.querySelector(`.game__timer`);
    this._optionListNode = this.element.querySelectorAll(`.game__option`);

    this._onBackHandler = () => this.onBack();
    this._onClickImageHandler = (evt) => {
      this.onAnswer(this._question.answers[+evt.target.dataset.index].type === `photo`);
    };

    if (this._optionListNode) {
      Array.from(this._optionListNode).forEach((item) => {
        item.addEventListener(`click`, this._onClickImageHandler);
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

    if (this._optionListNode) {
      Array.from(this._optionListNode).forEach((item) => {
        item.removeEventListener(`click`, this._onClickImageHandler);
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



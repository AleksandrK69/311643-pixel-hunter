import AbstractView from '../../abstract-view';
import {levels} from '../../game/game';
import renderOption from '../../game-option';
import renderStats from '../../stats';
import renderHeader from '../../header/header';
import {resizeImage} from '../../utils';

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
    ${renderStats(this._state.results)}
  </div>`;
  }

  bind() {
    const backBtnNode = this.element.querySelector(`.back`);
    this._timerNode = this.element.querySelector(`.game__timer`);
    const optionListNode = this.element.querySelectorAll(`.game__option`);
    const clickImageHandler = (evt) => {
      this.onAnswer(this._question.answers[+evt.target.dataset.index].type === `photo`);
    };

    Array.from(optionListNode).forEach((item) => {
      item.addEventListener(`click`, clickImageHandler);
    });

    backBtnNode.addEventListener(`click`, () => {
      this.onBack();
    });
  }

  updateTimer(time) {
    this._timerNode.innerHTML = time;
  }

  onAnswer() {

  }

  onBack() {

  }

}



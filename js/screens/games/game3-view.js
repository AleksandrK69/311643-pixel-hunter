import AbstractView from '../../abstract-view';
import {levels} from '../../data/data';
import renderOption from '../../game-option';
import renderStats from '../../stats';
import renderHeader from '../../header/header';

export default class extends AbstractView {

  constructor(state) {
    super();

    this._state = state;
  }

  get template() {
    return `
    ${renderHeader(this._state)}
    <div class="game">
    <p class="game__task">${levels[this._state.level].description}</p>
    <form class="game__content  game__content--triple">
      ${renderOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
      ${renderOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
      ${renderOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}      
    </form>
    ${renderStats(this._state.results)}
  </div>`;
  }

  bind() {
    const backBtnNode = this.element.querySelector(`.back`);
    this._timerNode = this.element.querySelector(`.game__timer`);
    const optionListNode = this.element.querySelectorAll(`.game__option`);
    const clickImageHandler = () => {
      this.onAnswer();
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



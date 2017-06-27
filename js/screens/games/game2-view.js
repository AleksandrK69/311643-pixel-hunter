import AbstractView from '../../abstract-view';
import {levels} from '../../data/data';
import renderOption from '../../game-option';
import renderStats from '../../stats';

export default class extends AbstractView {

  constructor(state) {
    super();

    this._state = state;
  }

  get template() {
    return `<div class="game">
    <p class="game__task">${levels[this._state.level].description}</p>
    <form class="game__content  game__content--wide">
      ${renderOption(`http://placehold.it/705x455`, `Option 1`, 705, 455, `question1`)}      
    </form>
    ${renderStats(this._state.results)}
  </div>`;
  }

  bind() {
    const radioListNode = this.element.querySelectorAll(`input[type='radio']`);
    const changeRadioHandler = () => {
      this.onChangeGameScreen();
    };

    Array.from(radioListNode).forEach((item) => {
      item.addEventListener(`click`, changeRadioHandler);
    });
  }

  onChangeGameScreen() {

  }
}


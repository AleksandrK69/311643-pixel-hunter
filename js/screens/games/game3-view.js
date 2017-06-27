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
    <form class="game__content  game__content--triple">
      ${renderOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
      ${renderOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
      ${renderOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}      
    </form>
    ${renderStats(this._state.results)}
  </div>`;
  }

  bind() {
    const optionListNode = this.element.querySelectorAll(`.game__option`);
    const clickImageHandler = () => {
      this.onChangeGameScreen();
    };

    Array.from(optionListNode).forEach((item) => {
      item.addEventListener(`click`, clickImageHandler);
    });
  }

  onChangeGameScreen() {

  }

}



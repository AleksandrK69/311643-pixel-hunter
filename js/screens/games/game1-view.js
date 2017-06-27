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
    <form class="game__content">      
      ${renderOption(`http://placehold.it/468x458`, `Option 1`, 468, 458, `question1`)}
      ${renderOption(`http://placehold.it/468x458`, `Option 2`, 468, 458, `question2`)}
    </form>
    ${renderStats(this._state.results)}
  </div>`;
  }

  bind() {
    const radioListNode = this.element.querySelectorAll(`input[type='radio']`);
    const changeRadioHandler = (evt) => {
      evt.preventDefault();

      const question1Group = this.element.querySelector(`input[name="question1"]:checked`);
      const question2Group = this.element.querySelector(`input[name="question2"]:checked`);

      if (question1Group && question2Group) {
        this.onChangeGameScreen();
      }
    };

    Array.from(radioListNode).forEach((item) => {
      item.addEventListener(`change`, changeRadioHandler);
    });
  }

  onChangeGameScreen() {

  }

}

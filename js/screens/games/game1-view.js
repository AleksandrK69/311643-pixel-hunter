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
    <form class="game__content">      
      ${renderOption(`http://placehold.it/468x458`, `Option 1`, 468, 458, `question1`)}
      ${renderOption(`http://placehold.it/468x458`, `Option 2`, 468, 458, `question2`)}
    </form>
    ${renderStats(this._state.results)}
  </div>`;
  }

  bind() {
    const backBtnNode = this.element.querySelector(`.back`);
    this._timerNode = this.element.querySelector(`.game__timer`);
    const gameContentNode = this.element.querySelector(`.game__content`);
    const radioListNode = gameContentNode.querySelectorAll(`input[type='radio']`);

    const changeRadioHandler = (evt) => {
      evt.preventDefault();

      const question1Group = gameContentNode.querySelector(`input[name="question1"]:checked`);
      const question2Group = gameContentNode.querySelector(`input[name="question2"]:checked`);

      if (question1Group && question2Group) {
        this.onAnswer();
      }
    };

    backBtnNode.addEventListener(`click`, () => {
      this.onBack();
    });

    Array.from(radioListNode).forEach((item) => {
      item.addEventListener(`change`, (evt) => {
        changeRadioHandler(evt);
      });
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

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
    <form class="game__content">
      ${renderOption(this._question.answers[0], `Option 1`, `question1`)}
      ${renderOption(this._question.answers[1], `Option 2`, `question2`)}
    </form>
    <div class="stats">
    ${renderStats(this._state.stats)}
    </div>
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
        this.onAnswer(question1Group.value === this._question.answers[0].type && question2Group.value === this._question.answers[1].type);
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

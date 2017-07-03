import AbstractView from '../../abstract-view';

export default class extends AbstractView {
  get template() {
    return `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`;
  }

  bind() {
    this._nextBtnNode = this.element.querySelector(`.intro__asterisk`);
    this._onGoNextStateHandler = () => this.onStart();

    if (this._nextBtnNode) {
      this._nextBtnNode.addEventListener(`click`, this._onGoNextStateHandler);
    }
  }

  unbind() {
    if (this._nextBtnNode) {
      this._nextBtnNode.removeEventListener(`click`, this._onGoNextStateHandler);
    }
  }

  onStart() {

  }
}

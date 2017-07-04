import AbstractView from '../../abstract-view';
import renderHeader from '../../header/header';

export default class extends AbstractView {
  get template() {
    return `
    ${renderHeader()}
    <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;
  }

  bind() {
    this._backBtnNode = this.element.querySelector(`.back`);
    this._nameNode = this.element.querySelector(`.rules__input`);
    this._goBtnNode = this.element.querySelector(`.rules__button`);

    this._onBackHandler = () => this.onBack();
    this._onInputHandler = () => {
      this._goBtnNode.disabled = this._nameNode.value.length === 0;

      return;
    };
    this._onGoHandler = (evt) => {
      evt.preventDefault();
      this.onStartGame(this._nameNode.value);
    };

    this._nameNode.addEventListener(`input`, this._onInputHandler);
    this._goBtnNode.addEventListener(`click`, this._onGoHandler);
    this._backBtnNode.addEventListener(`click`, this._onBackHandler);
  }

  unbind() {
    this._nameNode.removeEventListener(`input`, this._onInputHandler);
    this._goBtnNode.removeEventListener(`click`, this._onGoHandler);
    this._backBtnNode.removeEventListener(`click`, this._onBackHandler);
  }

  onStartGame(name) {

  }

  onBack() {

  }
}

import {changeView} from './view-manager';

export default class AbstractView {
  get template() {
    throw new Error(`Abstract method called.`);
  }

  get element() {
    if (!this._element) {
      this._element = this._getMarkup();
      this.bind();
    }

    return this._element;
  }

  show() {
    changeView(this);
  }

  bind() {

  }

  unbind() {

  }

  _getMarkup() {
    return this._render();
  }

  _render() {
    return this._getElementFromTemplate(this.template);
  }

  _getElementFromTemplate(html) {
    const container = document.createElement(`template`);
    container.innerHTML = html;

    return container.content;
  }
}

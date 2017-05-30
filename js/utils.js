import {getHeader} from './header';

const mainNode = document.querySelector(`main`);
const mainCentralNode = mainNode.querySelector(`#main`);

const clearMainElement = () => {
  while (mainCentralNode.lastChild) {
    mainCentralNode.removeChild(mainCentralNode.lastChild);
  }
};

export const getElementFromTemplate = (html) => {
  return new DOMParser().parseFromString(html, `text/html`).querySelector(`div`);
};

export const showScreen = (element, header = false) => {
  const headerNode = mainNode.querySelector(`header`);
  if (headerNode) {
    mainNode.removeChild(headerNode);
  }

  if (header) {
    mainNode.insertBefore(getHeader(), mainCentralNode);
  }

  // удалить все содержимое main
  clearMainElement();
  // добавить элемент на экран
  mainCentralNode.appendChild(element);
};

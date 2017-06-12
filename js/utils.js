import {renderHeader} from './header';

const mainNode = document.querySelector(`main`);
const mainCentralNode = mainNode.querySelector(`#main`);

const clearMainElement = () => {
  while (mainCentralNode.lastChild) {
    mainCentralNode.removeChild(mainCentralNode.lastChild);
  }
};

export const getElementFromTemplate = (html) => {
  const container = document.createElement(`div`);
  container.innerHTML = html;
  return container.querySelector(`div`);
};

export const showScreen = (element, header = false) => {
  const headerNode = mainNode.querySelector(`header`);
  if (headerNode) {
    mainNode.removeChild(headerNode);
  }

  if (header) {
    mainNode.insertBefore(renderHeader(), mainCentralNode);
  }

  // удалить все содержимое main
  clearMainElement();
  // добавить элемент на экран
  mainCentralNode.appendChild(element);
};

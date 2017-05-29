import {getHeader} from './header';

const mainNode = document.querySelector(`main`);
const mainCentralNode = mainNode.querySelector(`#main`);

/**
 * Очистка содержимого контейнера.
 */
const clearMainElement = () => {
  while (mainCentralNode.lastChild) {
    mainCentralNode.removeChild(mainCentralNode.lastChild);
  }
};

/**
 * Получение элемента из шаблона-строки.
 *
 * @param {String} html - строка с html-кодом элемента.
 * @return {Element}
 */
export const getElementFromTemplate = (html) => {
  const element = document.createElement(`div`);
  element.innerHTML = html;
  return element.querySelector(`div`);
};

/**
 * Показывает заданный экран.
 * @param {Node} element - показываемый элемент экрана.
 * @param {boolean} header - показывать шапку или нет.
 */
export const showScreen = (element, header = null) => {
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

window.main = function () {
  const mainCentralNode = document.querySelector(`.central`);
  const templatesNodeList = document.querySelectorAll(`template`);

  let currentScreen = 0;

  document.addEventListener(`keyup`, keyPressHandler, true);

  /**
   * Нажатие кнопки на клавиатуре.
   * @param {KeyboardEvent} evt
   */
  function keyPressHandler(evt) {
    const KEY_LEFT = 37;
    const KEY_RIGHT = 39;

    if (evt.altKey) {
      if (evt.keyCode === KEY_LEFT) {
        evt.preventDefault();
        showScreen(currentScreen - 1);
      } else if (evt.keyCode === KEY_RIGHT) {
        evt.preventDefault();
        showScreen(currentScreen + 1);
      }
    }
  }

  /**
   * Очищает содержимое тега main.
   */
  function clearMainNode() {
    while (mainCentralNode.lastChild) {
      mainCentralNode.removeChild(mainCentralNode.lastChild);
    }
  }

  /**
   * Показать содержимое экрана в тег main.
   * @param {number} index - индекс экрана в списке экранов.
   */
  function showScreen(index = 0) {
    // проверка на крайние значения массива
    if (index > templatesNodeList.length - 1 || index < 0) {
      return;
    }
    // запись текушего номера экрана
    currentScreen = index;
    // очистка тега main
    clearMainNode();
    // отображение экрана
    mainCentralNode.appendChild(templatesNodeList[index].content.cloneNode(true));
  }

  showScreen(currentScreen);
}();

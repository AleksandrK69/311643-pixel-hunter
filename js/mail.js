window.main = function () {
  const _mainCentralNode = document.querySelector(`.central`);
  const _templatesNodeList = document.querySelectorAll(`template`);

  let _currentScreen = 0;

  showScreen(0);

  document.addEventListener(`keyup`, keyPressHandler);

  /**
   * Нажатие кнопки на клавиатуре.
   * @param {KeyboardEvent} evt
   */
  function keyPressHandler(evt) {
    const KEY_LEFT = 37;
    const KEY_RIGHT = 39;

    if (evt.altKey) {
      if (evt.keyCode === KEY_LEFT) {
        showScreen(_currentScreen - 1);
      } else if (evt.keyCode === KEY_RIGHT) {
        showScreen(_currentScreen + 1);
      }
    }
  }

  /**
   * Очищает содержимое тега main.
   */
  function clearMainNode() {
    while (_mainCentralNode.lastChild) {
      _mainCentralNode.removeChild(_mainCentralNode.lastChild);
    }
  }

  /**
   * Показать содержимое экрана в тег main.
   * @param {number} index - индекс экрана в списке экранов.
   */
  function showScreen(index = 0) {
    // проверка на крайние значения массива
    if (index > _templatesNodeList.length - 1 || index < 0) {
      return;
    }
    // запись текушего номера экрана
    _currentScreen = index;
    // очистка тега main
    clearMainNode();
    // отображение экрана
    _mainCentralNode.appendChild(_templatesNodeList[index].content.cloneNode(true));
  }

}();

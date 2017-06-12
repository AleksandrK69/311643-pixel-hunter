import game2Screen from './game-2';
import * as utils from '../utils';
import renderOption from '../game-option';
import renderStats from '../stats';
import {levels} from '../data';
import {changeGameScreen} from '../change-screen';

export default (state) => {
  const html = `<div class="game">
    <p class="game__task">${levels[state.level].description}</p>
    <form class="game__content">      
      ${renderOption(`http://placehold.it/468x458`, `Option 1`, 468, 458, `question1`)}
      ${renderOption(`http://placehold.it/468x458`, `Option 2`, 468, 458, `question2`)}
    </form>
    ${renderStats(state.results)}
  </div>`;

  const element = utils.getElementFromTemplate(html);
  const radioListNode = element.querySelectorAll(`input[type='radio']`);
  const changeRadioHandler = () => {
    const question1Group = element.querySelector(`input[name="question1"]:checked`);
    const question2Group = element.querySelector(`input[name="question2"]:checked`);

    if (question1Group && question2Group) {
      changeGameScreen(state, game2Screen);
    }
  };

  Array.from(radioListNode).forEach((item) => {
    item.addEventListener(`change`, changeRadioHandler);
  });

  return element;
};

import game0Screen from './game-1';
import * as utils from '../utils';
import {levels} from '../data';
import renderOption from '../game-option';
import renderStats from '../stats';
import {changeGameScreen} from '../change-screen';

export default (state) => {
  const html = `<div class="game">
    <p class="game__task">${levels[state.level].description}</p>
    <form class="game__content  game__content--triple">
      ${renderOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
      ${renderOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
      ${renderOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}      
    </form>
    ${renderStats(state.results)}
  </div>`;

  const element = utils.getElementFromTemplate(html);
  const optionListNode = element.querySelectorAll(`.game__option`);

  Array.from(optionListNode).forEach((item) => {
    item.addEventListener(`click`, () => {
      changeGameScreen(state, game0Screen);
    });
  });

  return element;
};

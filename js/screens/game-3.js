import game0Screen from './game-1';
import statsScreen from './stats';
import * as utils from '../utils';
import {levels} from '../data';
import getOption from '../game-option';
import getStats from '../stats';

export default (state) => {
  const html = `<div class="game">
    <p class="game__task">${levels[state.level].description}</p>
    <form class="game__content  game__content--triple">
      ${getOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
      ${getOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}
      ${getOption(`http://placehold.it/304x455`, `Option 1`, 304, 455)}      
    </form>
    ${getStats(state.results)}
  </div>`;

  const element = utils.getElementFromTemplate(html);
  const optionListNode = element.querySelectorAll(`.game__option`);

  Array.from(optionListNode).forEach((item) => {
    item.addEventListener(`click`, () => {
      if (state.question - 1 > 0) {
        utils.showScreen(game0Screen(Object.assign({}, state, {
          level: levels[state.level].next,
          question: state.question - 1
        })), true);
      } else {
        utils.showScreen(statsScreen, true);
      }
    });
  });

  return element;
};

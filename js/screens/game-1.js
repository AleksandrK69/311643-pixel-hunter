import game2Screen from './game-2';
import statsScreen from './stats';
import * as utils from '../utils';
import {levels} from '../data';
import renderOption from '../game-option';
import renderStats from '../stats';

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

  Array.from(radioListNode).forEach((item) => {
    item.addEventListener(`change`, () => {
      const question1Group = element.querySelector(`input[name="question1"]:checked`);
      const question2Group = element.querySelector(`input[name="question2"]:checked`);

      if (question1Group && question2Group) {
        const questionCount = state.question - 1;
        if (questionCount > 0) {
          utils.showScreen(game2Screen(Object.assign({}, state, {
            level: levels[state.level].next,
            question: questionCount
          })), true);
        } else {
          utils.showScreen(statsScreen, true);
        }
      }
    });
  });

  return element;
};

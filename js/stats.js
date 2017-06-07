import {statsResultList} from './data';

/*
const stats = `<div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`;*/

export default (resultsList = []) => {
  const stats = `<div class="stats">
      <ul class="stats">
        ${resultsList.map((item) => `<li class="stats__result ${statsResultList[item]}"></li>`)}
      </ul>
    </div>`;

  return stats;
};

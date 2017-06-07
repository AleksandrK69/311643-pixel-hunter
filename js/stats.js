import {statsResultList} from './data';

export default (resultsList = []) => {
  const stats = `<div class="stats">
      <ul class="stats">
        ${resultsList.map((item) => `<li class="stats__result ${statsResultList[item]}"></li>`)}
      </ul>
    </div>`;

  return stats;
};

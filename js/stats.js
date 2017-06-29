import {MAX_QUESTIONS, statsResultList} from './game/game';

export default (resultsList = []) => {
  const stats = `
      <ul class="stats">
        ${resultsList.map((item) => `<li class="stats__result ${statsResultList[item]}"></li>`).join(``)}
        ${new Array(MAX_QUESTIONS - resultsList.length).fill(`<li class="stats__result ${statsResultList.unknown}"></li>`).join(``)}
      </ul>`;

  return stats;
};

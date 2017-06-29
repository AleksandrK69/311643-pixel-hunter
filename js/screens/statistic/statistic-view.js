import AbstractView from '../../abstract-view';
import renderHeader from '../../header/header';
import renderStats from '../../stats';
import {ANSWER_POINT, LIVE_POINT, QUICK_ANSWER_POINT, LATE_ANSWER_POINT, calculatePoints} from '../../game/game';
import ResultType from '../../enums/result-type';

const calculateTotalPoints = (game) => {
  let gameStats = {points: game.lives * LIVE_POINT, normal: 0, fast: 0, slow: 0, lives: game.lives};

  game.stats.map((answer) => {
    gameStats.points += calculatePoints(answer);
    switch (answer) {
      case ResultType.FAST:
        gameStats.fast++;
        gameStats.normal++;
        break;
      case ResultType.SLOW:
        gameStats.slow++;
        gameStats.normal++;
        break;
      case ResultType.CORRECT:
        gameStats.normal++;
        break;
    }
  });

  return gameStats;
};

export default class extends AbstractView {

  constructor(stats) {
    super();

    this._stats = stats.reverse();

    console.log(this._stats);
  }

  get template() {
    return `
      ${renderHeader()}
      <div class="result">
      <h1>${this._stats[0].lives > 0 ? 'Победа!' : 'Проигрышь:('}</h1>
      
      ${this._stats.map((game, index) => {
        const gameStats = calculateTotalPoints(game);
        
        return `
          <table class="result__table">
            <tr>
              <td class="result__number">${index + 1}.</td>
              <td colspan="2">
                ${renderStats(game.stats)}
              </td>         
              ${game.lives > 0 ? `<td class="result__points">×&nbsp;${ANSWER_POINT}</td>
                                  <td class="result__total">${ANSWER_POINT * gameStats.normal}</td>` : 
                                 `<td class="result__points"></td>
                                  <td class="result__total result__total--final">FAIL</td>`}          
              
            </tr>            
            
            ${game.lives > 0 ?
                              `
                                ${gameStats.fast > 0 ?
                                                    `<tr>
                                                        <td></td>
                                                        <td class="result__extra">Бонус за скорость:</td>
                                                        <td class="result__extra">${gameStats.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                                                        <td class="result__points">×&nbsp;${QUICK_ANSWER_POINT}</td>
                                                        <td class="result__total">${QUICK_ANSWER_POINT * gameStats.fast}</td>
                                                      </tr>` : ``}
                                ${gameStats.lives > 0 ?
                                                    `<tr>
                                                         <td></td>
                                                         <td class="result__extra">Бонус за жизни:</td>
                                                         <td class="result__extra">${gameStats.lives}&nbsp;<span class="stats__result stats__result--heart"></span></td>
                                                         <td class="result__points">×&nbsp;${LIVE_POINT}</td>
                                                         <td class="result__total">${LIVE_POINT * gameStats.lives}</td>
                                                       </tr>` : ``}
                                ${gameStats.slow > 0 ?
                                                    `<tr>
                                                         <td></td>
                                                         <td class="result__extra">Штраф за медлительность:</td>
                                                         <td class="result__extra">${gameStats.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                                                         <td class="result__points">×&nbsp;${LATE_ANSWER_POINT}</td>
                                                         <td class="result__total">${LATE_ANSWER_POINT * gameStats.slow}</td>
                                                       </tr>` : ``}
                                <tr>
                                  <td colspan="5" class="result__total  result__total--final">${gameStats.points}</td>
                                </tr>` : ``}
            
            
          </table>`
      }).join(``)}
      </div>`.trim();
  }

  bind() {
    const backBtnNode = this.element.querySelector(`.back`);

    backBtnNode.addEventListener(`click`, () => {
      this.onBack();
    });
  }

  onBack() {

  }
}

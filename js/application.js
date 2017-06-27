import Welcome from './screens/welcome/welcome';
import Greeting from './screens/greeting/greeting';
import Rules from './screens/rules/rules';
import Game from './screens/games/game';
import Statistic from './screens/statistic/statistic';

export default new class {
  constructor() {
    this._welcome = new Welcome();
    this._greeting = new Greeting();
    this._rules = new Rules();
    this._game = new Game();
    this._statistic = new Statistic();
  }

  init() {
    this.showWelcome();
  }

  showWelcome() {
    this._welcome.init();
  }

  showGreeting() {
    this._greeting.init();
  }

  showRules() {
    this._rules.init();
  }

  showGame() {
    this._game.init();
  }

  showStatistic() {
    this._statistic.init();
  }

}();

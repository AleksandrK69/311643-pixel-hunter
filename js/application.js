import Welcome from './screens/welcome/welcome';
import Greeting from './screens/greeting/greeting';
import Rules from './screens/rules/rules';
import Game from './screens/games/game';
import Statistic from './screens/statistic/statistic';

const GameState = {
  WELCOME: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATISTIC: `stats`
};

const getGameStateFromHash = (hash) => hash.replace(`#`, ``);

class Application {
  constructor() {
    this._routes = {
      [GameState.WELCOME]: Welcome,
      [GameState.GREETING]: Greeting,
      [GameState.RULES]: Rules,
      [GameState.GAME]: Game,
      [GameState.STATISTIC]: Statistic
    };

    window.onhashchange = () => {
      this._changeGameState(getGameStateFromHash(location.hash));
    };
  }

  init() {
    this._changeGameState(getGameStateFromHash(location.hash));
  }

  showWelcome() {
    location.hash = GameState.WELCOME;
  }

  showGreeting() {
    location.hash = GameState.GREETING;
  }

  showRules() {
    location.hash = GameState.RULES;
  }

  showGame() {
    location.hash = GameState.GAME;
  }

  showStatistic(stats) {
    location.hash = GameState.STATISTIC;
  }

  _changeGameState(route = GameState.WELCOME) {
    const GameStateClass = this._routes[route];

    if (!GameStateClass) {
      return;
    }
    new GameStateClass().init();
  }

}

const app = new Application();
export default app;

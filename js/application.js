import Preloader from './screens/preloader/preloader';
import Welcome from './screens/welcome/welcome';
import Greeting from './screens/greeting/greeting';
import Rules from './screens/rules/rules';
import Game from './screens/games/game';
import Statistic from './screens/statistic/statistic';
import AbstractModel from './abstract-model';
import {preloadImages} from './utils';

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
    this._model = new class extends AbstractModel {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;
      }
    }();
  }

  init() {
    this.showPreloader();

    this._model.load()
      .then((data) => {
        preloadImages(data)
          .then(() => this._setup(data))
          .then(() => this._changeGameState(getGameStateFromHash(location.hash)));
      }).catch(window.console.error);
  }

  showPreloader() {
    new Preloader().init();
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

  showStatistic() {
    location.hash = GameState.STATISTIC;
  }

  _changeGameState(route = GameState.WELCOME) {
    const GameStateClass = this._routes[route];

    if (!GameStateClass) {
      return;
    }

    GameStateClass.init();
  }

  _setup(data) {
    this._routes = {
      [GameState.WELCOME]: new Welcome(),
      [GameState.GREETING]: new Greeting(),
      [GameState.RULES]: new Rules(),
      [GameState.GAME]: new Game(data),
      [GameState.STATISTIC]: new Statistic()
    };

    window.onhashchange = () => {
      this._changeGameState(getGameStateFromHash(location.hash));
    };

    return data;
  }

}

const app = new Application();
export default app;

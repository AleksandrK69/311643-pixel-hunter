import RulesView from './rules-view';
import Application from '../../application';

export default class {

  constructor() {
    this._view = new RulesView();
  }

  init() {
    this._view.show();

    this._view.onStartGame = () => {
      Application.showGame();
    };
  }

}

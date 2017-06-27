import WelcomeView from './welcome-view';
import Application from '../../application';

export default class {

  constructor() {
    this._view = new WelcomeView();

    this._view.onStart = () => {
      Application.showGreeting();
    };
  }

  init() {
    this._view.show();
  }

}

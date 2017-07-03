import WelcomeView from './welcome-view';
import Application from '../../application';

export default class {

  init() {
    if (this._view) {
      this._view.unbind();
    }

    this._view = new WelcomeView();
    this._view.show();

    this._view.onStart = () => {
      Application.showGreeting();
    };
  }

}

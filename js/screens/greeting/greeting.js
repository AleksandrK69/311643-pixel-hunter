import GreetingView from './greeting-view';
import Application from '../../application';

export default class {

  init() {
    if (this._view) {
      this._view.unbind();
    }
    this._view = new GreetingView();
    this._view.show();

    this._view.onNext = () => {
      Application.showRules();
    };
  }

}

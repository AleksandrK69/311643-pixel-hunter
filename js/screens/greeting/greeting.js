import GreetingView from './greeting-view';
import Application from '../../application';

export default class {

  constructor() {
    this._view = new GreetingView();

    this._view.onNext = () => {
      Application.showRules();
    };
  }

  init() {
    this._view.show();
  }

}

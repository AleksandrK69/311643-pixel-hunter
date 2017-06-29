import StatisticView from './statistic-view';
import {onBack} from '../../header/header';

export default class {

  init() {
    this._view = new StatisticView();
    this._view.show();

    this._view.onBack = onBack;
  }

}

import StatisticView from './statistic-view';
import {onBack} from '../../header/header';
import StatisticModel from '../statistic/statistic-model';

export default class {

  init() {
    if (this._view) {
      this._view.unbind();
    }

    StatisticModel.load()
      .then((data) => {
        this._view = new StatisticView(data);
        this._view.show();

        this._view.onBack = onBack;
      });
  }
}

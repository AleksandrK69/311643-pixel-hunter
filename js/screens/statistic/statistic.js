import StatisticView from './statistic-view';
import {onBack} from '../../header/header';
import StatisticModel from '../statistic/statistic-model';

export default class {

  init(stats) {
    if (stats) {
      this._view = new StatisticView([stats]);
      this._view.show();

      this._view.onBack = onBack;
    } else {
      StatisticModel.load()
        .then((data) => {
          this._view = new StatisticView(data);
          this._view.show();

          this._view.onBack = onBack;
        });
    }

  }
}

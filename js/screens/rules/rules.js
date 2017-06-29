import RulesView from './rules-view';
import Application from '../../application';
import {onBack} from '../../header/header';
import StatisticModel from '../statistic/statistic-model';

export default class {

  init() {
    this._view = new RulesView();
    this._view.show();

    this._view.onStartGame = (name) => {
      StatisticModel.name = name;
      Application.showGame();
    };

    this._view.onBack = onBack;
  }

}

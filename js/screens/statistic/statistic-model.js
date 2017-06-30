import AbstractModel from '../../abstract-model';

export default new class extends AbstractModel {
  constructor() {
    super();

    this._name = `AndriiZ.`;
  }

  get urlRead() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/${this.name}`;
  }
  get urlWrite() {
    return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/${this.name}`;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
}();

import AbstractView from '../../abstract-view';

export default class extends AbstractView {
  get template() {
    return `<div id="intro" class="intro">
      <h1 class="intro__asterisk">ЗАГРУЗКА</h1> 
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`;
  }
}

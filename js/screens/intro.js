import greetingScreen from './greeting';
import * as utils from '../utils';

const html = `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>`;

const element = utils.getElementFromTemplate(html);
const nextBtnNode = element.querySelector(`.intro__asterisk`);

nextBtnNode.addEventListener(`click`, () => {
  utils.showScreen(greetingScreen);
});

export default element;

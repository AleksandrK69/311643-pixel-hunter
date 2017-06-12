import introScreen from './screens/intro';
import * as utils from './utils';

const backBtnHtml = `<div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>`;
/*
const timerHtml = `<h1 class="game__timer">NN</h1>`;
const livesHtml = `<div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>`;*/

const headerElement = document.createElement(`header`);
headerElement.classList.add(`header`);
headerElement.innerHTML = backBtnHtml;

const backBtnNode = headerElement.querySelector(`.header__back`);
backBtnNode.addEventListener(`click`, () => {
  utils.showScreen(introScreen);
});

export const renderHeader = () => headerElement;

import getAnswer from './game-answer';

export default (image, alt, width, height, answerGroupName = null) => {
  const optionHtml = ` <div class="game__option">
        <img src="${image}" alt="${alt}" width="${width}" height="${height}">
        ${answerGroupName ? getAnswer(answerGroupName) : ``}
      </div>`;

  return optionHtml;
};

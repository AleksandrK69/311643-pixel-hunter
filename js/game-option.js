import renderAnswer from './game-answer';

export default (image, alt, width, height, answerGroupName) => {
  const optionHtml = `<div class="game__option">
        <img src="${image}" alt="${alt}" width="${width}" height="${height}">
        ${answerGroupName ? renderAnswer(answerGroupName) : ``}
      </div>`;

  return optionHtml;
};

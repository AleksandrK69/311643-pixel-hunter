import renderAnswer from './game-answer';

export default (question, alt, answerGroupName, index) => {
  const optionHtml = `<div class="game__option" data-index="${index}">
        <img src="${question.image.url}" alt="${alt}" width="${question.image.size.width}" height="${question.image.size.height}">
        ${answerGroupName ? renderAnswer(answerGroupName) : ``}
      </div>`;

  return optionHtml;
};

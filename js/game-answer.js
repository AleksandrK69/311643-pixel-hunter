export default (groupName) => {
  const photo = `<label class="game__answer game__answer--photo">
          <input name="${groupName}" type="radio" value="photo">
          <span>Фото</span>
        </label>`;
  const paint = ` <label class="game__answer game__answer--paint">
          <input name="${groupName}" type="radio" value="paint">
          <span>Рисунок</span>
        </label>`;

  return `${photo}${paint}`;
};

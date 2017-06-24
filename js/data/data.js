const MAX_QUESTIONS = 10;
const MAX_LIVES = 3;
const TIME_FOR_QUESTION = 30;
const START_LEVEL = `level-0`;
const QUICK_ANSWER_TIME = 10;
const LATE_ANSWER_TIME = 20;
const ANSWER_POINT = 100;
const QUICK_ANSWER_POINT = 50;
const LATE_ANSWER_POINT = -50;

const throwErrorIfInvalidRange = (time) => {
  if (isNaN(time) || time < 0 || time > TIME_FOR_QUESTION) {
    throw new RangeError(`Incorrect time. Time must be between 0...${TIME_FOR_QUESTION}.`);
  }
};

export const initialState = Object.freeze({
  results: new Array(MAX_QUESTIONS).fill(`unknown`),
  level: START_LEVEL,
  lives: MAX_LIVES,
  question: MAX_QUESTIONS,
  time: TIME_FOR_QUESTION
});

export const calculatePoints = (guess, time) => {
  if (typeof guess !== `boolean` || typeof time !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }
  throwErrorIfInvalidRange(time);

  let points = 0;
  if (guess) {
    points = ANSWER_POINT;

    if (time < QUICK_ANSWER_TIME) {
      points += QUICK_ANSWER_POINT;
    } else if (time >= LATE_ANSWER_TIME) {
      points += LATE_ANSWER_POINT;
    }
  }

  return points;
};

export const setLives = (state, lives) => {
  if (typeof state !== `object` || typeof lives !== `number` || typeof state.lives !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }

  if (isNaN(lives) || lives < 0 || lives > MAX_LIVES) {
    throw new RangeError(`Lives must be between 0...${MAX_LIVES}.`);
  }

  const newState = Object.assign({}, state, {lives});

  return newState;
};

export const setTime = (state, time) => {
  if (typeof state !== `object` || typeof time !== `number` || typeof state.time !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }

  throwErrorIfInvalidRange(time);

  const newState = Object.assign({}, state, {time});

  return newState;
};

export const levels = Object.freeze({
  [START_LEVEL]: {
    description: `Угадайте для каждого изображения фото или рисунок?`,
    next: `level-1`
  },

  'level-1': {
    description: `Угадай, фото или рисунок?`,
    next: `level-2`
  },

  'level-2': {
    description: `Найдите рисунок среди изображений`,
    next: START_LEVEL
  }
});

export const statsResultList = {
  wrong: `stats__result--wrong`,
  slow: `stats__result--slow`,
  fast: `stats__result--fast`,
  correct: `stats__result--correct`,
  unknown: `stats__result--unknown`
};

export const imagesList = {
  paintings: [
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    `http://i.imgur.com/1KegWPz.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

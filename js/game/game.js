import ResultType from '../enums/result-type';

export const MAX_QUESTIONS = 10;
const MAX_LIVES = 3;
export const TIME_FOR_QUESTION = 30;
export const QUICK_ANSWER_TIME = 10;
export const LATE_ANSWER_TIME = 20;
export const ANSWER_POINT = 100;
export const QUICK_ANSWER_POINT = 50;
export const LATE_ANSWER_POINT = -50;
export const LIVE_POINT = 50;

const throwErrorIfInvalidRange = (time) => {
  if (isNaN(time) || time < 0 || time > TIME_FOR_QUESTION) {
    throw new RangeError(`Incorrect time. Time must be between 0...${TIME_FOR_QUESTION}.`);
  }
};

export const getInitialState = () => Object.freeze({
  stats: [],
  lives: MAX_LIVES,
  question: 0,
  time: TIME_FOR_QUESTION
});

export const calculatePoints = (resultType) => {
  if (typeof resultType !== `string`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }

  let points = 0;
  if (resultType !== ResultType.WRONG) {
    points = ANSWER_POINT;

    if (resultType === ResultType.FAST) {
      points += QUICK_ANSWER_POINT;
    } else if (resultType === ResultType.SLOW) {
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

  return Object.assign({}, state, {lives});
};

export const setTime = (state, time) => {
  if (typeof state !== `object` || typeof time !== `number` || typeof state.time !== `number`) {
    throw new Error(`Parameters shouldn't be undefined or incorrect parameter type.`);
  }

  throwErrorIfInvalidRange(time);

  return Object.assign({}, state, {time});
};

export const statsResultList = {
  wrong: `stats__result--wrong`,
  slow: `stats__result--slow`,
  fast: `stats__result--fast`,
  correct: `stats__result--correct`,
  unknown: `stats__result--unknown`
};

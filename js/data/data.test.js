import assert from 'assert';
import {initialState, calculatePoints, setLives, setTime} from './data';

describe(`Game`, () => {
  describe(`calculate points`, () => {

    it(`incorrect data`, () => {
      const testWithIncorrectParams = (guess, time) => {
        calculatePoints(guess, time);
      };

      assert.throws(calculatePoints, Error);
      assert.throws(() => {
        testWithIncorrectParams(true);
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams(0, 1);
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams({}, 1);
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams([], 1);
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams(`string`, 1);
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams(NaN, 1);
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams(null, 1);
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams(false, -1);
      }, RangeError);

      assert.throws(() => {
        testWithIncorrectParams(false, 31);
      }, RangeError);

      assert.throws(() => {
        testWithIncorrectParams(false, {});
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams(false, []);
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams(false, `string`);
      }, Error);

      assert.throws(() => {
        testWithIncorrectParams(false, NaN);
      }, RangeError);

      assert.throws(() => {
        testWithIncorrectParams(false, null);
      }, Error);

    });

    it(`wrong answer`, () => {
      assert.equal(calculatePoints(false, 10), 0);
    });

    it(`correct answer`, () => {
      assert.equal(calculatePoints(true, 10), 100);
    });

    it(`quick answer`, () => {
      assert.equal(calculatePoints(true, 9), 150);
    });

    it(`late answer`, () => {
      assert.equal(calculatePoints(true, 20), 50);
    });

  });

  describe(`character lives`, () => {
    it(`incorrect value`, () => {
      const incorrectLivesParams = (state, lives) => {
        setLives(state, lives);
      };

      assert.throws(incorrectLivesParams, Error);
      assert.throws(() => {
        incorrectLivesParams(initialState);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams({}, 2);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams([], 2);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams(0, 2);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams(null, 2);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams(NaN, 2);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams(`string`, 2);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams(initialState, {});
      }, Error);

      assert.throws(() => {
        incorrectLivesParams(initialState, []);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams(initialState, null);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams(initialState, `string`);
      }, Error);

      assert.throws(() => {
        incorrectLivesParams(initialState, -1);
      }, RangeError);

      assert.throws(() => {
        incorrectLivesParams(initialState, 4);
      }, RangeError);

      assert.throws(() => {
        incorrectLivesParams(initialState, NaN);
      }, RangeError);

    });

    it(`update lives`, ()=> {
      assert.equal(setLives(initialState, 2).lives, 2);
      assert.equal(setLives(initialState, 1).lives, 1);
      assert.equal(setLives(initialState, 0).lives, 0);
    });

    it(`start value`, () => {
      assert.equal(initialState.lives, 3);
    });

  });

  describe(`character time`, () => {
    it(`incorrect value`, () => {
      const incorrectTimeParams = (state, time) => {
        setTime(state, time);
      };

      assert.throws(incorrectTimeParams, Error);
      assert.throws(() => {
        incorrectTimeParams(initialState);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams({}, 2);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams([], 2);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams(0, 2);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams(null, 2);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams(NaN, 2);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams(`string`, 2);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams(initialState, {});
      }, Error);

      assert.throws(() => {
        incorrectTimeParams(initialState, []);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams(initialState, null);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams(initialState, `string`);
      }, Error);

      assert.throws(() => {
        incorrectTimeParams(initialState, -1);
      }, RangeError);

      assert.throws(() => {
        incorrectTimeParams(initialState, 31);
      }, RangeError);

      assert.throws(() => {
        incorrectTimeParams(initialState, NaN);
      }, RangeError);

    });

    it(`update timer`, ()=> {
      assert.equal(setTime(initialState, 2).time, 2);
    });

    it(`start value`, () => {
      assert.equal(initialState.time, 30);
    });

  });

});

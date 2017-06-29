import assert from 'assert';
import {initialState, calculatePoints, setLives, setTime} from './game';
import ResultType from '../enums/result-type';

describe(`Game`, () => {
  describe(`calculate points`, () => {

    describe(`incorrect data`, () => {
      const testWithIncorrectParams = (answer) => {
        calculatePoints(answer);
      };

      const shouldThrowError = () => {
        assert.throws(calculatePoints, Error);
        assert.throws(() => {
          testWithIncorrectParams(true);
        }, Error);

        assert.throws(() => {
          testWithIncorrectParams(0);
        }, Error);

        assert.throws(() => {
          testWithIncorrectParams({});
        }, Error);

        assert.throws(() => {
          testWithIncorrectParams([]);
        }, Error);

        assert.throws(() => {
          testWithIncorrectParams(NaN);
        }, Error);

        assert.throws(() => {
          testWithIncorrectParams(null);
        }, Error);
      };

      it(`should throw error`, shouldThrowError);
    });

    describe(`should calculate points`, () => {
      it(`should wrong answer`, () => {
        assert.equal(calculatePoints(ResultType.WRONG), 0);
      });

      it(`should correct answer`, () => {
        assert.equal(calculatePoints(ResultType.CORRECT), 100);
      });

      it(`should quick answer`, () => {
        assert.equal(calculatePoints(ResultType.FAST), 150);
      });

      it(`should late answer`, () => {
        assert.equal(calculatePoints(ResultType.SLOW), 50);
      });
    });

  });

  describe(`character lives`, () => {
    describe(`incorrect value`, () => {
      const incorrectLivesParams = (state, lives) => {
        setLives(state, lives);
      };

      it(`should throw error`, () => {
        assert.throws(incorrectLivesParams, Error);
        assert.throws(() => {
          incorrectLivesParams(initialState());
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
          incorrectLivesParams(initialState(), {});
        }, Error);

        assert.throws(() => {
          incorrectLivesParams(initialState(), []);
        }, Error);

        assert.throws(() => {
          incorrectLivesParams(initialState(), null);
        }, Error);

        assert.throws(() => {
          incorrectLivesParams(initialState(), `string`);
        }, Error);
      });

      it(`should throw range error`, () => {
        assert.throws(() => {
          incorrectLivesParams(initialState(), -1);
        }, RangeError);

        assert.throws(() => {
          incorrectLivesParams(initialState(), 4);
        }, RangeError);

        assert.throws(() => {
          incorrectLivesParams(initialState(), NaN);
        }, RangeError);
      });
    });

    it(`should update lives`, ()=> {
      assert.equal(setLives(initialState(), 2).lives, 2);
      assert.equal(setLives(initialState(), 1).lives, 1);
      assert.equal(setLives(initialState(), 0).lives, 0);
    });

    it(`check start value`, () => {
      assert.equal(initialState().lives, 3);
    });

  });

  describe(`character time`, () => {
    describe(`incorrect value`, () => {
      const incorrectTimeParams = (state, time) => {
        setTime(state, time);
      };

      it(`should throw error`, () => {
        assert.throws(incorrectTimeParams, Error);
        assert.throws(() => {
          incorrectTimeParams(initialState());
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
          incorrectTimeParams(initialState(), {});
        }, Error);

        assert.throws(() => {
          incorrectTimeParams(initialState(), []);
        }, Error);

        assert.throws(() => {
          incorrectTimeParams(initialState(), null);
        }, Error);

        assert.throws(() => {
          incorrectTimeParams(initialState(), `string`);
        }, Error);
      });

      it(`should throw range error`, () => {
        assert.throws(() => {
          incorrectTimeParams(initialState(), -1);
        }, RangeError);

        assert.throws(() => {
          incorrectTimeParams(initialState(), 31);
        }, RangeError);

        assert.throws(() => {
          incorrectTimeParams(initialState(), NaN);
        }, RangeError);
      });

    });

    it(`should update timer`, ()=> {
      assert.equal(setTime(initialState(), 2).time, 2);
    });

    it(`check start value`, () => {
      assert.equal(initialState().time, 30);
    });

  });

});

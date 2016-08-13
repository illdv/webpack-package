// @flow

import { it, describe } from 'mocha';
import assert from 'assert';
import half from '../src/index.js';

describe('JavascriptPackage', () => {
  describe('#num()', () => {
    it('should return half of given number', () => {
      assert.equal(3, half(6));
    });
  });
});

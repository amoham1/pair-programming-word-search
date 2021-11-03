const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'R', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'A', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'N', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'K', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRSDDEEE')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'S', 'A', 'L'],
      ['S', 'E', 'X', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'I', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'N', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'F', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'L', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'D', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')
    assert.isTrue(result);
  });
});
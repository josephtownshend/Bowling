'use strict';

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  describe('Default', function() {
    it('Has a score of 0', function() {
      expect(scorecard.score()).toEqual(0)
    });


  });








})

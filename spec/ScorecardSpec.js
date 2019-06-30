'use strict';

describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  describe('Default', function() {

    it('Has a score of 0', function() {
      expect(scorecard.score).toEqual(0)
    });
  });

  describe('Get Current Score', function() {

    it('Can return the current score', function() {
      expect(scorecard.getCurrentScore()).toEqual(0)
    });
  });

  describe('Score', function() {

    it('Can add a number to the score', function() {
      scorecard.play(5);
      expect(scorecard.getCurrentScore()).toEqual(5)
    });
  });







})

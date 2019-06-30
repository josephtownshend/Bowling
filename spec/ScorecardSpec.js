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
      scorecard.play(4,5);
      expect(scorecard.getCurrentScore()).toEqual(9)
    });
  });

  describe('Score', function() {

    it('Can add two numbers to the score', function() {
      scorecard.play(5,3);
      expect(scorecard.getCurrentScore()).toEqual(8)
    });
  });

});

describe('Score', function() {

  var score;

  beforeEach(function() {
    score = new Score;
  });

  describe('Throw', function() {

    it('Can add a throw into the throws array', function() {
      score.throw(5);
      expect(score.frame).toEqual([5]);
    });

    it('Can add two throws into the throws array', function() {
      score.throw(5);
      score.throw(3);
      expect(score.frame).toEqual([5,3]);
    });
  });

});

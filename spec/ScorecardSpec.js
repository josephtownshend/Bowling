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

  describe('Throw', function() {

    it('Can add a throw into the throws array', function() {
      scorecard.throw(5);
      expect(scorecard.throws).toEqual([5]);
    })
    it('Can add multiple throws into the throws array', function() {
      scorecard.throw(5);
      scorecard.throw(3);
      scorecard.throw(9);
      expect(scorecard.throws).toEqual([5,3,9]);
    })
  })







})

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

  describe('Frame', function() {

    var frame;

    beforeEach(function() {
      frame = new Frame;
    });

  describe('Throw', function() {

    it('Can add a throw into the throws array', function() {
      frame.throw(5);
      expect(frame.throws).toEqual([5]);
    });
    it('Can add multiple throws into the throws array', function() {
      frame.throw(5);
      frame.throw(3);
      frame.throw(9);
      expect(frame.throws).toEqual([5,3,9]);
    });
  });

});

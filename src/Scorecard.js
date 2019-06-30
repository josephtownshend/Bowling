'use strict';

function Scorecard() {
  this.score = 0;
};

Scorecard.prototype.getCurrentScore = function() {
  return this.score;
}

// want to turn this into a function to
//add the two bowls in the frame together.
Scorecard.prototype.play = function(bowl1, bowl2) {
  this.score += bowl1 + bowl2;
}

function Score() {
  this.frame = [];
};

Score.prototype.throw = function(pins) {
  this.frame.push(pins);
}

//if === x,x - frame complete << [scorecard]

Score.prototype.isFrameFull = function() {
  if (this.frame.length === 2) {
    return true;
  } else {
    return false
  }
}

Score.prototype.frameScore = function() {
  return this.frame.reduce((a, b) => a + b)
}

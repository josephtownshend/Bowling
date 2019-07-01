'use strict';

function Scorecard() {
  this.score = 0;
};

Scorecard.prototype.getDefaultScore = function() {
  return this.score;
}



function Score() {
  this.frame = [];
};

Score.prototype.throw = function(pins) {
  this.frame.push(pins);
}

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

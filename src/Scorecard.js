'use strict';

function Scorecard() {
  this.score = 0;
};

Scorecard.prototype.getCurrentScore = function() {
  return this.score;
}

Scorecard.prototype.play = function(number) {
  this.score += number;
}

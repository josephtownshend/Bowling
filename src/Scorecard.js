'use strict';

function Scorecard() {
  this.score = 0;
};

Scorecard.prototype.getCurrentScore = function() {
  return this.score;
}

Scorecard.prototype.play = function(number1, number2) {
  this.score += number1 + number2;

}

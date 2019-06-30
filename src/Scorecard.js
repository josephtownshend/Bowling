'use strict';

function Scorecard() {
  this.score = 0;
};

Scorecard.prototype.getCurrentScore = function() {
  return this.score;
}

Scorecard.prototype.play = function(bowl1, bowl2) {
  this.score += bowl1 + bowl2;
}


function Frame() {
  this.throws = [];
};

Frame.prototype.throw = function(pins) {
  this.throws.push(pins);
}

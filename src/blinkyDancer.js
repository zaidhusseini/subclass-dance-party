var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="https://i.pinimg.com/originals/f5/cd/18/f5cd18d07d00379bde9e2cacf0154bd0.gif" class="blinky-dancer dancer"></img>');
  this.step();
  this.setPosition(top, left);

};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
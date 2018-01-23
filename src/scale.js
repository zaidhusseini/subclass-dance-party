var MakeScalingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="https://media.tenor.com/images/d6a4796d95e8131dafdb45de4e7839bc/tenor.gif" class="scaling-dancer"></img>');
  this.step();
  this.setPosition(top, left);

};

MakeScalingDancer.prototype = Object.create(MakeDancer.prototype);
MakeScalingDancer.prototype.constructor = MakeBlinkyDancer;


MakeScalingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass("scaling-dancer-large");
};
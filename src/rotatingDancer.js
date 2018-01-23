var MakeRotatingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img src="https://s31.postimg.org/l7bx9ahbv/dance1.gif" class="rotating-dancer dancer"></img>');
  this.step();
  this.setPosition(top, left);

};

MakeRotatingDancer.prototype = Object.create(MakeDancer.prototype);
MakeRotatingDancer.prototype.constructor = MakeRotatingDancer;


MakeRotatingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggleClass("rotating-dancer-large");
};
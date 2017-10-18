var Blinky = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps); 
  this.$node.addClass('blinky'); 
};

Blinky.prototype = Object.create(Dancer.prototype);

Blinky.prototype.constructor = Blinky;

Blinky.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
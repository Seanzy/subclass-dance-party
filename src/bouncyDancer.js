var Bouncy = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);  
};

Bouncy.prototype = Object.create(Dancer.prototype);

Bouncy.prototype.constructor = Bouncy;

Bouncy.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.( "bounce", { times: 3 }, "slow" );
};
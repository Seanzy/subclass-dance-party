var Moving = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moving');   
};

Moving.prototype = Object.create(Dancer.prototype);

Moving.prototype.constructor = Moving;

Moving.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var newTop = (this.top + 100).toString() + 'px';
  var oldTop = this.top.toString() + 'px';
  this.$node.animate({top: newTop}, 500);
  this.$node.animate({top: oldTop}, 600); 
};
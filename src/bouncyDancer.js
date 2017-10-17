var Bouncy = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);  
  this.$node.addClass('bouncy');
  this.$node.prepend('<img src="http://www.freeiconspng.com/uploads/single-baby-chicken-png-22.png">');
  this.$node.removeClass('dancer');
  this.top = top;
  this.left = left;
  this.down = true;
};

Bouncy.prototype = Object.create(Dancer.prototype);

Bouncy.prototype.constructor = Bouncy;

Bouncy.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var newTop = (this.top + 100).toString() + 'px';
  var oldTop = this.top.toString() + 'px';
  this.$node.animate({top: newTop}, 500);
  this.$node.animate({top: oldTop}, 600); 
};
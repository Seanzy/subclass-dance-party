var Bouncy = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);  
  this.$node.addClass('bouncy');
  this.$node.prepend('<img src="http://www.freeiconspng.com/uploads/single-baby-chicken-png-22.png">');
  this.$node.removeClass('dancer');
  
  
  $(this.$node).on('mouseenter mouseleave', function() {
    $(this).toggleClass('active');
  });
  
  $(this.$node).on('click', function() {
    
    var closest = Infinity;
    var closestNode;
    var ccTop = this.top;
    var ccLeft = this.left;
    for (var i = 0; i < dancers.length; i++) {
      var left = dancers[i].left;
      var top = dancers[i].top;
      var dist = Math.sqrt(Math.pow((ccTop - top), 2) + Math.pow((ccLeft - left), 2));
      if (dist < closest && dist !== 0) {
        closestNode = dancers[i];
        closest = dist;
      }  
    }
    closestNode.setPosition(200, 200);
  }.bind(this));
  
};

Bouncy.prototype = Object.create(Dancer.prototype);

Bouncy.prototype.constructor = Bouncy;

Bouncy.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  var newTop = (this.top + 100).toString() + 'px';
  var oldTop = this.top.toString() + 'px';
  
  this.$node.animate({top: newTop}, 500);
  this.$node.animate({top: oldTop}, 600); 
};

Bouncy.prototype.lineUp = function() {
  var windowWidth = (Math.floor(($(window).width()) / 2));
  this.setPosition(this.top, windowWidth);
};
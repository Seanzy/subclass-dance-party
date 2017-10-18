var Moving = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moving');   
};

Moving.prototype = Object.create(Dancer.prototype);

Moving.prototype.constructor = Moving;

Moving.prototype.step = function() {
  Dancer.prototype.step.call(this);
  
  var newLeft = (this.left + 100).toString() + 'px';
  var oldLeft = this.left.toString() + 'px';
  
  this.$node.animate({left: newLeft}, 500);
  this.$node.animate({left: oldLeft}, 600); 
};

Moving.prototype.lineUp = function() {
  var windowHeight = (Math.floor(($(window).height()) / 2));
  this.setPosition(windowHeight, this.left);
};
  // var rand1 = Math.floor(Math.random() * 100);
  // var rand2 = Math.floor(Math.random() * 100);
  
  // //need half our random numbers to be negative to prevent them from going too far off screen
  // if (rand1 % 2 === 0) {
  //   rand1 *= -1;
  // }
  
  // if (rand2 % 2 === 0) {
  //   rand2 *= -1;
  // }
  
  // var windowHeight = $(window).height();
  // var windowWidth = $(window).width();
  
  // this.top = this.top + rand1;
  // this.left = this.left + rand2; 
  
  // if (this.top > windowHeight) {
  //   this.top = this.top - 350;
  // } else if (this.top < 0) {
  //   this.top = this.top + 350;
  // }
  
  // if (this.left > windowWidth) {
  //   this.left = this.left - 350;
  // } else if (this.left < 0) {
  //   this.left = this.left + 350;
  // }
  
  // var newTopLoc = this.top.toString() + 'px';
  // var newLeftLoc = this.left.toString() + 'px';
  
  // this.$node.animate({top: newTopLoc, left: newLeftLoc}, 300);
  

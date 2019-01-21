//Abstraction - Hide details and show the essentials. ex: DVD Player
// Problem(s): everything is public, will create more problems in the future
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = function() {
    //...
  };

  this.draw = function() {
    computeOptimumLocation();
    console.log("draw");
  };
}

const circle = new Circle(1);
circle.draw();

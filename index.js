//Abstraction - Hide details and show the essentials. ex: DVD Player
// Problem(s): everything is public, will create more problems in the future
function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function() {
    //...
  };

  this.radius = radius;
  this.draw = function() {
    computeOptimumLocation();
    console.log("draw");
  };
}

const circle = new Circle(1);
circle.draw();

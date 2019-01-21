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

  //Issue: Would like to read and write defaultLocation
  // Currently, it is a private prop so NO ACCESS
  //Solution: Getters and Setters using defineProperty

  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) throw new Error("Invalid location");
      defaultLocation = value;
    }
  });
}

const circle = new Circle(1);
circle.draw();

//GOAL: Create an Object

//Factory Function - returns an Object
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("Factory Draw");
    }
  };
}

const circle = createCircle(1);
circle.draw();

//Constructor Function - First letter is Capital letter.
//'this' and 'new' keywords are used.
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("Constructor Draw");
  };
}

const another = new Circle(1);
another.draw();

// Every object has a Constructor Property.
//Ex: (let x = {}) == (let x = new Object())
//More ex: new String(). new Boolean(), new Number()

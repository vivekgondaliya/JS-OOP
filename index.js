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
//More ex: new String(). new Boolean(), new Number(), new Function()

//functions are Objects
//Line 25 = Line 34 and Line 35
Circle.call({}, 1); // implicitly define params
Circle.apply({}, [1, 2, 3]); // params passed in an array

// Value types: Number, String, Boolean, Symbol, undefined, null
// Reference types: Object, Function, Array

/** Adding or Removing properties
  - Adding: obj.prop = {} or obj[prop] = {}
  - obj[] notation use cases:
    - dynamically accesing the prop
    - special characters or spaces in the propertyName

  - Deleting: delete obj.prop or delete obj[prop]
*/

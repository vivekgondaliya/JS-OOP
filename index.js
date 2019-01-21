//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("Draw");
    }
  };
}

const circle = createCircle(1);
circle.draw();

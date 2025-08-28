class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const circle1 = new Circle(5);
console.log("Radius: 5");
console.log("Yuza:", circle1.getArea().toFixed(2));
console.log("Perimetr:", circle1.getPerimeter().toFixed(2));

console.log("------------");

const circle2 = new Circle(10);
console.log("Radius: 10");
console.log("Yuza:", circle2.getArea().toFixed(2));
console.log("Perimetr:", circle2.getPerimeter().toFixed(2));

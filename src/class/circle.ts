class Circles {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea() {
    const area = Math.PI * Math.pow(this.radius, 2);
    return area;
  }
}

const circles = new Circles(5);
const area = circles.calculateArea();
console.log(area);

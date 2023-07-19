class Shapes {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  getArea(): number {
    throw 1;
  }
}

class Circle extends Shapes {
  radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);
    return area;
  }
}

class Rectangle extends Shapes {
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;
    return area;
  }
}

const circle = new Circle('red', 5);
const rectangle = new Rectangle('blue', 4, 6);

console.log(circle.getArea());
console.log(rectangle.getArea());

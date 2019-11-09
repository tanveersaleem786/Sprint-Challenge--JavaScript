// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1 {

    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
    
  }

  const newcuboid = new CuboidMaker1(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker1 {
    
    constructor(length, width, height) {
        super(length, width, height);
    }

    function() {
        return Math.pow(this.length, 3);
    }

    surfaceArea() {
        return Math.pow(this.length, 6);
    }

}

const newCubeMaker = new CubeMaker(2, 2, 2);

console.log(newCubeMaker.volume()); // 8
console.log(newCubeMaker.surfaceArea()); // 64
// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker{
    constructor(length, width, height){
        this.length = length; 
        this.width = width; 
        this.height = height; 
    }
    volume(){
        return this.length * this.height * this.width; 
    }
    surfaceArea(){
        return 2*(this.length*this.width + this.length*this.height + this.width*this.height)
    }
}

const cuboid = new CuboidMaker (
    length= 4, 
    width= 5, 
    height= 5
)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface 
// area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(atts){
        super(atts); 
    }
// volume and surface area are essentially calculated the same for a cube as they are a cuboid. All cubes are cuboids but not all 
// cubeoids are cubes. Just because all of the sides are the same length doesn't change how volume or surface area are calculated. We could make 
// volume = width^3 or something, just like we could simplify the surface area calculation, but in the end, that would not be very efficient 
// because the end-result would still be the same.  To do this, we would just declare our volume and surface area methods inside the cubeMaker 
// class similar to how we did so for cuboidMaker
}

const cube = new CuboidMaker (
    length= 5, 
    width= 5, 
    height= 5
)

console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150
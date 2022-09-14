
//Object is a datatype that is represented using key value pairs

let car = {
    name : "Swift",
    brand : "Maruti",
    model: 2020,
    color:"White",
    getCarDetails:function(){
        return `The name of the car is ${this.name} and brand is ${this.brand}. 
        Model is ${this.model}`
    }
}

console.log(car);
console.log(car.color);
console.log(car.name);
console.log(car.brand);
console.log(car.model);

// Another way to access properties
console.log(car["brand"]);
console.log(car["name"]);
console.log(car["color"]);
console.log(car["model"]);


//Modify an object

//Updating any Property
// car.model = "Tata";
//Adding a new property to the object
car.owner = "Arjit"

delete car.owner;

console.log("Car Object after update:",car)
console.log(car["model"]);

let carDetails = car.getCarDetails();
console.log(carDetails)


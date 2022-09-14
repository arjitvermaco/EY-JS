class Car{
    constructor(name,year){
        this.name = name;
        this.year = year;
        this.color = 'red';
        this.noOfWheels = 4;
        this.abc = null;
    }

    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car("Maruti",2020);
let myCar2 = new Car("Tata", 2021);

console.log(myCar)
console.log(myCar2)

console.log("Age of my car is :",myCar.age())

console.log(myCar2.age())

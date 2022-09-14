// //spread operator is denoted by ... ES6 - 2015
// // it is used to quickly copy all or parts of an existing array or object into another array or object

// const numOne = [1,2,3];
// const numTwo = [4,5,6];
// const numsCombined = [...numOne,...numTwo];
// // console.log(numsCombined);


// const numThree = [88,55,...numOne]
// // console.log(numThree);


// const numbers = [1,2,3,4,5,6,7];


// const [one,two,three,...rest] = numbers;

// console.log(one);
// console.log(two);
// console.log(three);

// console.log(rest);

// const vehicle = ["Tata Nexon","TVS Apache","Eicher","abc","xyz"];

// //old way
// // const car = vehicle[0];
// // const bike = vehicle[1];
// // const tractor = vehicle[2];


// //New way
// // let [car,bike,tractor] = vehicle;
// let [car,,tractor,...motors] = vehicle;
// console.log(car,tractor)
// console.log(motors)


// function calculator(a,b){
//     const add = a+b;
//     const substract = a-b;
//     const multiple = a*b;
//     const divide = a/b;
    
//     return [add,substract,multiple,divide]
// };

// // let result = calculator(15,5);
// // console.log("Addition:",result[0]);
// // console.log("substract:",result[1]);
// // console.log("multiple:",result[2]);
// // console.log("divide:",result[3]);


// const [add,sub,mul,divide] = calculator(15,5)
// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(divide);

let car = {
    name : "Swift",
    brand : "Maruti",
    model: 2020,
    color:"White",
    type:"car"
}
//OLd way
// let carName = car.name;
// let carBrand = car.brand;
// let carModel = car.model;
// let carColor = car.color;
// let carType = car.type;

//Object destruct

let {name,brand,model,color,type} = car;

console.log(name);
console.log(brand);
console.log(model);
console.log(color);
console.log(type);


//Spread Operator In Obj

const vehicle1 ={
    brand:'Ford',
    model:'Mustang',
    color:'red'
}

const vehicle2 = {
    type:'car',
    year:2021,
    color:'Yellow'
}


const newVehicle = {...vehicle1,...vehicle2};

console.log(newVehicle)

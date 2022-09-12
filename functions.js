//Functions is a block of code that is only excuted when its envoked


var carName = "Swift";
var carBrand = "Maruti";
var carModel = 2020;
var carColor = "White";


//How to create a function

//Start with keyword "function" followed by name of the function

function logSomething(){
    //Block of code lives here 
    console.log("I am from a function")
}

console.log(carName);
logSomething();
console.log(carBrand);

function addTwoNumber(num1,num2){ //Parameter
    console.log("Sum of two numbers is :",num1+num2);
}


function returnFullName(firstName,lastName){
    // console.log("The Full Name is ", firstName + " " + lastName)
    console.log("Hello from function on top")
    return "The full name is :" +firstName + " " + lastName;
    console.log("Hello from function on bottom");
}

addTwoNumber(20,30); //Arguments
addTwoNumber(50,28); //Arguments
addTwoNumber("Welcome To ","Javascript"); //Arguments

let fullName = returnFullName("Rahul" , "Kumar");
console.log( fullName)


//Another way of declaring a function 
//Assign a function to a variable

const a = function(){
    console.log("Here i am from function a")
}

a();

//Arrow functions - ES6 - 2015
const b = (x,y)=>{
console.log(x,y)
}
b(2,3);

// const hello = (name)=>{
//     return "Hello" + " " + name;
// }

// const hello = (name) => "Hello" + " "+name;
const hello = name => "Hello" + " "+name;


const response = hello("Ankit");
console.log(response)




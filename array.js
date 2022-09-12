//Data Types

// String

let firstName  = "Arjit"; // Camelcase 
let lastName = 'Vermma';


// Number
let ageOfUser = 30;
let pi = 3.14;


typeof(firstName);

console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(ageOfUser));
console.log(typeof(pi));



//Array

const students = ["bharath","nandu","sumanth","Harsh",100,{
    name : "Rishi",
    age:30
}];


// students[5].name;
// students[5].age;


// using new keyword

let cars = new Array("Tata","maruti", "Audi","Kia");


let x = 10;

// console.log(students);
// console.log("Length of students is :",students.length);

// console.log(students[2]);

// console.log(cars[0]);

//Push - to add an element an array
console.log(cars)


cars.push("Volvo");

console.log(cars)

// students.push("Rahul")

students.pop(); // To remove element from the end of an array
console.log(students)
console.log(Array.isArray(cars));
console.log(Array.isArray(x));


cars.shift(); // to remove element from the beginning of an array
cars.unshift("Hyundia");

console.log("Cars array after shift",cars)


// pop -> removes from end of an Array
// push("Element") -> adds an element of the end an Array
// shift -> removes element from begining of an Array
// unshift("element") - > adds an element to the starting of an array
// Length - returns the length of an array
//Array.isArray => returns true or false if the variable is an array or not



//Merging Two Arrays

let girlsInClass = ["Anjana","Devi","Hasna","Divya","kiran"];
let boysInClass = ["Akash","Aby","Apoorv","Harsh","kiran"];
let thirdArray = ["ABc","xyz"]

let studentsInClass = boysInClass.concat(girlsInClass,thirdArray);

// boysInClass =  boysInClass.concat(girlsInClass);

console.log("Total students in class", studentsInClass)



//Splice - this is used to add new items to our array
//Modify the original array

let fruits = ["Banana","Orange","Apple ","Mango"];
// fruits.splice(2,1,"Lemon","Kiwi");

// fruits.splice(2,2);
// console.log(fruits)


//Slice - this is to delete
// Will Create a new array 

let newFruits = fruits.slice(2);
console.log(newFruits)








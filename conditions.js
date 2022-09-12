//Conditional Statement 


//IF else

// if(condition){
// //if condition is true then this block of code will be executed
// }else{
// //else condtion is false then this block will be executed
// }

// if(age >18){
//     console.log("User can vote");
// }else{
//     console.log("User cannot vote");
// }

// IF else 

function canUserVote(age){
  
    if(age >18){
        console.log("User can vote");
    }else{
        console.log("User cannot vote");

    }
}

canUserVote(13);


function greetingOfTheDay(time){
    if(time<12){
        console.log("Good Morning")
    }else if(time<16){
        console.log("Good Day")
    }else{
        console.log("Good Evening")
    }
}

greetingOfTheDay(20)


// switch case 
let age = 18;

switch(age){
    case 10:
        console.log("Age is 10");
        break;
    case 11:
        console.log("Age is 11");
        break;
    case 12:
        console.log("Age is 12");
        break;
    case 13 :
        console.log("Age is 13");
        break;
    default:
        console.log("Cannot match the age")
}

//Comparison Operators

let x = 12;//number
let y = 3;//string

if(x === y){
    console.log("X is equal to Y")
}else{
    console.log("X is not equal to Y")
}

// == only compares the value not the data type
// === compared both value and data type

// != not equal value
// !== not equal value and not equal type

if(x !== 8){
    console.log("X is not equal to 8")
}else{
    console.log("X is  equal to 8")

}

// > greater than
// < less than

// >= greater than or equal to 
// <= less than or equal to 

//Checking Multiple conditions

//Using and operator and both the conditions should be true

if(x < 10 && y>4){
    console.log("Both the conditions are true")
}else{
    console.log("One of the conditions is not true")

}

//Using Or operator and one of the condition should be true;

if(x < 10 || y>4){
    console.log("One  of the conditions is true")
}else{
    console.log("Both the conditions are false")
}
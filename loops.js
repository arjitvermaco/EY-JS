//For Loop

// for(expression 1, expression 2, expression 3){
//     //code to be executed
// }

// expression 1: it is executed (one time) before the execution of the code block
//expression 2 : defines the condtion for executing the code block
//expression 3: it is executed every time the code block has been executed.

for(let i=0;i<10;i++){
    console.log(i);
}


//FOr in 

let car = {
    name : "Swift",
    brand : "Maruti",
    model: 2020,
    color:"White"
}


for(let x in car){
    console.log(car[x]);
    // console.log(x)
}

const numbers = [45, 4, 9, 16, 25];

// for(let x in numbers){
//     // console.log(numbers[x]);
//     console.log(x)
// }

for(let i =0;i<numbers.length;i++){
    console.log(numbers[i])
}



//While Loop

// while(condtion){
//     //code block
// }

let a = 20;

// while(a<=15){
//     console.log("The number is :",a);
//     a++;
// }


//Do while

// do{
//     //code block
// }while(condition)

do{
    console.log("The number is :",a);
    a++;
}while(a<=15)
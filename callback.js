// function myFirst(){
//     myDisplayer("Hello");

 
// }

// function mySecond(){
//     myDisplayer("Goodbye")
// }


// function addNum(num1,num2){
//     let sum = num1 +num2;
//     return sum
// }

// let result = addNum(15,20);
// myDisplayer(result)


//Callback - its a function that is passed as on argument to another function

function myDisplayer(data){
    document.getElementById("demo").innerText = data
}

// function addNum(num1,num2,myCallback){
//     let sum = num1+num2;
//     myCallback(sum);
// }

// addNum(5,10,myDisplayer);

let intervalTimer;

function getDate(){
    let d = new Date();
    document.getElementById("demo").innerText = 
    d.getHours()+ ":"+
    d.getMinutes()+":"+
    d.getSeconds();

    // if(d.getSeconds()<30){
    //     clearInterval(intervalTimer);
    // }

}

// setTimeout(getDate,10000);

setInterval(getDate,5000);

// setInterval - will accept a function as a callback and execute it on repeat
// after that time frame

//setTimeout - will accept a function as a callback and will execute is once
// after the sepcified time frame




// function logSomething(){
//     console.log("Hello ")
// }
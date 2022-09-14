const d = new Date();

console.log(d); // console log the current datetime

console.log(d.getTime());
//return the number of milliseconds since 1 jan 1970

//Get full year

console.log(d.getFullYear());

console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getDay())

let today = d.getDay();

let daysArray = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log(`today day is ${daysArray[d.getDay()]}`)

switch(today){
    case 0:
        console.log("Today is SUnday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Cannot find the day")
}

let utime = d.getTime();

let date = new Date(utime).toLocaleDateString("en-US");
console.log(`The date is ${date}`)


let time = new Date(utime).toLocaleTimeString("en-US");
console.log(`The time is ${time}`);




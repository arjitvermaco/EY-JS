// let myPromise = new Promise((resolve,reject)=>{
// // Write some code that takes sometime

// resolve()// when success
// reject()// when we have error
// })

// //Consuming code

// myPromise.then(
//     function(value){
//         //code if successful
//     },
//     function(error){
//         // code if error
//     }
// )


function myDisplay(data){
    document.getElementById("demo").innerText = data;
}

let myPromise = new Promise((resolve,reject)=>{
    let x = 1;

    if(x == 0){
        resolve("Every thing is okay")
    }else{
        reject("Something went wrong")
    }
})

myPromise.then(
    function(value){
        myDisplay(value)
    },
    function(error){
        myDisplay(error)

    }
)
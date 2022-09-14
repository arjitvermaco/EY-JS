let documentTitle = document.title;
console.log(documentTitle)

document.title = "Learning JS"

console.log("Document URL",document.URL)
console.log("Document Scripts",document.scripts)
console.log("Document Scripts",document.links)



//Get element by id



let h1tag = document.getElementById("demoh1");
h1tag.innerHTML = "Hello from js file"; // change html

h1tag.style.color = "#ddd";

let h2tagRef = document.getElementsByTagName("h2"); // array of all the h2 elements from the html page
let h2tag = document.getElementsByTagName("h2")[0]; // contains first element from the array
let h2tag2 = document.getElementsByTagName("h2")[1]; // contains the second element from the array



h2tag.innerHTML = "Hello again"
h2tag2.innerHTML = "Learning for react bootcamp"


function onAnchorLink(){
    console.log("Link was clicked");
    let ptag = document.getElementById("demo");
    // ptag.className = "bigText"
    ptag.classList.toggle("bigText")
    // ptag.classList.remove("bigText")
    alert("alert from js")
}


function mOver(element){
    element.innerHTML = "Thank You"
}

function mOut(element){
    element.innerHTML = "Mouse Over Me"
}


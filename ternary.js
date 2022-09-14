function canVote(age){
    // if(age>=18){
    //     return "Can Vote"
    // }else{
    //     return "Cannot Vote"
    // }
    // condition ? exprIfTru : exprIfFalse

    age>=18 ? console.log("can vote"): console.log("Cannot Vote")
}

canVote(16)


function greeting (person){

    const name = person ? person:"stranger";
    console.log(`Hello ${name}`);
}

greeting()

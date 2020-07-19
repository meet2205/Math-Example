 function fact(number){
    let result =1;
    for(let i=2; i<=number; i++){
        result*= i;
    }
    return result;
}

console.log(fact(3))
console.log(fact(4))
console.log(fact(7))
 

/* 
-----Using Recursion-----

function fact(number){
    if(number===1){
        return 1;
    }
    return number * fact(number-1);
}

console.log(fact(3))
console.log(fact(4)) */


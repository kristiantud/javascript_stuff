// spread operators

//basics: 
function sum (a,b,c) {
    
    return a + b + c;
}

let numbers = [1,2,3];

console.log(sum(1,2,3)); // OUTPUT: 6

console.log(sum(numbers)); // OUTPUT: 1,2,3undefinedundefined 
                           // because b and c are undefined

console.log(sum(...numbers)); // OUTPUT: 6

console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); // OUTPUT: 10

let nums = [1,2,3,4,5,6,7,8,9,10];

console.log(Math.max(nums)); // OUTPUT: NaN
console.log(Math.max(...nums)); // OUTPUT: 10


// more:


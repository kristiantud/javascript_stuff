// What it is:
// 

// for arrays: this is how useState() in react is used
const alphabet = ['A','B','C','D','E','F'];
const numbers = ['1','2','3','4','5','6'];
const [a,b] = alphabet;

console.log(a,b); // A B

// in order to get all of the rest, we use the spread operator

const [,,c,d,...rest] = alphabet;
console.log(c,d); // C D
console.log(rest); // [E, F]

const newArray = [...alphabet, ...numbers];
console.log(newArray); // ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6']

// using it in fucntions
function sumAndMultiply(a,b){
    return [a+b,a*b, a/b];
}

const [sum, multiply, divide = "No divide"] = sumAndMultiply(2,3);
console.log(sum);
console.log(multiply);
console.log(divide);

// for objects: 
const person = {
    name: 'Jacob',
    age: 28,
    address: {
        city: 'Somewhere out there',
        state: 'That one'
    }
}

const {name: firstName = "Griffin", age} = person;

console.log(firstName);
console.log(age);

// nested deconstruction
const {address: {city}} = person;
console.log(city); // Somewhere out there
// in this case, address would be undefined, we are defining the value city

// combining objects
const personOne = {
    name: 'Shaq',
    age: 55,
    address: {
        city: 'Somewhere out there',
        state: 'That one'
    }
}

const personTwo = {
    age: 28,
    favoriteSnack: 'Trix'
}

const personThree = {...personOne, ...personTwo};
console.log(personThree); // {name: 'Shaq', age: 28, address: {…}, favoriteSnack: 'Trix'}
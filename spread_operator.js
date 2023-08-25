// spread operators
//cases:
// - in function calls
// - in array literals
// - in object literals

// in function calls:
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


// in array literals:

const dogs = ["Apollo", "Kilo", "Nala"];
const fish = ["Lawliet", "Amadeus"];

const animals = [dogs,fish];
console.log(animals); // OUTPUT: Array(2) - a nested array
const animals2 = [...dogs,...fish];
console.log(animals2); // OUTPUT: ['Apollo', 'Kilo', 'Nala', 'Lawliet', 'Amadeus']
const animals3 = [...dogs, "Monkeh", ...fish];
console.log(animals3); // OUTPUT:['Apollo', 'Kilo', 'Nala', 'Monkeh', 'Lawliet', 'Amadeus']

const aNewArray = animals3;
aNewArray.push("Hello");
console.log(aNewArray);
console.log(animals3);

// aNewArray and animals3 are pointing to the same thing in memory
// so any changes in aNewArray happens to animals3
// to fix this:
const anotherNewArray = [...animals3]
anotherNewArray.push("Hello");
console.log(anotherNewArray); // ['Apollo', 'Kilo', 'Nala', 'Monkeh', 'Lawliet', 'Amadeus', 'Hello', 'Hello']
console.log(animals3); // ['Apollo', 'Kilo', 'Nala', 'Monkeh', 'Lawliet', 'Amadeus', 'Hello']

const x = [[1,2],[3,4],[5,6]];
const y = [...x];

console.log(y);
x[1][0] = "Hello";
console.log(x);
console.log(y);

// notice how in both x and y, [1][0] has been changed.
// this is because for nested arrays, only a shallow copy is made
// 

// in object literals:
const mainColors = {brightRed: "#e55039", waterfallBlue: "38ada9"};
const accentColors = {lightGrey: "#778ca3", swanWhite: "#f7f1e3"};

const fullPalette = {...mainColors, ...accentColors};
console.log(fullPalette); // {brightRed: '#e55039', waterfallBlue: '38ada9', lightGrey: '#778ca3', swanWhite: '#f7f1e3'}

const lion = {hasTail: true, legs: 4}
const eagle = {canFly: true}
const hybrid = {name: "Griffin", ...lion, ...eagle}
console.log(hybrid); //{name: 'Griffin', hasTail: true, legs: 4, canFly: true}


// WHY?
// this concept is important because in front end frameworks such as React, Vue, 
// object ids and references are used to keep track of when states have changed
// so we want to use spread operators to prevent the interface not reacting to changes
// or interface reacting when nothing has changed at all

const todos = [
    {user: "Brick", completed: false, task: "Upload Video"},
    {user: "Boring", completed: true, task: "Listen to Country Music"},
]

function addTodo(newTodo){
    todos.push(newTodo);
}

// THIS WILL CAUSE REACT TO CHANGE SINCE WE ARE CHANGING/MUTATING THE ARRAY

//THE RIGHT WAY:
function addTodo2(newTodo){
    return [...todos, {...newTodo, completed:false}]
}
const randomObject = {user:"Jerry", task: "Annoy Morty"}
console.log(addTodo2(randomObject));
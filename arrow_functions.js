// Anonymous Functions
const sayHello = function () {
    return "Hello";
}

// arrow funct
const sayHello2 = () => {
    return "Hello";
}

const sayHello3 = (name) => {
    return `Hello, ${name}`;
}

const sayHello4 = function() {
    console.log(arguments);
}

const sayHello5 = () => {
    console.log(arguments);
}

console.log(sayHello());
console.log(sayHello2());
console.log(sayHello3('Nameless'));
sayHello4('K', 'T', 28); // Arguments(3) ['K', 'T', 28, .....]
sayHello5('H','B',27); // Uncaught ReferenceError: arguments is not defined

// Callback functions
setTimeout(function(){
    return "Hello";
})

// Named functions
function sayHelloNamed() {
    return {};
}

// constructor
function person(n){
    this.name = n;
}

// Object methods:
const me = {
    sayHello: function(){}
}


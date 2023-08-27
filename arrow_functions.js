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
// sayHello5('H','B',27); // Uncaught ReferenceError: arguments is not defined

// ------------------- //

// Callback functions/higher order functions
setTimeout(function(){
    return "Hello";
}, 1000);

// arrow funct
setTimeout(() => {
    console.log('Hello!');
},1000)


// ------------------- //

// Named functions
function sayHelloNamed() {
    console.log('Hello named');
}
sayHelloNamed();

// Arrow function is always anonymous, therefore there is no way to create 
// arrow function that is also named function

// ------------------- //

// constructor
const person = (n) => {
    this.name = n;
}

// const Justin = new person('Justin'); // Uncaught TypeError: person is not a constructor

// ------------------- //

// Object methods:
const me = {
    hello: function(){
        console.log('Hello object');
        
    },
    hello2: () => { // watch out for this!!
        console.log("Hello Object2");
    }
}

me.hello();
me.hello2();


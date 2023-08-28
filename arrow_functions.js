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

// -------------------- // 
// benefits: 
// - aesthetics
// - scope (this) changes

const me2 = {
    name: "Kristian",
    talk: function() {
        console.log(this);
    },
    talk2: () => {
        console.log(this);
    },
    whatsThis: this
}

me2.talk(); // {name: 'Kristian', talk: ƒ, talk2: ƒ}
me2.talk2(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

console.log(me2.whatsThis); // {window: Window, self: Window, document: document, name: '', location: Location, …}

// in objects, this refers to Window and not the object, so when we use arrow function in object,
// we are referring to "this" as the window
// objects don't create binding with "this", functions do

// benefits?
const me3 = {
    name: 'Kristian',
    talk: function() {
        setTimeout(() => {
            console.log(this.name);
        },100)
    }
}

me3.talk();
// since talk is a normal funciton, even though setTimeout uses an arrow function to call "this",
// it returns the name 'Kristian' because me3.talk() is bound to the m3 object

// -------------- //
// for constructors 
function Person(n) {
    this.name = n;
}

Person.prototype.talk = function() {
    return this;
}

Person.prototype.arrowTalk = () => {
    return this;
}

const me4 = new Person('Kristian');
console.log(me4.talk());
console.log(me4.arrowTalk());

// callback functions: functions passed as parameter to another function
// when adding function to a DOM element for example, we want to avoid using arrow function because
// if we were to refer to this DOM element with "this" in an arrow function, "this" will not be bound to 
// the DOM element, so it would refer to the Window as we saw earlier. 

function outer1 (callback, obj) {
    callback(obj);
}

function outer2 (callback, obj) {
    callback.call(obj);
}

function inner (){
    console.log(this);
}

outer1(inner, {name: 'Kristian'}); // Window
outer2(inner, {name: 'Kristian'}); // Person

// the second one works because the .call() function binds the object to the inner function, 
// so that when the inner function calls "this", it is referring to the object


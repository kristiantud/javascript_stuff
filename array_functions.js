const numbers = [1,2,3,4,5];

// forEach method
// numbers.forEach(consoleItem);

function consoleItem(item, index, arr) {
    console.log('a[' + index + '] = ' + item);
}

// as arrow function
numbers.forEach((item, index, arr) => {
    console.log('a[' + index + '] = ' + item);
})

let sum = 0;

numbers.forEach(item => {
    sum+= item;
})

console.log(sum); // 15

const letters = ['a','b','c','a','b','e'];

let count = {

};

letters.forEach(item => {
    if (count[item]){
        count[item]++;
    } else {
        count[item] = 1;
    }
})

console.log(count); // {a: 2, b: 2, c: 1, e: 1}

const firstWord = ['h','e','l','l','o'];
const secondWord = ['o','l','l','e','h','h'];

let firstCount = {};
let secondCount = {};

firstWord.forEach(i => {
    if (firstCount[i]){
        firstCount[i]++;
    } else {
        firstCount[i] = 1;
    }
})

secondWord.forEach(i => {
    if(secondCount[i]) {
        secondCount[i]++;
    } else {
        secondCount[i] = 1;
    }
})

console.log(firstCount);
console.log(secondCount);
let validPalindrome = true;

for (const letter of Object.keys(firstCount)){
    // check for the keys values in secondCount
    // console.log(firstCount[letter] + " and " + secondCount[letter]);
    if (!(secondCount[letter] === firstCount[letter])){
        validPalindrome = false;
        break;
    }
}

if (validPalindrome){
    console.log(firstWord + " and " + secondWord + " are palindromes!");
} else {
    console.log(`${firstWord} and ${secondWord} are not valid palindromes.`);
}


// difference between for-of and for-in
const someArray = [3,4,5];

for (let x in someArray){
    console.log(x); // 0 1 2
}

for (let x of someArray){
    console.log(x); // 3 4 5
}

// basically, for-of has its own iterator, and so it is able to grab the values of the array instead of just starting at 0 and iterating

// map function
// what i sthe difference between forEach() and map()?
// forEach will not return a new array
// map will return a new array
// map is used to manipulate data in the array and then returns the manipulated data
// forEach simply just iterates the array
const numbers2 = [1,2,3,4,5];

numbers2.map(double);


function double(curr,index,arr) {
    
    return curr * 2;
}

const numbers2Doubled = numbers2.map(double);

console.log(numbers2Doubled);

const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5,

    },
    {
        name: 'desktop',
        price: 1500,
        count: 2,

    },
    {
        name: 'phone',
        price: 500,
        count: 15,

    }

]

const totalProductsValue = products.map(item => item.price*item.count);
console.log(totalProductsValue); //[5000, 3000, 7500]

// pretty much, item (or any value as first parameter) becomes the "main/current" value, 
// kind of like when we use for-of
// item => item.price * item.count is the same as
// function (item) { return item.price * item.count}
// only in this case, since map returns an array, the value is returned as the value of whatever 
// index the iterator was in
// so, if i understand this currectly, if i were to use forEach, it wouldn't work
const totalProductsForEach = products.forEach(item => item.price*item.count);
console.log(totalProductsForEach); // undefined

// if we want to create objects instead: 
const totalProductObjects = products.map(item => 
    ({
        'name': item.name, 'total': item.price*item.count,
    })
);
console.log(totalProductObjects);


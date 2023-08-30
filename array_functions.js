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
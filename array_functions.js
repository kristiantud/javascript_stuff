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
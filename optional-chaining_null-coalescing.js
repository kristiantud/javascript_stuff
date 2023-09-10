// optional chaining
// pretty much an if statement that checks whether or not the type exists

const pokemon = {
    name: "charmander",
    types: [
        {
            type: "fire",
            gender: "M"
        }
    ]
}

console.log(pokemon); // Object (...)
console.log(pokemon.name); // charmander
console.log(pokemon.types[0].type); // fire
// console.log(pokemon.types[1].type); // error
console.log(pokemon.types[1]?.type); // undefined


// null coalescing
// sets the default value 

// old way:
const course = {
    name: "The Best JS Course In The World",
    regularPrice: 129.99,
    discountedPrice: 89.99
}

const price = course.discountedPrice || regularPrice;
console.log(price); // 89.99

// but what happens if we do something like ... 

const course1 = {
    name: "Second Best Course",
    regularPrice: 129.99,
    discountedPrice: 0
}
const price1 = course1.discountedPrice || course1.regularPrice;
console.log(price1); // 129.99
// it takes the regular price since it is taking 0 as a 'falsey' value


// with null coalescing, always return left unless null/undefined. 
// we did this a lot with react
// i'm assuming there will be use for vue as well when it comes to rendering stuff
// on second thoight, in vue there are v-if and v-else statements so we migt not need these but its good to know
// actually we're thinking of the conditional ternary operator here, which is ? () : ()

const price2 = course1.discountedPrice ?? course1.regularPrice;
console.log(price2); // 0

// using ternary operator:
const price3 = (course1.discountedPrice) ? (course1.discountedPrice) : (course1.regularPrice);
console.log(price3);

// like the first way of using ||, since course1.discountedPrice is 0, we return the second price and not the first price

























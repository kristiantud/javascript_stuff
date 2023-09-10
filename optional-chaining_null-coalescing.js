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


// 

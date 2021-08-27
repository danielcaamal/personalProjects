console.log("ENVIRONMENTS");

let greet = process.env.GREET || "NO VARIABLE";
console.log(greet);
console.log("New change");




// INPUT
// GREET="HELLO WORLD" node concepts/environment.js
// OUTPUT
// "HELLO WORLD"

// INPUT
// node concepts/environment.js
// OUTPUT
// "NO VARIABLE"
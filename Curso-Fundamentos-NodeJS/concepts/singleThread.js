console.log("Hello World");

let i = 0;

setInterval(() => {
    try {
        i === 5 ? console.log(`Force Error ${i++ + z}`) : console.log(`Still here [${i++}]`);
    } catch ( err ) { console.log("Something go wrong") }
}, 1000);

console.log("Last Instruction 4");
let i = 0;
let interval = setInterval(() => {
    i === 3 ? 
        clearInterval(interval) :
        console.log(`Hi [${i++}]`);
}, 3000);

console.log(global);
console.log(process);
console.log(__dirname);
console.log("bye");
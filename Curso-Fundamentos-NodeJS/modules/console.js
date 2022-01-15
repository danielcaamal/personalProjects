// Print Console
console.log("Something");
console.info();
console.warn("Something");
console.error("Something");

// Tables
let table = [
    {
        a: 1,
        b: 2,
    },
    {
        a: 3,
        b: 4,
    }
]
console.table(table);

// Indentation
console.group('Conversation');
console.log('Hi');
console.log('Bye');
console.groupEnd('Conversation');

// Counters
console.count('times');
console.count('times');
console.count('times');

console.countReset('times');
console.count('times');
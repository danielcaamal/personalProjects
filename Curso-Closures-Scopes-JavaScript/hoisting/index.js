// Hoisting
a = 2;
var a;
console.log(a);

// JavaScript solo aplica el hoisting en declaraciones y no inicializaciones
console.log(a);
var a = 2;

nameOfDod('Elmo');
function nameOfDod (name) {
    console.log(name);
}
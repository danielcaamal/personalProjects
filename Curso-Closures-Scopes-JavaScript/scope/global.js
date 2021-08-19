// Puede ser reasignado pero es una mala práctica
var hello = 'HELLO';

// No se pueden reasignados
let world = 'WORLD';
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld)
}

anotherFunction();


// Establece una variable global, es una mala práctica
const helloWorld = () => {
    globalVar = 'im global';
}

helloWorld();
console.log(globalVar);


// Doble asignación de variables, mala práctica
const anotherFunction = () => {
    var localVar = globalVar = 'Im Global';
}

anotherFunction();
console.log(globalVar);

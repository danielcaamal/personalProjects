const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}
fruits();

console.log(fruit);

const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    // Las variables con let y const no se pueden re-declarar
    // let y = 2;
    y = 2;
    const z = 1;
    // Las variables const no se pueden reasignar
    // const z = 2;
    // z = 2
    console.log(x)
    console.log(y)
    console.log(z)
}

anotherFunction();
const iAmAsynchronus = ( name, myCallback ) => { 
    console.log("Hi " + name);
    setTimeout(() => {
        console.log("I am being asynchronus");
    }, 2000); 
    setTimeout(() => {
        console.log("Bye " + name);
        myCallback();
    }, 5000);
} 

console.log("Starting Process...");
iAmAsynchronus("Daniel",() => { console.log("Ending Process..."); });
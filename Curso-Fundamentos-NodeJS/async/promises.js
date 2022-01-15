function hello (name){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Hello " + name);
            resolve(name)
        }, 1500);
    })
    
}

console.log("Stating Process...")
hello('Daniel')
    .then(name => console.log("Ending Process..."))
    .catch( err => console.log("Something go wrong :(") )
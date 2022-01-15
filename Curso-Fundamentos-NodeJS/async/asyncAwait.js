async function hello (name){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Hi " + name);
            resolve(name)
        }, 1500);
    })
    
}

async function main(){
    console.log("Good Morning");
    await hello("Daniel");
    console.log("Goodbye");
}

console.log("Stating Process...");
main();
console.log("Ending Process...");
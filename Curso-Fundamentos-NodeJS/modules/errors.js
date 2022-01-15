const badFunction = () => {
    return 3 + z;
}

const asynchronusBadFunction = (cb) => {
    setTimeout(() => {
        try {
            badFunction();
        } catch (err){
            cb(err);
        }
        
    }, 2000);
}


console.log("Starting Process...")
try {
    badFunction();
} catch (err) {
    console.error("Something go wrong");
    console.error("ERROR:", err.message);
}

try {
    asynchronusBadFunction(err => console.log("ERROR:", err.message));
} catch (err) {
    console.error("Something go wrong");
    console.error("ERROR:", err.message);
}

console.log("Ending Process...");

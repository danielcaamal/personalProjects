function hello (name, myCallback){
    setTimeout(function () {
        console.log("Hello " + name);
        myCallback(name);
    }, 1500);
}

function talk (talkingCallback){
    setTimeout(function () {
        console.log("Bla bla bla bla...");
        talkingCallback();
    }, 1000);
}

function goodbye (name, anotherCallback){
    setTimeout(function () {
        console.log("Goodbye " + name);
        anotherCallback(name);
    }, 2000);
}

function conversation(name, times, callback){
    times > 0 ? 
        talk(function () { conversation(name, --times, callback) }) : 
        goodbye(name, callback)
}

hello('Daniel', function (name) {
    conversation(name, 3, function(){
        console.log("Ending Process");
    });
})
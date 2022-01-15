const { exec, spawn } = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
    if(err) {
        console.log("ERROR:", err.message);
        return false;
    }
    console.log(stdout);
});

let process = spawn('ls', ['-la']);
console.log(process);

process.stdout.on('data', (data) => {
    console.log(data.toString());
});

process.on('exit', () => {
    console.log("Ending Process...");
})
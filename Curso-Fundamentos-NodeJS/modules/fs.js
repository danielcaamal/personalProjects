const fs = require('fs');
const { fileURLToPath } = require('url');

function readFile(path, cb) {
    fs.readFile(path, (err, data) => {
        cb(data.toString());
    });
}

function writeFile(path, content, cb) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if (err)  cb("Something go wrong");
            else {
                cb("File Successfully write");
                resolve('ok')
            }
        });
    })
}

const deleteFile = (path, cb) => {
    fs.unlink(path, (err) => {
        err ? 
            cb("Something go wrong") :
            cb("File Successfully Deleted");
    });
}

readFile(__dirname + '/file.txt', console.log);
writeFile(__dirname + '/writeFile.txt', 'I am a new file \nThis is the second line', console.log);
writeFile(__dirname + '/deleteFile.txt', 'I will be deleted', console.log)
    .then((res) => deleteFile(__dirname + '/deleteFile.txt', console.log));
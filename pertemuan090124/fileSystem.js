const fs = require('fs');

// const perkenalan = fs.readFileSync("perkenalan.txt");

// console.log(perkenalan.toString());

// writefilesync
let data = "Ini adalah file";

fs.writeFileSync("perkenalan.txt", data)
// console.log(data);


// readfilesync
let readFile = (fs.readFileSync(("perkenalan.txt")).toString());
console.log(readFile);


// unlinksync
// fs.unlinkSync("perkenalan.txt")

// mkdirsync
// fs.mkdirSync("./perkenalan")

// existsSync
let fileExists = fs.existsSync('index.js');
console.log(fileExists);
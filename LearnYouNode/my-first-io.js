const fs = require("fs");

let file = fs.readFileSync(process.argv[2], "utf-8");

let length = file.toString().split("\n").length - 1;

console.log(length);

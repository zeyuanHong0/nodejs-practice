const path = require("path");

console.log(path.sep);
console.log(path.resolve(__dirname, "11-path.js"));
// console.log(__filename)
console.log(path.parse(__filename));

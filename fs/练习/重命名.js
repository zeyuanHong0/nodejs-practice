const fs = require("fs");

const files = fs.readdirSync("../code");
console.log(files);
// 重命名文件
files.map((file) => {
  let num = file.split("-")[0];
  const name = file.split("-")[1];
  if (num < 10) {
    num = `0${num}`;
  }
  const newName = `${num}-${name}`;
  fs.rename(`../code/${file}`, `../code/${newName}`, (err) => {
    if (err) {
      console.log(err);
    }
  });
});

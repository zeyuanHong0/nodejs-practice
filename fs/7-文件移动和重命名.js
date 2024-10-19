const fs = require("fs");

// 重命名文件
fs.rename("../hello.txt", "../hello-1.txt", (err) => {
  if (err) return console.error(err);
  console.log("重命名文件成功");
});

// 移动文件
fs.rename("../hello-1.txt", "./hello-1.txt", (err) => {
  if (err) return console.error(err);
  console.log("移动文件成功");
});
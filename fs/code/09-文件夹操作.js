const fs = require("fs");

// 创建文件夹
// fs.mkdir("./test", (err) => {
//   if (err) return console.error(err);
//   console.log("创建文件夹成功");
// });

// 递归创建文件夹
// fs.mkdir("./test/test1/test2", { recursive: true }, (err) => {
//   if (err) return console.error(err);
//   console.log("递归创建文件夹成功");
// });

// 读取文件夹
// fs.readdir("./", (err, files) => {
//   if (err) return console.error(err);
//   console.log("读取文件夹成功", files);
// });

// 删除文件夹
// fs.rmdir("./test", { recursive: true }, (err) => {
//   if (err) return console.error(err);
//   console.log("删除文件夹成功");
// });

fs.rm("./test", { recursive: true }, (err) => {
  if (err) return console.error(err);
  console.log("删除文件夹成功");
});

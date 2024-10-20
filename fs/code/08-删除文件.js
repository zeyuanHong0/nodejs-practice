const fs = require("fs");

// fs.unlink("../hello-1.txt", (err) => {
//   if (err) return console.error(err);
//   console.log("删除文件成功");
// });

fs.rm("../hello-1.txt", (err) => {
  if (err) return console.error(err);
  console.log("删除文件成功");
});

const fs = require("fs");

// fs.appendFile("./hello.txt", "你好，世界！", (err) => {
//   if (err) console.error("追加写入失败");
//   else console.log("追加写入成功");
// });

fs.writeFile("./hello.txt", "Hello, World!", { flag: "a" }, (err) => {
  if (err) console.error("追加写入失败");
  else console.log("追加写入成功");
});

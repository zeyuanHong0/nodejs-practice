const fs = require("fs");

fs.writeFile("./hello.txt", "Hello, World!", (err) => {
  if (err) console.error("写入失败");
  else console.log("写入成功");
});

// 同步写入
// fs.writeFileSync("./hello.txt", "Hello, World!");
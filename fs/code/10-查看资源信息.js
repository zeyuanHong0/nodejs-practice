const fs = require("fs");

fs.stat("../zonda.mp4", (err, data) => {
  if (err) return console.error(err);
  console.log("查看文件信息成功", data);
  console.log(data.isFile());
  console.log(data.isDirectory());
});

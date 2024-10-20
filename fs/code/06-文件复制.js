/**
 * 复制zonda.mp4文件为zonda2.mp4
 */

const fs = require("fs");
const process = require("process");

// 读取文件
// fs.readFile("../zonda.mp4", (err, data) => {
//   if (err) return console.error(err);
//   console.log("读取文件成功", data);

//   // 写入文件
//   fs.writeFile("../zonda2.mp4", data, (err) => {
//     if (err) return console.error(err);
//     console.log("写入文件成功");
//   });
// });

// 流式操作
const rs = fs.createReadStream("../zonda.mp4");

const ws = fs.createWriteStream("../zonda3.mp4");

// rs.on("data", (chunk) => {
//   ws.write(chunk);
// });

// rs.on("end", () => {
//   console.log(process.memoryUsage()); // 占用了多少内存
// });

rs.pipe(ws);
const fs = require("fs");

const rs = fs.createReadStream("../zonda.mp4");

rs.on("data", (chunk) => {
  console.log(chunk.toString());
});

rs.on("end", () => {
  console.log("读取完成");
});

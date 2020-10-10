const fs = require("fs");
fs.readFile("hello.txt", (err, data) => {
  if (err) {
    console.log("error:", err);
  }
  console.log(data.toString("utf-8"));
});
console.log(__dirname);

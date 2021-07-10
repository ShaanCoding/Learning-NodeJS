const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const data2 = data.toString().split("\n").length - 1;
    console.log(data2);
  }
});

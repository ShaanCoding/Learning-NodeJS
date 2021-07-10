const readDirectoryFilter = require("./mymodule");

let fileName = process.argv[2];
let fileExt = process.argv[3];

readDirectoryFilter(fileName, fileExt, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((i) => {
      console.log(i);
    });
  }
});

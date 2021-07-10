// Prints a list given a directory
// First argument pathtodir, and second one should be file extension

const fs = require("fs");

fs.readdir(process.argv[2], (err, files) => {
  if (err) console.log(err);

  files.forEach((i) => {
    if (i.endsWith(`.${process.argv[3]}`)) {
      console.log(i);
    }
  });
});

// Alternative is

// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })

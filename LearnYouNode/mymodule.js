const fs = require("fs");

module.exports = function (fileName, fileExt, callback) {
  fs.readdir(fileName, (err, files) => {
    if (err) {
      return callback(err);
    } else {
      let filteredFiles = files.filter((file) => file.endsWith(`.${fileExt}`));
      return callback(null, filteredFiles);
    }
  });
};

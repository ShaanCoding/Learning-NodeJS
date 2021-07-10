const http = require("http");

// Make one that performs a http get request by the URL provided to you as the first command line argument
// Write the string contents of each data event stdout

http.get(process.argv[2], (res) => {
  res.setEncoding("utf8");
  res.on("data", (data) => {
    console.log(data);
  });
});

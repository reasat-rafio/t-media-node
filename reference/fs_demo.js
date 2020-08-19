const fs = require("fs");
const path = require("path");

//create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("folder created");
});

//create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "/hello.txt"),
  "Hello word",
  (err) => {
    if (err) throw err;
    console.log("file written");

    //add more to the file
    fs.appendFile(
      path.join(__dirname, "/test", "/hello.txt"),
      ",  i will start a business after i get a source of income",
      (err) => {
        if (err) throw err;
        console.log("append done");
      }
    );
  }
);

//read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

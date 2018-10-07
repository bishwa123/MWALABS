var fs = require("fs");
var path = require("path");
process.on("message", msg =>{
    const filePath = path.join(__dirname, process.argv[2])
    var readStream = fs.createReadStream(filePath);
    readStream.on("data", function(chunk){
       console.log("reading");
       process.send(chunk.toString());
    })
})
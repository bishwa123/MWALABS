const http = require("http");
const path = require("path");
const fs = require("fs")

http.createServer((request, response) => {
    var filePath = path.join(__dirname, 'movie.mp4');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size
    });

  //  fileSystem.readFile

    var readStream = fs.createReadStream(filePath);
   //readStream.pipe(response);
   readStream.on("data", function(chunk){
       response.write(chunk);
      // response.end();
   })
}).listen(4000,'127.0.0.1');
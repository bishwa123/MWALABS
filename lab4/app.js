const http = require("http");
const{fork} = require("child_process");
const url = require("url");
const server = http.createServer();


server.on("request", (req, res) =>{
     filePath = url.parse(req.url, true);
     console.log(filePath.query.url);
    const childProcess = fork('readfiles.js',[filePath.query.url]);
    childProcess.send("start");
    childProcess.on("message", file =>{
         res.end(file);
    });

console.log("end");
});
server.listen(3003, ()=>{console.log("listening to 3003")});
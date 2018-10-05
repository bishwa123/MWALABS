const EventEmitter = require("events")

class GoEMitter extends EventEmitter{
    constructor(){
        super();
     setInterval(()=> {
         console.log("emiting go event");
         this.emit("go")},1000);
        }
}

var goEmitter = new GoEMitter();
goEmitter.on("go",()=>console.log("Athelete is working out"));

const EventEmitter = require("events");

//Create Class
class MyEmitter extends EventEmitter {}

//Init object
const myEmitter = new MyEmitter();

//Event listener
myEmitter.on("event", () => console.log("event fire"));

//Init event
myEmitter.emit("event");

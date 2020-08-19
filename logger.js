const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    //Call event
    this.emit("massage", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;

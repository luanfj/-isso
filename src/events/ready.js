const Event = require("../struct/Event");

class ReadyEvent extends Event {
  constructor() {
    super("ready");
  }
  
  run() {
    console.log("Iniciado: " + this.client.user.tag)
  }
}

module.exports = ReadyEvent;

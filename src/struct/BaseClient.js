const { Client } = require("discord.js");
const Loader = require("./Loader");

class BaseClient extends Client {
  constructor(options = {}) {
    super(options);
    
    this.commands = [];
  }
  
  async login(token) {
    const loader = await new Loader(this);
    loader.Load("./src/events");
    loader.Load("./src/commands");
    
    super.login(token);
  }
}

module.exports = BaseClient;

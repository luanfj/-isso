const Command = require("../../struct/Command");

class PingCommand extends Command {
  constructor() {
    super({
      name: "ping",
      aliases: ['p']
    });
  }
  
  run({message}) {
    message.channel.send(`API: ${Math.floor(this.client.ping)}ms / Messagem: ${Math.floor(Date.now() - message.createdTimestamp)}ms`);
  }
}

module.exports = PingCommand;

import Event from '../struct/Event';

class Message extends Event {
  constructor() {
    super("message");
  }

  run(message) {
    if(message.author.bot || message.channel.type === "dm") return;
    
    const prefix = "]";
    
    this.client.commands.forEach(command => {
      if(command.execute(message, prefix)) return;
    });
  }
}

export default Message;

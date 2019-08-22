class Command {
  constructor(options = {}) {
    this.name = options.name;
    this.aliases = options.aliases || [];
    this.category = options.category || "None";
  }
  
  register(client) {
    this.client = client;
    
    this.client.commands.push(this);
  }
  
  async start(message) {
    const prefix = "bot!";
    
    const rawArgs = message.content.split(" ");
    
    let names = [this.name];
    
    this.aliases.forEach(alias => {
      names.push(alias);
    });
    
    const find = names.map(command => prefix + command);
    
    if(find.includes(rawArgs[0])) {
      try {
        const args = rawArgs;
        args.shift();
        
        await this.run({message, args});
      } catch (e) {}
    }
  }
}

module.exports = Command;

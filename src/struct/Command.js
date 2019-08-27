class Command {
  constructor(options = {}) {
    this.name = options.name;
    this.aliases = options.aliases || [];
    this.category = options.category;
    
    this.onlyOwner = options.onlyOwner || false;
		this.memberPermissions = options.memberPermissions || [];
		this.botPermissions = options.botPermissions || [];
  }

  register(client) {
    this.client = client;
    
    this.client.commands.push(this);
  }
  
  async execute(message, prefix) {
    const rawArgs = message.content.split(" ");
    
    let names = [this.name];
    
    this.aliases.forEach(alias => {
      names.push(alias);
    });
    
    const commands = names.map(command => prefix + command);
    
    if(commands.includes(rawArgs[0])) {
      try {
        const missingMemberPermissions = this.memberPermissions.filter((permission) => !message.member.hasPermission(permission));
        
        if (missingMemberPermissions.length !== 0) {
					message.reply("você não tem permissão para executar este comando!");
					return true;
				}
        
        const missingBotPermissions = this.botPermissions.filter((permission) => !message.guild.me.hasPermission(permission));

				if (missingBotPermissions.length !== 0) {
					message.reply("Eu não consigo executar este comando pois eu preciso das permissões: __**" + missingBotPermissions.join(", ") + "**__!");
					return true;
				}
        
        const args = rawArgs;
        args.shift();
        
        await this.run({ message, args });
      } catch(e) {}
    }
  }
  
  loadingEmbed(message, RichEmbed) {
    const embed = new RichEmbed()
      .setTitle(message.guild.name, message.guild.iconURL)
      .setDescription("<a:loading:615520808424570901> Aguarde um momento...")
      .setColor(0x36393e)
      .setFooter(message.author.username, message.author.avatarURL)
    
    return message.channel.send(embed);
  }
}

export default Command;

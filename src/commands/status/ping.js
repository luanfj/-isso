import Command from '../../struct/Command';
import { RichEmbed } from 'discord.js';

class Ping extends Command {
  constructor() {
    super({
      name: "ping"
    });
  }

  run({ message, args }) {
    const embed = new RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("Latency", `${Math.floor(Date.now() - message.createdTimestamp)}ms`, true)
      .addField("API Latency", `${Math.floor(this.client.ping)}ms`, true)
      .setColor(0x36393f)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTimestamp()
    
    this.loadingEmbed(message, RichEmbed).then(msg => {
      msg.edit(embed);
    });
  }
}

export default Ping;

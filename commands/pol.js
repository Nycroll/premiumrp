const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `Je hebt geen admin, ${message.author.username}`
      );
    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        `Je hebt het id van je kanaal niet genoemd / gegeven!`
      );
    }
    let question = message.content
      .split(`${bot.prefix}poll ${channel} `)
      .join("");
    if (!question)
      return message.channel.send(`Je hebt je vraag niet gesteld!`);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`Nieuwe poll!`)
      .setDescription(`${question}`)
      .setFooter(`${message.author.username} heeft deze poll gemaakt.`)
      .setColor(`RANDOM`);
    let msg = await bot.channels.cache.get(channel.id).send(Embed);
    await msg.react("👍");
    await msg.react("👎");
  },

module.exports.help = {
    name: "pol"
}
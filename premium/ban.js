const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Je hebt geen permanentie om iemand te verbannen`)
    }
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, Ik heb niet de plicht om iemand te verbieden...`)
    }
    
    const target = message.mentions.members.first();
    
    if(!target) {
      return message.channel.send(`**${message.author.username}**, Vermeld alstublieft de persoon die u wilt bannen.`)
    }
    
    if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, Je kunt jezelf niet verbannen!`)
    }
    
   
    
   if(!args[1]) {
     return message.channel.send(`**${message.author.username}**, Geef a.u.b. reden om een verbod op te leggen aan een lid.`)
   }
    
    let embed = new discord.MessageEmbed()
    .setTitle("Action : Ban")
    .setDescription(`Banned ${target} (${target.id})`)
    .setColor("#ff2050")
    .setThumbnail(target.avatarURL)
    .setFooter(`Banned by ${message.author.tag}`);
    
    message.channel.send(embed)
    target.ban(args[1])
    
    
    
  }

module.exports.help = {
    name: "ban",
    category: "tester",
    description: "Ban systeem Premium Roleplay",
    usage: "ban <@gebruikersnaam> <reden>",
    cooldown: 50000,
    botPermission: ["BAN_MEMBERS"],
    authorPermission: ["BAN_MEMBERS"],
}
const { MessageEmbed } = require("discord.js")

module.exports.run = async (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("> `Geef alsjeblieft een suggestie op.`")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggesties" || x.name === "suggesties"))
    
    
    if(!channel) {
      return message.channel.send("> `Er is geen kanaal met de naam - suggesties`")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("#ffc843")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
      return message.delete()
    })
    
  }

module.exports.help = {
    name: "suggestie"
}
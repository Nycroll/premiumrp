const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if(message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let arguments = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startWith(prefix)) return;
    let commandFile = bot.commands.get(cmd.slice(prefix.lenght)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandFile) commandFile.run(bot, message, args)

        let embed = new DiscordAPIError.MessageEmbed()
        .setTitel('Premium Roleplay')
        .setDescription('Om toegang te krijgen tot de stad moet je hieronder reageren door op de emoji te klikken.')
        .setColor("#ffc843")
        let msgEmned = await message.channel.send(embed)
        msgEmned.react("✅")
    }

module.exports.run =  async (client, message, args) => {

    if (discord.message.message.partical) await discord.message.fetch();
    if (reaction.partical) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "773967117384024154") {
        if (reaction.emoji.name === '✅'){
            await reaction.message.guild.members.cache.get(user.id).roles.add("775024285572005907")
        }
    }
    }
  
  module.exports.help = {
      name: "reactions"
  }
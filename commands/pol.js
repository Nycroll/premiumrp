const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(message.author.bot || message.channel.type === "dm") return;

    const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

    if (cmd === '?poll'){
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 Nieuwe Poll! 😲')
        .setDescription(pollDescription)
        .setColor('#ffc843')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    }
}
  
module.exports.help = {
    name: "pol"
}
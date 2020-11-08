const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!bUser) return message.channel.send("Kan de gebruiker niet vinden!");
  let bReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("MANAGE_MEMBERS"))
    return message.channel.send("In het blik van de vriend!");
  if (bUser.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("Die persoon kan niet geschopt worden!");

  let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Banned Gebruiker", `${bUser} with ID ${bUser.id}`)
    .addField(
      "Gebanned door",
      `<@${message.author.id}> with ID ${message.author.id}`
    )
    .addField("Gebanned In", message.channel)
    .addField("Tijd", message.createdAt)
    .addField("Reden", bReason);

  let incidentchannel = message.guild.channels.find(`name`, "tlog");
  if (!incidentchannel)
    return message.channel.send("Kan geen incidenten kanaal vinden.");

  message.guild.member(bUser).ban(bReason);
  incidentchannel.send(banEmbed);
};

module.exports.help = {
  name: "ban",
};

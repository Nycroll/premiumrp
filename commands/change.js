const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !change title | bericht | kleur | kanaal

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Je hebt hier geen permissie's voor!");

    var seperator = "|";

    if (args[0] == null) {

        var embed = new discord.MessageEmbed()
            .setTitle("Gebruik")
            .setColor("#ffc843")
            .setDescription(`Maak een announcement door gebruik te maken van: \n !change titel ${seperator} bericht ${seperator} kleur ${seperator} kanaal`);

        return message.reply(embed);

    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[2] === undefined) argsList[2] = "#eeeeee";
    if (argsList[3] === undefined) argsList[3] = "general";

    var options = {

        titel: argsList[0].trim(),
        bericht: argsList[1].trim(),
        kleur: argsList[2].trim(),
        kanaal: argsList[3].trim()

    }

    var announceEmbed = new discord.MessageEmbed()
        .setTitle(options.titel)
        .setDescription(options.bericht)
        .setColor(options.kleur)
        .setTimestamp();

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.kanaal);
    if (!channel) return message.reply("Dit kanaal bestaat niet");

    channel.send(announceEmbed);

}

module.exports.help = {
    name: "change",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}
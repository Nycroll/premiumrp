const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    // !clear aantal

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Je hebt hier geen permissie's voor!");

    if (!args[0]) return message.reply("Geef een aantal op.");
    

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if (args[0] <= 0) {
                message.reply("Je kunt niet 0 berichten verwijderen.").then(msg => msg.delete({ timeout: 3000 }));
            } else if (args[0] == 1) {
                message.reply("Ik heb 1 bericht verwijderd").then(msg => msg.delete({ timeout: 3000 }));
            } else {
                message.reply(`Ik heb ${args[0]} berichten verwijderd`).then(msg => msg.delete({ timeout: 3000 }));
            }

        })

    } else {
        return message.reply("Geef een getal op.");
    }
    return message.delete()

}

module.exports.help = {
    name: "clear",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}
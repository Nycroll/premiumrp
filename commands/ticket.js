const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    const categoryID = "774293356275564585";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketBestaat = true;

            message.reply("Je hebt al een ticket aangemaakt");

            return;
        }

    });

    if (ticketBestaat) return;

    var embed = new discord.MessageEmbed()
        .setTitle("Hallo, " + message.author.username)
        .setColor("#ffc843")
        .setFooter("Support kanaal wordt aangemaakt");

    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                        .setTitle(`Wij helpen jou z.s.m ${message.author.username} !`)
                        .setDescription("Even geduld er wordt om hulp gevraagd.")
                        .setColor("#ffc843");       

                    settedParent.send(embedParent);

                }
            ).catch(err => {
                message.channel.send("Er is iets misgelopen");
            });
        }
    ).catch(err => {
        message.channel.send("Er is iets misgelopen");
    });
    return message.delete()

}


module.exports.help = {
    name: "ticket"
}
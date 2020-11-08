const botConfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
var prefix = botConfig.prefix;


fs.readdir("./commands", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Cannot find any files in the map commands!");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`The file ${f} is loaded`)

        bot.commands.set(fileGet.help.name, fileGet);

    });

});

fs.readdir("./premium", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <=0) {
        console.log("Cannot find any files in the map commands!");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./premium/${f}`);
        console.log(`The file ${f} is loaded`)

        bot.commands.set(fileGet.help.name, fileGet);

    });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);

  bot.user.setActivity("game.premiumrp.nl", {type: "PLAYING"});

  //bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botConfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(process.env.token);
const botConfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client

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

bot.login(process.env.token);
const { channelLink } = require('discord.js');
const Discord = require('discord.js');
const e = require('express');
const config = require('./config.json');

const client = new Discord.Client({intents: ["Guilds", "GuildMessages"]});

const prefix = ">"

client.on("messageCreate", function(message) { 
    //console.log(message)
    console.log(message.content)
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) {
      message.reply("ummm maybe try '>'")
    };

    if(message.content.startsWith(prefix)) {
      var content = message.content.slice(0);
      var args = content.split(' ')
      var command = args.shift().toLowerCase();



      if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
      }
    }
    
  /*const commandBody = message.content.slice(prefix.length);
  message.channel.send(commandBody).catch(e)
  const args = commandBody.split('');
  message.channel.send("you have an arguement length of " + args.length)
  console.log(args)
  const command = args.shift().toLowerCase();
*/

});                                



client.login(config.Token);
const express = require('express');
const app = express();
const port = 8080;

//express hosting
console.log('starting...');
app.get('/', (req, res) => res.send(':sip:'))

app.listen(port, () => console.log(`Bot started at port ${port} [https://localhost:${port}]`));



//main bot code
const Discord = require('discord.js');
const config = require('./config.json');
const package = require('nhentai-api');
const { embedLength } = require('discord.js');
const h = new package.API();
const client = new Discord.Client({intents: ["Guilds", "GuildMessages"]});

//see line 72
let h_face = []


//bot logs some info onstart in the terminal
client.on('ready', () => {
    console.log("Servers:")
    client.guilds.cache.forEach(guild => {
        console.log(`${guild.name} | id: ${guild.id}`)
    })

    console.log("------------------------------")
    console.log(`connected as ${client.user.username}`)
})

//command prefix
const prefix = ">";

//channelet
 var albumChannel = client.channels.cache.get('968036328593825862');


 //change channel (will work on it later) [see line 51 for details]
 var channelset = false;

 //on client message....
 client.on("messageCreate", function(message) {
    if(message.author.bot) return; //so that it wont reply to itself
    //main function of the bot
    if(message.attachments.size >= 0) {
        message.attachments.forEach(attachment => {
            const uwuchannel = client.channels.cache.find(channel => channel.name === 'album-2')
            embedLength.setImage(attachment.proxyURL)
            embedLength.setFooter({iconURL: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`, text: message.author.tag})
            const ImageLink = attachment.proxyURL;
            uwuchannel.send({embeds: [embed]}) 
        });
    }
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' '); //split args
    const command = args.shift().toString().toLowerCase(); //convert command to lowercase     
    


  if(command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);

  } else if(command === "fuck" || command === "rail" || command === "seggs") {
    if(message.mentions.users.first()) {
        const sussyface = new Discord.EmbedBuilder()
        sussyface.setColor('#2ab8ao')
        sussyface.setImage(h_face[Math.floor(Math.random() * 9)])
        sussyface.setTitle(`${message.author.username} X ${message.mentions.users.first().username}`)
        sussyface.setDescription(`W-whats this feeling!? Ah~ ♥️ ${message.author.username} what are you doing!??`)
        try {
            message.channel.send({embeds: [sussyface]}).catch(e)
        } catch (e) {
            message.channel.send('sowwy~ an error occured:' + e)
        }
 
    }
  }

 });

const embed = new Discord.EmbedBuilder()
embed.setColor('#2ab8a0')
embed.setDescription('nyaa~')


//login as bot
client.login(config.Token1 + config.Token2 + config.Token3);
//console.log(config.Token1 + config.Token2 + config.Token3)



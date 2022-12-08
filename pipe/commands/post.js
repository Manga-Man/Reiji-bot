module.exports = {
    config: {
        name: 'post',
        description: 'post images to album channel',
        usage: `>post`,
    },
    async run (bot,message,args,newEmbed) {
        if(message.attachments.size > -1) {
            message.reply('sent ' + message.attachments.size + ' images to album channel.')
            message.attachments.forEach(a => {
                const channel = bot.channels.cache.find(channel => channel.name === 'album-2')
                newEmbed.setFooter({iconURL:`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`, text: message.author.tag})
                newEmbed.setImage(attachemtn.proxyURL)
                channel.send({embeds: [newEmbed]})
            });
        }
    }
}

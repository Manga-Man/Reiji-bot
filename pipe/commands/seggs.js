module.exports = {
    config: {
        name: 'seggs',
        description: 'seggs someone [NSFW]',
        usage: `>seggs`,
    },
    async run (bot,message,args) {
        message.channel.send(`${message.men} w-what are you doing??`);
    }
}

// Require the necessary discord.js classes
const { REST, SlashCommandBuilder, Routes, Client, GatewayIntentBits } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const prefix = '>'
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
  client.guilds.cache.forEach(g => {
    console.log(g.memberCount)
  })
});


const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
  new SlashCommandBuilder().setName('clear').setDescription('Clears chat history')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);



client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply(`Pong! This message had a latency of ${Date.now() - interaction.createdTimestamp}ms.`)
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if(commandName === 'clear') {
    await interaction.channel.messages.forEach(m => {
      
    })
  }

  
});


// Login to Discord with your client's token
client.login(token);
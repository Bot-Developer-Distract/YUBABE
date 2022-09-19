const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const clientId = process.env.clientId
const token = process.env.token
const slashcommands = [
  new SlashCommandBuilder().setName('ping').setDescription('Check Ping và MS bot!'),
  new SlashCommandBuilder().setName('inventory').setDescription('Xem Inventory')
]

const rest = new REST({ version: '9' }).setToken(token);
rest.put(
	Routes.applicationCommands(clientId),
	{ body: slashcommands },
)
	.then(() => console.log('Đăng ký thành công Lệnh Slash.'))
	.catch(console.error);

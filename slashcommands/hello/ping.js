const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction, client) {
    const dt = new Date(interaction.createdTimestamp);
		await interaction.reply(`🏓 Pong \`${new Date() - dt}ms\``);
	},
};
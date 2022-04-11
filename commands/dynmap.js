const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dynmap')
		.setDescription('Send the dynmap link'),
	async execute(interaction) {
		await interaction.reply('http://survivalvoxel.tesseracthosting.com:8125');
	},
};
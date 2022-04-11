const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('Sends the IP'),
	async execute(interaction) {
		await interaction.reply('survivalvoxel.com(We are still working on getting ready so please wait)');
	},
};
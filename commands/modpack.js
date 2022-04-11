const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('modpack')
		.setDescription('Send the modpack link'),
	async execute(interaction) {
		await interaction.reply('https://www.curseforge.com/minecraft/modpacks/survival-voxel');
	},
};
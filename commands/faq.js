const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('The faq of survival voxel')
        .addStringOption(option =>
            option.setName('question')
                .setDescription('The question you want answered')
                .setRequired(true)
                .addChoice('one','test')
                .addChoice('two','test2')
                .addChoice('three','test3')
        ),
    execute: async function(interaction) {
      console.log('FAQ Execute Function, began');
    }
};
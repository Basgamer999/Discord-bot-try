const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.on('interactionCreate', async interaction => {
    console.log(`Interaction for '${interaction.commandName}'`);
    if (!interaction.isCommand()) {
      console.log('Interaction is not a command');
	  return;
	  if (interaction.commandName === 'faq') {
		if (interaction.options.getString() === 'one') {
				await interaction.reply(`Question 1`);
			} 
		else if (interaction.options.getString() === 'two') {
			await interaction.reply(`question 2`);
		}
		else if (interaction.options.getString() === 'three') {
			await interaction.reply(`question 3`);
		}
	}
}

    const command = client.commands.get(interaction.commandName);

    if (!command) {
      console.log('Command is unknown');
      return;
    }

    try {
        console.log('Run execute for command');
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'faq') {
		if (interaction.options.getString() === 'one') {
				await interaction.reply(`Question 1`);
			} 
		else if (interaction.options.getString() === 'two') {
			await interaction.reply(`question 2`);
		}
		else if (interaction.options.getString() === 'three') {
			await interaction.reply(`question 3`);
		}
	}
});

client.login(token);
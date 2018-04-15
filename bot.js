const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDM0OTA3ODI0NjQwNzUzNjc0.DbSMBA.Rlev3eKXsE3eD0-Igaeu1fTINfE);

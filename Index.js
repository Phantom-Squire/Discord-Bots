Discord = require('discord.js');
Client = new Discord.Client();
Prefix = ("Enter Prefix Here");
Token = ("Enter Token Here");
Status = ("Online!")

Client.once('ready', () => {
  console.info(`Bot: ${Client.user.tag}`);
  console.log(`Bot Status: ${Status}`);
});

Client.on('message', msg => {
  if (msg.content == Prefix + 'help') {msg.channel.send('Help Commands')}
  if (msg.content == Prefix + 'prefix') {msg.channel.send('Prefix Commands')}
//  if (msg.content == Prefix + '')
});

Client.login(Token);

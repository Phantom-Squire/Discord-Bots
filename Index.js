Discord = require('discord.js');
Bot = new Discord.Client();
Prefix = ('PREFIX');
Token = ('TOKEN');
Status = ('Online')

Bot.once('ready', () => {
  console.info(`Name: ${Bot.user.username}`);
  console.info(`Status: ${Status}!`);
});

Bot.on('message', async message =>{
    if (message.author.bot) return;
    if (message.content.startsWith(Prefix)) {
        let args = message.content.substring(Prefix.length).split(" ");
        switch (args[0].toLowerCase()){
            case 'say': {
        let sendMessage = message.content.substring(Prefix.length +args[0].length+ args[1].length + 2);
                setTimeout(()=>{message.delete()},500)
                let sendChannel = Bot.channels.cache.get(args[1]); 
                sendChannel.send(sendMessage)
                break;
            }
        }
    }
});

Bot.login(Token);

var Discord = require("discord.js");
var bot = new Discord.Client();
//prefix
var p = '!';


//When ready to work 
bot.on('ready', () => {
    console.log('Ready to work');


});



bot
//on hello
    .on('message', message => {
	switch (message.content){
	case p + "hei":
	    message.channel.send("moi");
	    break;
	case p+"game":
	    if(message.author.presence.game != null){
		message.channel.send(message.author.user + " pelaa " + message.author.presence.game.name);
	    }
	    else
		message.channel.send(message.author.username + " ei pelaa mitään.");
		
	    break;
	case p+"kys":
	    message.channel.send(";__;");
	    bot.setTimeout(bot.destroy(),1000);
	    break;
		
	    }
    
	});
    

bot.login('Mjg3NzAwMDMxOTc1NDU2Nzc4.C5zG-A.h5gcbL3gaJ3Az5zHFvx6ZH1OT3I');

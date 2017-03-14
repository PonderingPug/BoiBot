
//basic example for a discord bot to start building on
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
	case p + "hello":
	    message.channel.send("hi");
	    break;
	case p+"game":
	    if(message.author.presence.game != null){
		message.channel.send(message.author.user + " is playing " + message.author.presence.game.name);
	    }
	    else
		message.channel.send(message.author.username + " is not playing anything.");
		
	    break;
	//Destroying the bot	
	case p+"kys":
	    message.channel.send(";__;");
	    bot.setTimeout(bot.destroy(),1000);
	    break;
		
	    }
    
	});
    

bot.login('ID HERE');

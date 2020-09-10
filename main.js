const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

client.once('ready', () => {
    console.log('jisung is online');
}

);

client.on('message', message => {
    if(message.content.toLowerCase().includes(' han' ) || message.content.toLowerCase() === 'han' || message.content.toLowerCase().includes('jisung'))
    message.react('752655278985707521');
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hey'){
        message.channel.send('hi <:selener:748528684058542213>');
    }else if(command === 'stream'){
        
        const songs = [
            "https://www.youtube.com/watch?v=TQTlCHxyuu8",
            "https://www.youtube.com/watch?v=Fpgd3ac3_nM",
            "https://www.youtube.com/watch?v=5rPluw_-Eb4",
            "https://www.youtube.com/watch?v=Dab4EENTW5I",
            "https://www.youtube.com/watch?v=CNfodZluR-Q",
            "https://www.youtube.com/watch?v=pok5yDw77uM",
            "https://www.youtube.com/watch?v=u6unJQownW4",
            "https://www.youtube.com/watch?v=AdfIfFGCqgo"
        ];
        let randomgetal = Math.floor(Math.random()*songs.length);
        
            message.channel.send(songs[randomgetal]);
            
    } else if(command === 'wave'){
        const gifs = ['https://cdn.discordapp.com/attachments/702535108229333004/752663021276364901/hannie.gif',
            'https://cdn.discordapp.com/attachments/702535108229333004/752663292698427422/hannie2.gif',
            'https://cdn.discordapp.com/attachments/702535108229333004/752663508470071377/hannie3.gif'
    ];
        let randomgetal = Math.floor(Math.random()*gifs.length);
        const gifEmbed = new Discord.MessageEmbed()
        .setColor('#f9c901')
        .setTitle('hi!')
        .setImage(gifs[randomgetal]);
        message.channel.send(gifEmbed);
    } else if (command === 'help'){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#f9c901')
        .setThumbnail('https://cdn.discordapp.com/attachments/702535108229333004/752666587407843418/unknown.png')
        .setTitle('commands this bot can do:')
        .setDescription('&hey - answers you\n&stream - gives you a stray kids title track to stream\n&wave - waves for you\n&kiss - sends kiss\n&minsung - gives you an uwu gif\n&game - play a game!');
        message.channel.send(helpEmbed);
    } else if (command === 'kiss'){
        const gifs = ['https://cdn.discordapp.com/attachments/702535108229333004/752859240619835414/hannie5.gif',
            'https://cdn.discordapp.com/attachments/702535108229333004/752859281849712650/hannie6.gif',
            'https://cdn.discordapp.com/attachments/702535108229333004/752859316414971924/hannie7.gif'
    ];
        let randomgetal = Math.floor(Math.random()*gifs.length);
        const gifEmbed = new Discord.MessageEmbed()
        .setColor('#f9c901')
        .setTitle('chuu <3')
        .setImage(gifs[randomgetal]);
        message.channel.send(gifEmbed);
    } else if (command === 'minsung'){
        const gifs = ['https://cdn.discordapp.com/attachments/702535108229333004/752861899699388507/minsung2.gif',
            'https://cdn.discordapp.com/attachments/702535108229333004/752861899074306138/minsung1.gif',
            'https://cdn.discordapp.com/attachments/702535108229333004/752861968095772782/minsung4.gif',
            'https://cdn.discordapp.com/attachments/702535108229333004/752861969173839903/minsung6.gif',
            'https://cdn.discordapp.com/attachments/702535108229333004/752995613410328601/minsung9.gif',
            'https://cdn.discordapp.com/attachments/702535108229333004/752995617801764895/minsung8.gif'
    ];
        let randomgetal = Math.floor(Math.random()*gifs.length);
        const gifEmbed = new Discord.MessageEmbed()
        .setColor('#f9c901')
        .setTitle('uwu')
        .setImage(gifs[randomgetal]);
        message.channel.send(gifEmbed);
    }else if (command === 'game'){
        
    
    
    let idols = require('./idols.json');
    let randomIdol;
    let randomFoto;
    const filter = response => {
        return idols[randomIdol].name.some(naam => naam.toLowerCase() === response.content.toLowerCase());
        
        
    };
    
    function spel (lives, punten) {
        
        if(lives>0 && idols.length>0){
        randomIdol = Math.floor(Math.random()*idols.length);
     randomFoto = Math.floor(Math.random()*idols[randomIdol].pictures.length);
     
    
    message.channel.send(idols[randomIdol].pictures[randomFoto])
    .then(() => {
        
        message.channel.awaitMessages(filter, {max : 1, time: 15000, errors: ['time']}).then(collected => {
            collected.first().react('✅');
            punten++;
            message.channel.send(`correct! the idol was ${idols[randomIdol].group} ${idols[randomIdol].name[0]} \nlives : ${lives}, points : ${punten}`);
            for(let i = 0 ; i < idols.length ; i++){
                if(idols[i] === idols[randomIdol]){
                    idols.splice(i,1);
                }
            }
            spel(lives,punten);
            
        }).catch(() => {
            lives--;
            message.channel.send(`time's up!\nthe idol was ${idols[randomIdol].group} ${idols[randomIdol].name[0]} \nlives : ${lives}, points : ${punten}`);
            for(let i = 0 ; i < idols.length ; i++){
                if(idols[i] === idols[randomIdol]){
                    idols.splice(i,1);
                }
            }
            spel(lives,punten);
            
        })
        ;
    });  
}else if(idols.length == 0){
message.channel.send(`you won! congratulations <:selener:748528684058542213>`);
return;}
else{
message.channel.send(`game over!`);
return;}

};

spel(3,0);
    
/*message.channel.send(`levens zijn op, bedankt voor het spelen! punten: ${punten}`);*/
};

    
});


client.login(process.env.token);


const Discord = require("discord.js");
const PicAssO = new Discord.Client();

//© 2018 PicAssO#2030 <@300306052610523136>
PicAssO.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id !== "YOUR ID -") return;


    if (message.content.startsWith(prefix + 'setwat')) {
        PicAssO.user.setActivity(argresult, { type: 'WATCHING' })
        console.log('watching be' + argresult);
        message.channel.sendMessage(`Watch Now: **${argresult}**`)
    }


    if (message.content.startsWith(prefix + 'setlis')) {
        PicAssO.user.setActivity(argresult, { type: 'LISTENING' })
        console.log('LISTENING be' + argresult);
        message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
    }


    if (message.content.startsWith(prefix + 'setname')) {
        PicAssO.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
        return message.reply("You Can change the username 2 times per hour");
    }

    if (message.content.startsWith(prefix + 'setavatar')) {
        PicAssO.user.setAvatar(argresult);
        message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
    }

    if (message.content.startsWith(prefix + 'setstream')) {
        PicAssO.user.setGame(argresult, "https://www.twitch.tv/PicAssO");
        console.log('Streaming be' + argresult);
        message.channel.sendMessage(`Streaming: **${argresult}**`)
    }
    if (message.content.startsWith(prefix + 'setplay')) {
        PicAssO.user.setGame(argresult);
        console.log('Playing be' + argresult);
        message.channel.sendMessage(`Playing: **${argresult}**`)
    }



});
PicAssO.login("TOKEN")
const Discord=require('discord.js');
const robot = new Discord.Client();
const TOKEN = "";
const profanities =require('profanities');
sintaxis = 'urf-8';

robot.on('warn', console.warn);

robot.on('error', console.error);

robot.on('ready', () => { 
    console.log('Бот Готов')
});

robot.on('disconnect',() => console.log('бот отключается, непонятно почему, пробует переподключится'));

robot.on('reconnecting', () => console.log('бот Перезагружается'));


robot.on("gulidMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + "Вы попали на Сервер с Мат Фильтвом будте внимательны любой мат приведёт к Бану");

    member.addRole(Проверка);

    member.guild.createRole({
        name: member.user.username,
        colore: generateHex(),
        permissions: []
    }).then(function(role) {
        member.addRole(role);
    });
});


robot.on('guildMemberAdd', (guild, member) => {
    console.log(member.id);
    if (banList.banned.includes(member.id)) {
      guild.channels.get(config.channel).overwritePermissions(member, {
        SEND_MESSAGES: false,
      }).catch(console.log);
    }
  });


robot.on('message', async msg => {
    if (msg.author.bot) return undefined;

    for (x = 0; x < profanities.length; x++) {
        if(msg.content.toUpperCase() == profanities[x].toUpperCase()) {
            msg.delete();
            msg.channel.send('**' + msg.author.username + '** - Ай яй яй Нельзя Говорить Такие Слова')
            console.log(msg.author.username + ' '+ msg + ' ' + 'Удалено');
            return;
        }
    }
});

robot.login(process.env.TOKEN);

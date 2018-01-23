const Discord=require('discord.js');
const robot = new Discord.Client();
const profanities =require('./profanities');
sintaxis = 'urf-8';

robot.on('warn', console.warn);

robot.on('error', console.error);

robot.on('ready', () => { 
    console.log('Бот Готов')
    robot.user.setGame("Анти Мат Фильтр")
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
     if (msg.content.startsWith('гей')) {
        msg.channel.send('Сама Такая')
    }else if (msg.content.startsWith('пидор')) {
        msg.channel.send('Сама Такая')
    }
});
robot.login(process.env.TOKEN);

// Web app (Express + EJS)
const http = require('http');
const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('matbot');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

// pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
 http.get('https://antimatbot.herokuapp.com/');
}, 900000);

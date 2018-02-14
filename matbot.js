const Discord=require('discord.js');
const robot = new Discord.Client();
const profanities =require('./profanities');
var RrRu = require('./profanities-ru.json');
sintaxis = 'urf-8';

const BotVersion = "0.0.9";

const swearWords = ["гей", "пидор", "Пидор", "Гея", "гея", "Пидоры", "пидоры", "Пидора", "пидора", "Гей"];

robot.on('warn', () => { 
console.warn
robot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **warn** - ${warn}
-------------------------------------------------------------------`);
});

robot.on('error', () => { 
console.error
robot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **error** - ${error}
-------------------------------------------------------------------`); 
});

robot.on('ready', () => { 
    robot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **ready** - Бот заходит на **${robot.user.username}**!
**Лог**: Функция **set game** - присвоина игра **Анти Мат Фильтр**
**Лог**: Функция **Version** - Автор бота = **Neko**
Версия Бота = **${BotVersion}**
-------------------------------------------------------------------`)
robot.user.setGame("Анти Мат Фильтр")
console.log(`Бот Готов
присвоина игра Анти Мат Фильтр
Автор бота = Neko
Версия Бота = ${BotVersion}`)
});

robot.on('disconnect',() => {
console.log('бот отключается, непонятно почему, пробует переподключится')
robot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **disconnect** - бот отключается, непонятно почему, пробует переподключится
-------------------------------------------------------------------`);
});

robot.on('reconnecting', () => {
console.log('бот Перезагружается')
robot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **reconnecting** - бот Перезагружается
-------------------------------------------------------------------`);
});

// Create an event listener for new guild members
robot.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'chat');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`${member} Привет, Добро пожаловать на сервер, сервер находится под защитой Анти Мат Бота Любой мат Удаляется! Приятного Время провождения`);
  });

  
  
robot.on('message', async msg => {
    if (msg.author.bot) return undefined;

    for (x = 0; x < profanities.length; x++) {
        if(msg.content.toUpperCase() == profanities[x].toUpperCase()) {
            msg.delete();
            msg.channel.send('**' + msg.author.username + '** - Ай яй яй Нельзя Говорить Такие Слова')
            console.log(msg.author.username + ' '+ msg + ' ' + 'Удалено');
             robot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **delete Mat** - **${msg.author.username}** - **${msg}** Удалено`);
            return;
        }
    } 
     if( swearWords.some(word => msg.content.includes(word)) ) {
        msg.channel.send('Сама Такая')
    } else if( RrRu.some(word => msg.content.includes(word)) ) {
		            msg.delete();
            msg.channel.send('**' + msg.author.username + '** - Ай яй яй Нельзя Говорить Такие Слова')
            console.log(msg.author.username + ' '+ msg + ' ' + 'Удалено');
             robot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **delete Mat** - **${msg.author.username}** - **${msg}** Удалено`);
	}
});
robot.login(process.env.TOKEN);

// Web app (Express + EJS)
const http = require('http');
const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 46811;

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

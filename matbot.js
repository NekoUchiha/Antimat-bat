const Discord=require('discord.js');
const robot = new Discord.Client();
const profanities =require('./profanities');
var RrRu = require('./profanities-ru.json');
const NoBadWords = require('./disabilet.json');
sintaxis = 'urf-8';
const fs = require("fs");

const comBD = require('./data/comBD.json', 'utf8');

const BotVersion = "0.0.16";

const swearWords = ["гей", "пидор", "Пидор", "Гея", "гея", "Пидоры", "пидоры", "педик", "Педик", "Пидора", "проститука", "проституточка", "Проституточка", "проституток", "Проституток", "Проститука", "проституки", "Проституки", "задрот", "Задрот", "пидора", "пидарок", "Пидарок", "пидop", "Пидop", "Гей"];

 .then(res => {
        RrRu.size = Number(res.headers['content-length'])
        NRrRu.data = res.body
resolve(RrRu)
 })
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
RrRu = **${RrRu.size}**
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
    var textWelcome = [
        `${member.user} Привет, Добро пожаловать на сервер, сервер находится под защитой Анти Мат Бота Любой мат Удаляется! Приятного Время провождения`,
        `Ух ты Да кто Это у нас тут ? ааааа да это же : ${member.user},ну Привет ня!, я Защищаю этот Сервер, любой Мат будет удалятся :3 Мяф`,
        `${member.user} спасибо что зашёл, учити я тут охраю всех от Мата так что. Будешь ругать, будешь переписывать Сообщения Мурк:3`,
        `${member.user} Здрастуй, я Неко, я Очень тебе Рада, думаю мы подружимя, если ты не будешь ругаться:3, просто я удаляю Любой Мат на этом сервере НЯ!.`,
        `${member.user} Добро пожаловать, ты новенький ? , ой даже не отвечай Вижу что да хе хе хе, учити я удалю любой Мат - написаный на этом сервере Мурк`,
        `ЭЙ ${member.user} !!, я Давно Ждала тебя, скажу по сикрету, (Мат Удалятся:3), было приятно увидется`,
        `${member.user} ты попал куда надо!!, Меня Завут Неко, я Милая и Пушистая Кися, но это тебе не поможет твой Мат я Всё ровно Удалю, УЧИТИ!!!`,
        `${member.user} Мяф тебе, ты когда нибуть был на сервере Дискорда с Анти Мат Ботом ? , если нет то Милости прошу, Главное правело не пиши мат, я его всё ровно Удалю :D`,
        `Привет ${member.user}, ты кажется Заблудился ?, давай помогу ) болтаем тут #chat пишим команды для бота суда #komandi  видишь Всё просто но Мат не пишем не куда :3`,
        `${member.user} Кусь , тут я Матики удаляю Сина Сина, Будесь РУГАСЯ и ТВОИ УДАЮ! мурк:3`,
        `${member.user} а ты знаешь кто я ? нет , да нууууууууууууууу. Всё я Обиделась, не Знать Неко фу фу фу, -_- не чего тебе больше не скажу, а да кстати, будешь Ругаться, БУДУ УДАЛЯТЬ ТВОИ СООБЩЕНИЯ!!!!!!!!!!!!`,
        `${member.user} Присоеденился К нам, я Рада приветсвовать тебя ) У Себя в Гостях, Меня Завут Неко, Учити Матики я не Лафки, Сразу Удаляю :3`,
        `${member.user} Полько что Забрёл на Палянку ко Мне, а будет ругатся, в общем удалю всё что написал хе хе хе `,
        `Добро Пожаловать ${member.user} Этот Дискорд Сервер, Оснащён Мощной Анти Мат Защитой, Меня Завут Неко, я Тут Всем заправляю :3, Любой Мат Удаляется НЕСЧАДНО!!!!!!!!!!.`
      ];
      var RdMW = Math.floor(Math.random()*textWelcome.length);
      channel.send(`${textWelcome[RdMW]}`)
  });


  
  
robot.on('message', async msg => {
    if (msg.author.bot) return undefined;

	const args = msg.content.split(' ');
	
    for (x = 0; x < profanities.length; x++) {
        if(msg.content.toUpperCase() == profanities[x].toUpperCase()) {
            msg.delete();
            msg.channel.send('**' + msg.author.username + '** - Ай яй яй Нельзя Говорить Такие Слова')
            console.log(msg.author.username + ' '+ msg + ' ' + 'Удалено');
             robot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **delete Mat** - **${msg.author.username}** - **${msg}** Удалено`);
			 robot.channels.find("id", process.env.DEL_MAT_CHANNALE).send(`**Удалён Мат** - **${msg.author.username}** - **${msg}**`);
            return;
        }
    } 
     if( swearWords.some(word => msg.content.includes(word)) ) {
        msg.channel.send('Сама Такая')
    } else if( RrRu.some(word => msg.content.includes(word)) ) {
		if(NoBadWords.some(word => msg.content.includes(word)) ) return;
		            msg.delete();
            msg.channel.send('**' + msg.author.username + '** - Ай яй яй Нельзя Говорить Такие Слова')
            console.log(msg.author.username + ' '+ msg + ' ' + 'Удалено');
             robot.channels.find("id", process.env.LOG_CHANNALE).send(`**Лог**: Функция **delete Mat** - **${msg.author.username}** - **${msg}** Удалено`);
			 robot.channels.find("id", process.env.DEL_MAT_CHANNALE).send(`**Удалён Мат** - **${msg.author.username}** - **${msg}**`);
	} else if(msg.content.startsWith("neko say")) {
	msg.delete();
	if (comBD.COMMAND_ACCES === "no") return robot.channels.find("id", process.env.LOG_CHANNALE).send({embed: {
				"description": "Команда Say выключена",
				"color": 15337994,
		}
		});
		if (msg.author.id == process.env.owner_id){
			if (args[2] === undefined) return robot.channels.find("id", process.env.LOG_CHANNALE).send({embed: {
				"description": "Ошибка синтаксита",
				"color": 15337994,
		}
		});
		if (args[3] === undefined) return robot.channels.find("id", process.env.LOG_CHANNALE).send({embed: {
			"description": "Ошибка синтаксита",
			"color": 15337994,
	}
	});
	var msgSay = msg.cleanContent.replace(`neko say ${args[2]} ${args[3]}`, "");
	let ForsceSay = args[3];
	if (ForsceSay === "ev") return msg.guild.channels.find("name", args[2]).send("@everyone" + msgSay);
	if (ForsceSay === "one") return msg.guild.channels.find("name", args[2]).send(msgSay);
	if ( ForsceSay === "ev" || ForsceSay === "one") {

	}
	else {
		robot.channels.find("id", process.env.LOG_CHANNALE).send({embed: {
			"description": "Ошибка синтаксита",
			"color": 15337994,
	}
	});
	}
} else {robot.channels.find("id", process.env.LOG_CHANNALE).send({embed: {
	"description": "------------------------------------------------",
	"color": 15337994,
	"timestamp": new Date(),
	"footer": {
		"icon_url": robot.user.avatarURL,
		"text": "© neko"
	},
	"thumbnail": {
		"url": "https://raw.githubusercontent.com/NekoUchiha/neko-bot/master/img/dont.png"
	},
	"fields": [
		{
			"name": "У вас нет Доступа до этой Команды.",
			"value": "------------------------------------------------"
		},
	],
}
}); return;}
} else if (msg.content.startsWith("neko aces")) {
	if  (msg.author.id == process.env.owner_id) {
		let newAces = args[2];
		comBD.COMMAND_ACCES = newAces;
		fs.writeFile("./data/comBD.json", JSON.stringify(comBD), (error) => console.error);
		if (comBD.COMMAND_ACCES === "no") return robot.channels.find("id", process.env.LOG_CHANNALE).send({embed: {
				"description": "Изменение команды не произошло",
				"color": 15337994,
		}
		});
		robot.channels.find("id", process.env.LOG_CHANNALE).send({embed: {
			"description": `Изменение Акеса команды на ${args[2]}`,
			"color": 15337994,
	}
	});
	} else {
	msg.channel.send({embed: {
		"description": "------------------------------------------------",
		"color": 15337994,
		"timestamp": new Date(),
		"footer": {
			"icon_url": robot.user.avatarURL,
			"text": "© neko"
		},
		"thumbnail": {
			"url": "https://raw.githubusercontent.com/NekoUchiha/neko-bot/master/img/dont.png"
		},
		"fields": [
			{
				"name": "У вас нет Доступа до этой Команды.",
				"value": "------------------------------------------------"
			},
		],
}
})}	
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

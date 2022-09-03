const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	telegramBotToken : process.env.TELEGRAM_BOT_TOKEN,
        channelUsername : process.env.CHANNEL_USER,
	replies: {
		"help": "Hola soy ryuhikari834 este es sistema de ayuda",
		"welcome": "Hey! Welcome to the @ bot"
	},
	twitter: { 
		username: process.env.TWITTER_USERNAME,
		consumerKey: process.env.CONSUMER_KEY,
		consumerSecret: process.env.CONSUMER_SECRET,
		accessToken: process.env.ACCESS_TOKEN,
		accessSecret: process.env.ACCESS_SECRET
	}
};

const config = require("./config");
const Telegram = require("telegraf/telegram");
const telegram = new Telegram(config.telegramBotToken);
const funcionesTweets = require("./tweets");

const scrape = () => {
	console.log("scrape")
	funcionesTweets.getLastTweetId(function (err, LastTweetId) {
		funcionesTweets.getRecentTweets(LastTweetId, function (err, tweets) {
			if (!tweets || err) { return }
			const newLastTweetId = Object.keys(tweets).length > 0 ? tweets[0].id : null;
			funcionesTweets.saveLastTweetId(newLastTweetId);
			tweets.forEach(function (tweet) {
				// const cleaner = limp.substring(0, 300);

				const regex = /(Follow on Instagram:)?( )+(https?:\/\/)?(instagram.com|t.co)\/[A-Za-z0-9\/]+/gm;
				const str = tweet.texto
				const result = str.replace(regex, '');

				// const message = limp.replace("Follow on Instagram: https://instagram.com/kinlwu/", "");
				console.log(result);
				const mensaje =
					`
─────⊱◈『❄️』◈⊰─────
${result}
By: Hola mundo
─────⊱◈『❄️』◈⊰─────
				`
				const botonera = [
					[
						{
							"text": "🌟Contratar bot🌟",
							"url": `https://www.paypal.me/witheblack834`
						}
					],
					[
						{
							"text": `Namso-Gen`,
							"url": `https://namso-gen.com/`
						}
					]
				]

				telegram.sendMessage(
					config.channelUsername,
					mensaje,
					{
						reply_markup: { "inline_keyboard": botonera },
					}
				);
			});
		});
	});
}

module.exports = { scrape }
const Telegraf = require("telegraf");
const config = require("./config");
const { scrape } = require("./cron.js")
const cron = require('node-cron');
const { photo } = require("telegraf/core/replicators");
const commands = require("./commands");

cron.schedule('*/1 * * * *', scrape);

console.log("Inicando Bot");

const bot = new Telegraf(config.telegramBotToken);

console.log("bot en linea");

bot.launch();
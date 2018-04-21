const Telegraf = require('telegraf')
const express = require('express');
const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

bot.start((ctx) => ctx.reply('Welcome to the Neel Bot'));

bot.command('about', ctx => {
    ctx.reply("Hello I am Neel, I am an Enginnering Student. I love to code.");
    LogCtx(ctx);
});

bot.command('github', ctx => {
    ctx.reply('Hey check this project on my github - github.com/neelgeek/NeelBot');
    LogCtx(ctx);
})

bot.on("text", ctx => {
    ctx.reply('Hey,I dont support this feature still,but I am working on it !😎');
    LogCtx(ctx);
})

bot.on("sticker", ctx => {
    ctx.reply('Hey,I dont support this feature still,but I am working on it !😎');
    LogCtx(ctx);
})

bot.catch((err) => {
    console.log('Ooops', err)
})


function LogCtx(ctx) {
    console.log(ctx.message.text + " Sent by " + ctx.message.from.username);
}


var port = process.env.PORT | 8000;
app.listen(port, function() {
    console.log("Running on Port " + port);
});

bot.startPolling();
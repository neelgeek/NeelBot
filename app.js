const Telegraf = require('telegraf')
const http = require('http');
const bot = new Telegraf(process.env.BOT_TOKEN);
//const bot = new Telegraf(process.env.BOT_TOKEN);
var port = process.env.PORT || 8000;
http.createServer(HTTPHandler).listen(port);
console.log("Running on port " + port);

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


function HTTPHandler(req, res) {
    console.log(req);
}


bot.startPolling();
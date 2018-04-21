const Telegraf = require('telegraf')

const bot = new Telegraf('407966345:AAE8xrjYPYCiauSFflbjr9h1LTYk8iqvWHU');

bot.start((ctx) => ctx.reply('Welcome to the Neel Bot'));

bot.command('about', ctx => {
    ctx.reply("Hello I am Neel, I am an Enginnering Student. I love to code.");
    console.log(ctx);
});

bot.command('github', ctx => {
    ctx.reply('Hey check out my github - github.com/neelgeek');
    console.log(ctx);
})

bot.on("text", ctx => {
    ctx.reply('Hey,I dont support this feature still,but I am working on it !😎');
    console.log(ctx);
})

bot.on("sticker", ctx => {
    ctx.reply('Hey,I dont support this feature still,but I am working on it !😎');
})


bot.startPolling();
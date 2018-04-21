const Telegraf = require('telegraf')

const bot = new Telegraf('407966345:AAE8xrjYPYCiauSFflbjr9h1LTYk8iqvWHU');

bot.start((ctx) => ctx.reply('Welcome to the Neel Bot'));

bot.command('about', ctx => {
    ctx.reply("Hello I am Neel, I am an Enginnering Student. I love to code.");
    console.log(ctx.update);
});

bot.command('github', ctx => {
    ctx.reply('Hey check this project on my github - github.com/neelgeek/NeelBot');
    console.log(ctx.update);
})

bot.on("text", ctx => {
    ctx.reply('Hey,I dont support this feature still,but I am working on it !😎');
    console.log(ctx.update);
})

bot.on("sticker", ctx => {
    ctx.reply('Hey,I dont support this feature still,but I am working on it !😎');
})

bot.catch((err) => {
    console.log('Ooops', err)
})


bot.startPolling();
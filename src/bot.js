const env = require('./.env')
const Telegram = require('telegraf')
const bot = new Telegraf(env.token)

bot.use(async(ctx, next)=>{
    const start = new Date()
    await next()
    const ms = new Date - start
    const dataEHora = new Date.tolocaleString();
    console.log(`${dateEHora} \n Tempo de resposta: ${ms}ms`)
})

//Escuta do comando /start
bot.start(async ctx =>{
    const from = ctx.message.from
    from.id = undefined
    console.log(from)
    if(from.username === r_denck){
    await ctx.reply(`Olá${from.username}, o seu nome é: ${from.first_name} ${from.last_name}!`)
    }else{
        await ctx.reply('Olá, no que posso ajudar?')
    }
})



//evento de texto
bot.on(`text`, ctx => ctx.reply('Olá como vai?'))
bot.launch()
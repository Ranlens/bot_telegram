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



//evento de localização
bot.on('location', async ctx =>{
    const location = ctx.message.location
    console,log(location)
    const lat = location.latitude
    const lon = location.longitude
    ctx.replyWithLocation(lat, lon)
    ctx.reply(`https://www.google.com/maps/@${lat}, ${lon}, 17z`)
    ctx.reply(`legal meu caro, você está em Lat: ${lat} -lon: 4{lon}!`)
    

})

bot.launch()
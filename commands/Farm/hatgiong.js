const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'crop',
  cooldown : 0,
  description: "Check kho hạt giống của bạn!",
  usage: "Yhg",
  aliases: ['hatgiong', 'hg', 'nongsan', 'ns', 'f'],
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    let hg1 = `<:Yu_ot:953103262318477342>`
    let hg2 = `<:Yu_lua:953059348777672705>`
    let hg3 = `<:Yu_DauTay:953375220935295047>`
    let hg4 = `<:Yu_ngo:953971194565124186>`
    let hg5 = `<:Yu_cachua:953059348794470420>`
    let hg6 = `<:Yu_Dao:953375136134877294>`
    let hg7 = `<:Yu_khoaimi:953059349637500968>`
    let hg8 = `<:Yu_mia:953103263476117584>`
    let hg9 = `<:Yu_khoaitay:953103263178305566>`
    let hg10 = `<:Yu_DuaGang:953375173225091133>`
    let hg11 = `<:Yu_carot:953103263895535626>`
    let hg12 = `<:Yu_caingot:953059348731543592>`
    let hg13 = `<:Yu_Mit:953237141440327700>`
    let hatgiong1 = await client.grow(message.author.id, `${hg1}`)
    let hatgiong2 = await client.grow(message.author.id, `${hg2}`)
    let hatgiong3 = await client.grow(message.author.id, `${hg3}`)
    let hatgiong4 = await client.grow(message.author.id, `${hg4}`)
    let hatgiong5 = await client.grow(message.author.id, `${hg5}`)
    let hatgiong6 = await client.grow(message.author.id, `${hg6}`)
    let hatgiong7 = await client.grow(message.author.id, `${hg7}`)
    let hatgiong8 = await client.grow(message.author.id, `${hg8}`)
    let hatgiong9 = await client.grow(message.author.id, `${hg9}`)
    let hatgiong10 = await client.grow(message.author.id, `${hg10}`)
    let hatgiong11 = await client.grow(message.author.id, `${hg11}`)
    let hatgiong12 = await client.grow(message.author.id, `${hg12}`)
    let hatgiong13 = await client.grow(message.author.id, `${hg13}`)


    let trung = await client.grow(message.author.id, `🥚`)
    let sua = await client.grow(message.author.id, `<a:Ybluemilk:918844687425609739>`)
    let thit = await client.grow(message.author.id, `🥩`)
    let thoc = await client.grow(message.author.id, `thoc`)
    let co = await client.grow(message.author.id, `co`)
    let camheo = await client.grow(message.author.id, `camheo`)
    const cropembed = new MessageEmbed()
      .setTitle(`🌾 Kho Nông Sản Của ${message.author.username} 🌾`)
      .setThumbnail(message.member.user.displayAvatarURL({ dynamic: true, size: 512 }))
      .setDescription(`<a:Yngoisaohivong:919968345418268714> **Rau Củ** :

${hg1} : \`${hatgiong1}\` ${hg2} : \`${hatgiong2}\` ${hg3} : \`${hatgiong3}\` ${hg4} : \`${hatgiong4}\` ${hg5} : \`${hatgiong5}\` 
${hg6} : \`${hatgiong6}\` ${hg7} : \`${hatgiong7}\` ${hg8} : \`${hatgiong8}\` ${hg9} : \`${hatgiong9}\` ${hg10} : \`${hatgiong10}\` 
${hg11} : \`${hatgiong11}\` ${hg12} : \`${hatgiong12}\` ${hg13} : \`${hatgiong13}\`

<a:Yngoisaohivong:919968345418268714> **Nông Sản** :

🥚 : \`${trung}\` <a:Ybluemilk:918844687425609739> : \`${sua}\` 🥩 : \`${thit}\`

<a:Yngoisaohivong:919968345418268714> **Nguyên Liệu** :

<:Yu_thoc:953407482884161566> : \`${thoc}\` <:Yu_co:953408530474475520> : \`${co}\` <:Yu_camheo:953407482955436062> : \`${camheo}\``)
      .setImage("https://media.discordapp.net/attachments/912599984644444220/926708785521786900/lineke.gif")
      .setColor(`#FFCC00`)
      .setTimestamp()
    await message.channel.send({ content: `<@${message.author.id}>`, embeds: [cropembed] })
  }
}
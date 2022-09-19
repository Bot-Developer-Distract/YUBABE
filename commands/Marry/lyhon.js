const { MessageEmbed,MessageActionRow, MessageButton } = require("discord.js");
const marrySchema = require('../../models/marrySchema')
const userReg = RegExp(/<@!?(\d+)>/)
const invSchema = require('../../models/invSchema')
const anhcuoiSchema = require(`../../models/anhcuoi`)
module.exports = {
  name: 'lyhon',
  cooldown : 0,
  description: "Đường Ai Nấy Đi...",
  aliases: ['divorce', 'lydi'],
  usage: "[prefix]daily",
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    const data = await marrySchema.findOne({ authorid: message.author.id })
    if (!data) return message.channel.send(`Đồ F.A`)
    const husband = message.author
    let wifeid = data.wifeid
    let lovedata = await marrySchema.findOne({ id: wifeid })
    if (!data && !lovedata) { 
      return message.channel.send(`Đồ F.A`) 
    } else {
      let dacodoi = data.wifeid || data.husbandid
      let nhan = data.nhan || lovedata.nhan || 0
      let lyhon = new MessageEmbed()
        .setTitle(`❤️Ôi trời có thật là muốn ly hôn không ?❤️`)
        .setDescription(`<@!${husband.id}> <a:ctim2:912046879662030969> <@!${dacodoi}>
Bạn và người ấy đã cưới bằng nhẫn ${nhan}`)
        .setFooter({text : `Hãy quyết định thật kỹ nhé!!`})
      const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
                .setCustomId('break')
                .setLabel('Chia Tay')
                .setStyle('SUCCESS')
                .setEmoji('911418230009118790')
        )
        .addComponents(
        new MessageButton()
                .setCustomId('thinkaboutit')
                .setLabel('Suy Nghĩ')
                .setStyle('DANGER')
                .setEmoji('❌')
			)
      let lyhonmessage = await message.channel.send({ embeds  : [lyhon], components: [row] });
      const filter = i => i.customId === 'break' && i.user.id === message.author.id || i.customId === 'thinkaboutit' && i.user.id === message.author.id
        const collector =  await message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async i => {
	if (i.customId === 'break') {
    const data = await marrySchema.findOne({ authorid: message.author.id })
        const wifeid = data.wifeid
        await marrySchema.deleteOne({ authorid: wifeid })
        await marrySchema.deleteOne({ authorid: message.author.id })
        await message.channel.send(`<a:Yu_traitimvo:949079502959566978> *Đường ai nấy đi, không còn vương vấn* <a:Yu_traitimvo:949079502959566978>`)
  }
  else if (i.customId === 'thinkaboutit') {
    return message.channel.send(`💟 Vẫn còn cứu vãn... hãy thử hỏi han vài câu... 💟`)
  }
    });
    }
  }
}

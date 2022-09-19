 const { MessageEmbed } = require('discord.js')
const questSchema = require("../../models/questSchema")
module.exports = {
  name: 'findball',
  cooldown: 20000,
  description: "Quả bóng sẽ nằm ở đâu nhỉ ?",
  usage: "Yfb + <1 | 2 | 3> + <tiền đặt>",
  aliases: ['fb', 'tb', 'timbanh', 'timbong'],
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    let member = message.author;
    let tiền = parseInt(args[1]);
    if (parseInt(tiền) > 150000) tiền = 150000;
    if ((tiền) > 150000) tiền = 150000;
    const cash = await client.cash(member.id);
    if (!args[1] && cash > 1) args[1] = 1;
    if (!args[1] && cash < 1) return message.reply(`Bạn còn 0 đồng, lo làm ăn đi ạ!`)
    else if (args[1] == `all`) {
      tiền = cash
      if (tiền > 150000) tiền = 150000
    }
    if ((cash) < 1) return message.reply(`Bạn còn cái gì đâu mà all`)
    if (isNaN(tiền)) tiền = 1
    if (parseInt(tiền) > cash) return message.reply(`Làm gì đủ tiền mà đua đòi`);
    if ((tiền) > cash) return message.reply(`Làm gì đủ tiền mà đua đòi`);
    if ((tiền) < 0) return message.reply(`Người sống không chơi tiền âm bạn ơi !`);
    if ((tiền) > 10000000000) return message.reply(`không tiền nhập số bé thôi má`);
    let pics =
    {
      "1": "https://cdn.discordapp.com/attachments/944316979626528789/991067076762435614/1656354987996.png",
      "2": "https://cdn.discordapp.com/attachments/944316979626528789/991067076196171836/1656355077044.png",
      "3": "https://cdn.discordapp.com/attachments/944316979626528789/991067076452053082/1656355178917.png"
    }
    let array2 = [
      "https://cdn.discordapp.com/attachments/944316979626528789/991067076762435614/1656354987996.png",
      "https://cdn.discordapp.com/attachments/944316979626528789/991067076196171836/1656355077044.png",
      "https://cdn.discordapp.com/attachments/944316979626528789/991067076452053082/1656355178917.png"
    ]

    let luachon = pics[args[0]]
    let ketqua = array2[Math.floor(Math.random() * array2.length)]
    if (!args[0] || args[0] !== "1" && args[0] !== "2" && args[0] !== "3") args[0] = "1", luachon = `https://cdn.discordapp.com/attachments/944316979626528789/991067076762435614/1656354987996.png`
    let startembed = new MessageEmbed()
      .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: `http://discord.gg/yuland` })
      .setDescription(`Bạn đã đặt **${tiền.toLocaleString('En-us')}** và chọn cốc **số ${args[0]}**`)
      .setFooter({ text: `Chúc bạn may mắn!` })
      .setImage(luachon)
      .setTimestamp()
    let message1 = await message.reply({ embeds: [startembed] })
    await client.sleep(3000)
    let rollembed = new MessageEmbed()
      .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: `http://discord.gg/yuland` })
      .setDescription(`Bạn đã đặt **${tiền.toLocaleString('En-us')}** và chọn cốc **số ${args[0]}**`)
      .setFooter({ text: `Chúc bạn may mắn!` })
      .setImage(`https://cdn.discordapp.com/attachments/944316979626528789/991067075676102747/1656354590834.gif`)
      .setTimestamp()
    await message1.edit({ embeds: [rollembed] })
    await client.sleep(3000)
    if (luachon == ketqua) {
      let winembed = new MessageEmbed()
        .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: `http://discord.gg/yuland` })
        .setDescription(`Bạn đã đặt **${tiền.toLocaleString('En-us')}** và chọn cốc **số ${args[0]}**. Kết quả là :`)
        .setColor('#15ff05')
        .setFooter({ text: `Bạn đã thắng ${tiền.toLocaleString('En-us')} Ycoin` })
        .setImage(ketqua)
        .setTimestamp()
      await message1.edit({ embeds: [winembed] })
      await client.cong(message.author.id, tiền)
    } else if (luachon !== ketqua) {
      let loseembed = new MessageEmbed()
        .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL(), url: `http://discord.gg/yuland` })
        .setDescription(`Bạn đã đặt **${tiền.toLocaleString('En-us')}** và chọn cốc **số ${args[0]}**. Kết quả là :`)
        .setFooter({ text: `Bạn đã thua ${tiền.toLocaleString('En-us')} Ycoin | Tim banh trong 3 coc con k tim dc s tim duoc tinh yeu dich thuc trong hang ti? Nguoi - Măng` })
        .setColor('#ff2700')
        .setImage(ketqua)
        .setTimestamp()
      await message1.edit({ embeds: [loseembed] })
      await client.tru(message.author.id, tiền)
    }
  }
}

const questSchema = require("../../models/questSchema")
module.exports = {
  name: 'coinflip',
  cooldown: 20000,
  description: "Check tài khoản ngân hàng của bạn!",
  usage: "Ycf + <tiền đặt> + mặt úp|ngửa",
  aliases: ['cf', 'tungdongxu', 'tdx'],
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    //return message.reply(`Lệnh đang được sửa chữa`)
    let member = message.author;
    let text = args.join(' ').split(' ')
    let tiền = parseInt(text);
    let choice
    for (let t in text) {
      let choose1 = `n`
      let choose2 = `u`
      if (text.includes(choose1)) choice = `n`
      else if (text.includes(choose2)) choice = `u`
      else choice = `n`
    }
    if (parseInt(text) > 150000) tiền = 150000;
    if ((tiền) > 150000) tiền = 150000;
    const cash = await client.cash(member.id);
    if (!args[0]) return message.channel.send(`Đặt bao nhiêu?`);
    else if (text.includes(`all`)) {
   tiền = cash
      if (cash > 150000) tiền = 150000
    }
    if ((cash) < 1) return message.channel.send(`Bạn còn cái gì đâu mà all`)
    if (!text.includes(`all`) && isNaN(tiền)) tiền = 1
    if (parseInt(text) > cash) return message.channel.send(`Làm gì đủ tiền mà đua đòi`);
    if ((tiền) > cash) return message.channel.send(`Làm gì đủ tiền mà đua đòi`);
    if ((tiền) < 0) return message.channel.send(`Người sống không chơi tiền âm bạn ơi !`);
    if ((tiền) > 10000000000) return message.channel.send(`không tiền nhập số bé thôi má`);


    let coinside = [
      "<:Yucf_up:940859097375440936>",
      "<:Yucf_ngua:940859032267288606>"
    ];
    let coin = coinside[Math.floor(Math.random() * coinside.length)];
    let mat = []
    if (choice == "u") {
      mat = "úp"
    }
    else {
      mat = "ngửa"
    }
    let message1 = await message.channel.send(`<a:Yucf_quay:940859189759180830> | **${message.author.username}** đã bỏ ra **${tiền.toLocaleString('En-us')} Ycoin** và chọn **${mat}**`)
    await client.sleep(3000);
    if (mat == "úp" && coin == "<:Yucf_up:940859097375440936>") {
      await client.cong(member.id, tiền)
      await message1.edit(`<:Yu_Ycoin:953323682246316082> | Kết quả là : ${coin}, **${message.author.username}** bạn đã thắng **${tiền.toLocaleString('En-us')} Ycoin**`);
    } else if (mat == "ngửa" && coin == "<:Yucf_ngua:940859032267288606>") {
      await client.cong(member.id, tiền)
      await message1.edit(`<:Yu_Ycoin:953323682246316082> | Kết quả là : ${coin}, **${message.author.username}** bạn đã thắng **${tiền.toLocaleString('En-us')} Ycoin**`);
    } else {
      await client.tru(member.id, tiền)
      await message1.edit(`<:Yu_Ycoin:953323682246316082> | Kết quả là : ${coin}, **${message.author.username}** bạn đã thua **${tiền.toLocaleString('En-us')} Ycoin**`);
    }


  }
}

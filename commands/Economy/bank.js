const BanSchema= require('../../models/BanSchema')
module.exports = {
  name: 'bank',
  description: "Check tài khoản ngân hàng của bạn! Hãy xem DMS, tôi sẽ gửi tin nhắn riêng cho bạn!",
  usage: "[prefix]bank",
  cooldown : 5000,
  aliases: [`nganhang`],
  run: async (client, message, args) => {
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    if (message.author.id == `896739787392819240`) {
      let member = message.mentions.members.first()
      if (!args[0]) {
        const cash = await client.bank(message.author.id)
        message.author.send(`<a:Ykimcuonglaplanh:922597979146313830> **|** **${message.author.username}** , anh đang có **${cash.toLocaleString('En-us')} Ycoin** trong **Quỹ Đen**!`).catch((e) => console.log(e)) ;
      } else {
        const cash = await client.bank(member.id)
        message.channel.send(`<a:Yu_cassh:942212732642537502> **|** **${member}** đang có **${cash.toLocaleString('En-us')} Ycoin** trong **ngân hàng**!`).catch((e) => console.log(e)) ;
      }
    } else if (message.author.id == `893688556965466152`) {
      let member = message.mentions.members.first()
      if (!args[0]) {
        const cash = await client.bank(message.author.id)
        message.author.send(`<a:Ykimcuonglaplanh:922597979146313830> **|** **${message.author.username}** đang giấu **${cash.toLocaleString('En-us')} Ycoin** trong **Ngân Hàng**!`).catch((e) => console.log(e)) ;
      } else {
        const cash = await client.bank(member.id)
        message.channel.send(`<a:Yu_cassh:942212732642537502> **|** **${member}** đang có **${cash.toLocaleString('En-us')} Ycoin** trong **ngân hàng**!`).catch((e) => console.log(e)) ;
      }
      } else if (message.author.id == `696893548863422494`) {
      let member = message.mentions.members.first()
      if (!args[0]) {
        const cash = await client.bank(message.author.id)
        message.author.send(`<a:Ykimcuonglaplanh:922597979146313830> **|** **${message.author.username}** đang giấu **${cash.toLocaleString('En-us')} Ycoin** trong **Ngân Hàng**!`).catch((e) => console.log(e)) ;
      } else {
        const cash = await client.bank(member.id)
        message.channel.send(`<a:Yu_cassh:942212732642537502> **|** **${member}** đang có **${cash.toLocaleString('En-us')} Ycoin** trong **ngân hàng**!`).catch((e) => console.log(e)) ;
      }
    } else {
      let member = message.author;
      const cash = await client.bank(member.id);
      message.author.send(`<a:Yu_cassh:942212732642537502> **|** **${message.author.username}** , bạn đang có **${cash.toLocaleString('En-us')} Ycoin** trong **ngân hàng**!`).catch((e) => console.log(e)) ;
    }
  
}
}
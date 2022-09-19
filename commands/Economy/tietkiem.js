const { MessageEmbed } = require('discord.js');
const BanSchema = require('../../models/BanSchema')
module.exports = {
  name: 'tietkiem',
  description: "Tiết kiệm ngân hàng. Check DMS nhé, vì mọi giao dịch của bạn đều bảo mật!",
  usage: "Ygui + <amount>",
  cooldown : 4000,
  aliases: ['tk', 'gtk', 'guitietkiem', 'gui'],
  run: async (client, message, args) => {
const ban = await BanSchema.findOne({ memberid: message.author.id })
        if (ban) {
      if (ban.memberid == message.author.id) return
    }
    let timeout = 3000
    let lastused = await client.cd(message.author.id, `tietkiem`)
    let used = client.checkcd(lastused, timeout)
    let cooldown = used.after
  if(!cooldown) {
    const delay = await message.channel.send(`${failicon} | **${message.author.username}**, bạn check dms đi ạ...`)
      await client.sleep(timeout - (Date.now() - lastused))
      await delay.delete()
    }
    else {
      await client.timeout(message.author.id, `tietkiem`)
    let member = message.author;


    let all = await client.cash(member.id);
    let bank = await client.bank(member.id)
    if (args[0] === "all") args[0] = all


    if (!args[0]) {
      return message.channel.send(`Bạn muốn gửi tiết kiệm bao nhiêu?`)
    }
    if (parseInt(args[0]) < 0) { return message.channel.send(`Không thể nhập số âm!`) }
    if (bank < 0) return message.channel.send(` Tiền của bạn đang âm, vui lòng kiếm thêm tiền và thử lại!`)
    if (isNaN(args[0])) {
      return message.channel.send(`Số không hợp lệ!`)
    }

    if (parseInt(args[0]) > all) {
      return message.channel.send(`Bạn không có đủ tiền để tiết kiệm`)
    }
    const banking = parseInt(args[0])
    client.tietkiem(member.id, banking);
    await client.tru(member.id, banking);
    const bankBal = await client.bank(member.id);

    message.author.send(`<a:Yu_cassh:942212732642537502> **|** **${message.author.username}**, bạn đã gửi tiết kiệm thành công : **${parseInt(args[0]).toLocaleString('En-us')}**, Tài khoản ngân hàng của bạn hiện tại là : **${parseInt(bankBal + banking).toLocaleString('En-us')} Ycoin**  `)
  }
  }
}
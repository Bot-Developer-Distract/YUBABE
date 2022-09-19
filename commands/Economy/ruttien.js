const { MessageEmbed } = require('discord.js');
const BanSchema = require('../../models/BanSchema')
module.exports = {
	name: 'ruttien',
	description: "Rút tiền từ ngân hàng. Check DMS nhé, vì mọi giao dịch của bạn đều được bảo mật!",
	usage: "Yrut + <số tiền>",
	aliases: ['rt', 'rut'],
  cooldown : 4000,
	run: async (client, message, args) => {
    let timeout = 3000
    let lastused = await client.cd(message.author.id, `ruttien`)
    let used = client.checkcd(lastused, timeout)
    let cooldown = used.after
  if(!cooldown) {
    const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn check dms đi ạ...`)
      await client.sleep(timeout - (Date.now() - lastused))
      await delay.delete()
    }
    else {
      await client.timeout(message.author.id, `ruttien`)
const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
		let member = message.author;


		let all = await client.bank(member.id);

		if (args[0] === "all") args[0] = all


		if (!args[0]) {
			return message.channel.send(`Bạn muốn rút bao nhiêu?`)
		}

    if (args[0] < 0) { return message.channel.send(`Không thể nhập số âm!`)}
    if (all < 0) return message.channel.sed(`Ngân hàng của bạn đang âm, xin vui lòng nạp thêm tiền và thử lại !`)
		if (isNaN(args[0])) {
			return message.channel.send(`Số không hợp lệ!`)
		}

		if (args[0] > all) {
			return message.channel.send(`Bạn không có đủ tiền trong ngân hàng để rút`)
		}
		const banking = parseInt(args[0])
		client.ruttien(member.id, banking);
		await client.cong(member.id, banking);
		const bankBal = await client.bank(member.id);
    const money = await client.cash(member.id)
		await message.author.send(`<a:Yu_cassh:942212732642537502> | **${message.author.username}**, bạn rút tiền thành công : **${parseInt(args[0]).toLocaleString('En-us')}**, bạn đang có : **${parseInt(args[0]).toLocaleString('En-us')} Ycoin**`)

	}
  }
}
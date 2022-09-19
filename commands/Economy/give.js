const { Client, Message, MessageEmbed } = require("discord.js");
const BanSchema = require('../../models/BanSchema')
module.exports = {
  name: "give",
  description : "Chuyển tiền, giao dịch và trở thành một thương nhân thực sự! JOB chuyên dụng : Thương Gia!",
  aliases: ['ct', 'send', 'tf'],
  usages: `Ygive + <tag> + <số tiền>`,
  cooldown: 2000,
	/**
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
  run: async (client, message, args) => {
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    let timeout = 3000
    let lastused = await client.cd(message.author.id, `give`)
    let used = client.checkcd(lastused, timeout)
    let cooldown = used.after
  if(!cooldown) {
    const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn check dms đi ạ...`)
      await client.sleep(timeout - (Date.now() - lastused))
      await delay.delete()
    }
    else {
      await client.timeout(message.author.id, `give`)
    const user = message.mentions.users.first();
    if (!user) return message.channel.send("Ủa chuyển cho ai?");

    if (user == message.author)
      return message.channel.send("Không làm muốn có ăn? Buff tiền hay gì...");

    const coinsToGive = args[1]
    if (!coinsToGive)
      return message.channel.send("Ủa chuyển nhiêu?");

    if (isNaN(coinsToGive))
      return message.channel.send("Số tiền không hợp lệ!");

    if ((parseInt(coinsToGive) < 0))
      return message.channel.send("Người sống ai chơi tiền âm bạn ơi!");

    if ((parseInt(coinsToGive) == 0))
      return message.channel.send("Ok? Give0laconcho");


    const convertedGive = parseInt(coinsToGive);
    if ((await client.cash(message.author.id)) < convertedGive)
      return message.channel.send("Ehem... Đỗ nghèo khỉ... check tiền lại đi!");
    await client.tru(message.author.id, convertedGive);
    await client.cong(user.id, convertedGive);
    if (message.author.id === '896739787392819240') {
      message.channel.send(`<a:Yvip:919967591307550740> **| ${user.username}**, bạn đã được <:yu_lavie:920097925395259452> **__Yukii__** <:yu_lavie:920097925395259452> ban cho **${convertedGive.toLocaleString('En-us')} Ycoin**`)
    } else if (message.author.id === '614071069870915585') {
      message.channel.send(`<a:Ylacdit:941615907363495936> **${message.author.username}** cho **${user.username}** **${convertedGive.toLocaleString('En-us')} Ycoin** mua đá nè <a:Ylacdit:941615907363495936>`)
    } else if (message.author.id === '748245489476173865') {
      message.channel.send(`<a:Yngoisaohivong:919968345418268714> | **En sẽ tình** đã cho **${user.username}** **${convertedGive.toLocaleString('En-us')} Ycoin** để đá phò cùng **En** <:Yhun:908822217285066772>`)
    } else if (message.author.id === '696893548863422494') {
      message.channel.send(`<a:Ylacdit:941615907363495936> | **Phan Kha** đã gửi cho **${user.username}** **${convertedGive.toLocaleString('En-us')} Ycoin **<:Yhun:908822217285066772>`)
    } else if (message.author.id === '893688556965466152') {
      message.channel.send(`<a:MR_Dc_frozen:911687840352591912> **${user.username}**, bạn đã được <:ymitt:972986149616361503> **Mít** <:ymitt:972986149616361503> cho **${convertedGive.toLocaleString('En-us')} ngàn** để đi hotel <a:Ylacmong:925548999182782474>`)
    } else {
      message.channel.send(`<a:banking:937082483466448896> **| ${message.author.username}**, bạn đã chuyển **${convertedGive.toLocaleString('En-us')} Ycoin** cho **${user.username}**`)
    }

  }
  }
}
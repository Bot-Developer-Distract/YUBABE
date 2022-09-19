const { MessageEmbed, SelectMenuInteraction, MessageSelectMenu, MessageActionRow, MessageButton } = require('discord.js');
const itemSchema = require('../../models/itemSchema')
const invSchema = require('../../models/invSchema')
let number = require('../../config/nbxs.json')
let { QuickDB } = require('quick.db')
let db = new QuickDB()
module.exports = {
  name: "luckylottery",
  description: "Mua vé số may mắn 1phut",
  aliases: ["lottery", 'luckylott', 'll'],
  cooldown: 60000,
  usage: null,
  error: `Bạn vừa mua vé số xong hoặc vẫn đang chờ kết quả dò số, xin hãy kiên nhẫn quay lại sau! Nếu đã mua xin hãy gõ Ylottery check! Nếu bạn gõ Ylottery buy khi đã mua hoặc Ylottery check khi chưa mua, bạn sẽ phải chờ thêm 60s nữa!`,
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    return message.reply("Xin lỗi vì sự bất tiện này, Yukii và YwY sẽ cố gắng sửa lại sau. Yukii... ngất rồi...")
    let action = args[0]
    if (action == 'buy' || action == 'mua') {
      let damuavesoroi = await db.get(`${message.author.id}.damuaveso1`)
      if (damuavesoroi) return message.reply(`Bạn đã mua vé số rồi, xin hãy kiên nhẫn đợi 1 phút nữa và gõ Ylottery check !!`)
      let somua = parseInt(args[1])
      if (!parseInt(args[1])) somua = 1
      if (parseInt(args[1]) > 10) somua = 10
      let cash = await client.cash(message.author.id)
      if (cash < somua * 15000) return message.reply(`Bạn không đủ ${parseInt(somua * 15000).toLocaleString("en-us")} để mua vé số!`)
      await client.tru(message.author.id, somua * 15000)
      let jackpot = await db.get("jackpot.yubabe")
      if (!jackpot) await db.set("jackpot.yubabe", 5000000)

      await db.add(`jackpot.yubabe`, somua * 15000)

      await db.set(`${message.author.id}.damuaveso1`, somua)
      await message.reply(`Chúc mừng bạn đã mua vé số thành công, bạn mua **${somua}** giải và sẽ trúng x${somua} lần, dò lại sau 1 phút! Jackpot hiện tại là : **__${jackpot ? jackpot : 5000000}__** Trong quá trình đang chờ kết quả, bạn sẽ không thể mua vé số mới!`)
    }
    if (action == 'check' || action == 'doso') {
      let damuavesoroi = await db.get(`${message.author.id}.damuaveso1`)
      if (!damuavesoroi) return message.reply(`Bạn chưa mua vé số,xin hãy gõ Ylottery buy để mua số! 15.000 1 vé! Tối đa 1 vé mỗi 2p!`)
      let numbers = []
      let playernumbers = []
      let jackpot = await db.get("jackpot.yubabe")
      let giaithuong = [
        10000,
        15000,
        30000,
        35000,
        70000,
        100000,
        200000,
        500000,
        700000,
        1400000,
        2800000,
        5600000,
        jackpot,
        15000,
        50000,
        20000,
        20000,
        10000
      ]
      let giaithuongnumbers = []
      for (let i = 0; i < 10; i++) {
        numbers[i] = Math.floor(Math.random() * 99)
        giaithuongnumbers[i] = giaithuong[Math.floor(Math.random() * giaithuong.length)]


      }
      for (let i = 0; i < 4; i++) {
        playernumbers[i] = Math.floor(Math.random() * 99)
      }

      let abc = new MessageEmbed()
        .setTitle(`Vé số may mắn của ${message.author.username}
        4 Số Trúng Giải`)
        .setDescription(` 
       **${sonho(number, playernumbers[0], 2)}** • **${sonho(number, playernumbers[1], 2)}** • **${sonho(number, playernumbers[2], 2)}** • **${sonho(number, playernumbers[3], 2)}**`)
        .addField(`Hãy nhấn qua trang để dò số`, `Tiền thưởng sẽ ở trang cuối cùng, mỗi số trúng dù trùng lặp bạn vẫn sẽ nhận cả hai giải thưởng! Trúng bao nhiêu giải nhận bấy nhiêu Ycoin!`)
      let a = new MessageEmbed()
        .setTitle(`Vé số may mắn của ${message.author.username}
        4 Số Trúng Giải`)
        .setDescription(` 
       **${sonho(number, playernumbers[0], 2)}** • **${sonho(number, playernumbers[1], 2)}** • **${sonho(number, playernumbers[2], 2)}** • **${sonho(number, playernumbers[3], 2)}**`)
      let b = a.addField(`Số đầu tiên của bạn với số tiền trúng ${parseInt(giaithuongnumbers[0]).toLocaleString("en-us")}`, `||${numbers[0]}||`, true)
      let c = a.addField(`Số thứ 2 của bạn với số tiền trúng ${parseInt(giaithuongnumbers[1]).toLocaleString("en-us")}`, `||${numbers[1]}||`, true)
      let d = a.addField(`Số thứ 3 của bạn với số tiền trúng ${parseInt(giaithuongnumbers[2]).toLocaleString("en-us")}`, `||${numbers[2]}||`, true)
      let e = a.addField(`Số thứ 4 của bạn với số tiền trúng ${parseInt(giaithuongnumbers[3]).toLocaleString("en-us")}`, `||${numbers[3]}||`, true)
      let f = a.addField(`Số thứ 5 của bạn với số tiền trúng ${parseInt(giaithuongnumbers[4]).toLocaleString("en-us")}`, `||${numbers[4]}||`, true)
      let g = a.addField(`Số thứ 6 của bạn với số tiền trúng ${parseInt(giaithuongnumbers[5]).toLocaleString("en-us")}`, `||${numbers[5]}||`, true)
      let h = a.addField(`Số thứ 7 của bạn với số tiền trúng ${parseInt(giaithuongnumbers[6]).toLocaleString("en-us")}`, `||${numbers[6]}||`, true)
      let i = a.addField(`Số thứ 8 của bạn với số tiền trúng ${parseInt(giaithuongnumbers[7]).toLocaleString("en-us")}`, `||${numbers[7]}||`, true)
      let j = a.addField(`Số thứ 9 của bạn với số tiền trúng ${parseInt(giaithuongnumbers[8]).toLocaleString("en-us")}`, `||${numbers[8]}||`, true)
      let k = a.addField(`Số cuối cùng của bạn với số tiền trúng ${parseInt(giaithuongnumbers[9]).toLocaleString("en-us")}`, `||${numbers[9]}||`, true)
      let giaithuongycoin = 0
      for (let i = 0; i <= numbers.length; i++) {
        let jackpot = await db.get("jackpot.yubabe")
        if (giaithuongnumbers[i] == jackpot && numbers[i] == playernumbers[0] || giaithuongnumbers[i] == jackpot && numbers[i] == playernumbers[1] || giaithuongnumbers[i] == jackpot && numbers[i] == playernumbers[2] || giaithuongnumbers[i] == jackpot && numbers[i] == playernumbers[3]) await db.set("jackpot.yubabe", 5000000), giaithuongycoin += giaithuongnumbers[i]
        else if (numbers[i] == playernumbers[0] || numbers[i] == playernumbers[1] || numbers[i] == playernumbers[2] || numbers[i] == playernumbers[3]) giaithuongycoin += giaithuongnumbers[i] * damuavesoroi

      }

      let traogiai = new MessageEmbed()
        .setAuthor({ name: message.author.username })
        .setDescription(`Giải thưởng của bạn : **__${parseInt(giaithuongycoin).toLocaleString('En-Us')}__**`)
        .setFooter({ text: `Giải thưởng đã được trao về ví của bạn! Xin kiểm tra lại!` })
      await client.cong(message.author.id, parseInt(giaithuongycoin))
      let embeds = [abc, a, traogiai]
      let acc = await message.channel.send({ embeds: [embeds[0]] })
      await db.delete(`${message.author.id}.damuaveso1`)
      await chuyen_trang(client, acc, message.author.id, embeds)
    }
  }
}

async function chuyen_trang(client, message, authorid, embeds) {
  let currentPage = 0;
  const { MessageButton, MessageActionRow } = require("discord.js");

  let buttonrow1 = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('<:ARROW1:874262374595588117>')
        .setCustomId('skip-page1'),
      new MessageButton()
        .setStyle('SECONDARY')
        .setEmoji('<:ARROW2:874262374733987860>')
        .setCustomId('back-page'),
      new MessageButton()
        .setStyle('SUCCESS')
        .setEmoji('<:HOME:894217044013248532>')
        .setCustomId('home-page'),
      new MessageButton()
        .setStyle('SECONDARY')
        .setEmoji('<:ARROW3:874262374541049896>')
        .setCustomId('next-page'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('<:ARROW4:874262374608150578>')
        .setCustomId('skip-page2')
    );

  if (embeds.length === 1) return message.edit({ embeds: [embeds[0]] })
  const queueEmbed = await message.edit(
    {
      content: `** Current Page - ${currentPage + 1} /${embeds.length}**`,
      components: [buttonrow1],
      embeds: [embeds[currentPage]]
    }
  )
  var collector = queueEmbed.createMessageComponentCollector({
    filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
  })
  collector.on("collect", (interaction) => {
    if (interaction.user.id !== authorid) return interaction.reply({ content: "Không phải nút dành cho bạn!", ephemeral: true })
    interaction.deferUpdate()
    if (interaction.customId == "next-page") {
      if (currentPage < embeds.length - 1) {
        currentPage++;
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      }
      else {
        currentPage = 0
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      }
    }
    else if (interaction.customId == "back-page") {
      if (currentPage !== 0) {
        --currentPage;
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      } else {
        currentPage = embeds.length - 1
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      }
    }
    else if (interaction.customId == "skip-page1") {
      currentPage = 0;
      // queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      // queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
    }
    else if (interaction.customId == "skip-page2") {
      currentPage = embeds.length - 1;
      queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
    }
    else if (interaction.customId == "home-page") {
      interaction.message.edit({ embeds: [embeds[0]], components: [buttonrow1] })
    }
  })
}

function sonho(array, count, digits) {
  var result = '';
  var num = count;
  if (count < 0) count = 0;
  for (i = 0; i < digits; i++) {
    var digit = count % 10;
    count = Math.trunc(count / 10);
    result = array.numbers[digit] + result;
  }
  return result;
}

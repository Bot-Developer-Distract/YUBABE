const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const plantSchema = require('../../models/plantSchema')
module.exports = {
  name: 'field',
  description: "Xem trang trại của bạn!",
  usage: "Yr",
  cooldown: 15000,
  aliases: ['ruong', 'r'],
  run: async (client, message, args) => {

    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    let author = message.author.id
    let username = message.author.username
    let hgarray = {
      "1": client.hg.lua,
      "2": client.hg.lua,
      "3": client.hg.lua,
      "4": client.hg.lua,
      "5": client.hg.lua,
      "6": client.hg.lua,
      "7": client.hg.lua,
      "8": client.hg.lua,
      "9": client.hg.lua,
      "10": client.hg.lua,
      "11": client.hg.lua,
      "12": client.hg.lua,
      "13": client.hg.lua,
    }




    //nếu không trồng
    let hg1 = await checktime(client, client.hg.lua, 'lua', message.author.id, 1800000)
    let hg2 = await checktime(client, client.hg.khoaimi, 'khoaimi', message.author.id, 7200000)
    let hg3 = await checktime(client, client.hg.cachua, 'cachua', message.author.id, 5400000)
    let hg4 = await checktime(client, client.hg.caingot, 'caingot', message.author.id, 21600000)
    let hg5 = await checktime(client, client.hg.ot, 'ot', message.author.id, 1800000)
    let hg6 = await checktime(client, client.hg.carot, 'carot', message.author.id, 21600000)
    let hg7 = await checktime(client, client.hg.khoaitay, 'khoaitay', message.author.id, 14400000)
    let hg8 = await checktime(client, client.hg.mia, 'mia', message.author.id, 7200000)
    let hg9 = await checktime(client, client.hg.dautay, 'dautay', message.author.id, 3600000)
    let hg10 = await checktime(client, client.hg.dao, 'dao', message.author.id, 5400000)
    let hg11 = await checktime(client, client.hg.duagang, 'duagang', message.author.id, 14400000)
    let hg12 = await checktime(client, client.hg.mit, 'mit', message.author.id, 64800000)
    let hg13 = await checktime(client, client.hg.ngo, 'ngo', message.author.id, 3600000)

    let ga = `<:YuGaCon:953394343148920902>`
    let bo = `<:YuBoCon:953394492503908362>`
    let heo = `<:YuHeoCon:953396171181817997>`
    let tnga = await checktimethu(client, ga, 'ga', message.author.id, 3600000)
    let tnbo = await checktimethu(client, bo, 'bo', message.author.id, 7200000)
    let tnheo = await checktimethu(client, heo, 'heo', message.author.id, 10800000)
    ///////////////////////////////////////////

    const fieldembed1 = new MessageEmbed()
      .setAuthor({ name: message.guild.name })
      .setTitle(`**Ruộng Của ${username}**`)
      .setDescription(`

\`1\` 𝑶̛́𝒕 ${hg5}
\`2\` 𝑳𝒖́𝒂 ${hg1}
\`3\` 𝑫𝒂̂𝒖 𝑻𝒂̂𝒚 ${hg9}
\`4\` 𝑵𝒈𝒐̂ ${hg13}
\`5\` 𝑪𝒂̀ 𝑪𝒉𝒖𝒂 ${hg3}
\`6\` ***Đ***𝒂̀𝒐 ${hg10}`)
      .setFooter({ text: "Lệnh Thu Hoạch : Yth + tên trái cây(vietlien0dau)" })

    const fieldembed2 = new MessageEmbed()
      .setAuthor({ name: message.guild.name })
      .setTitle(`**Ruộng Của ${username}**`)
      .setDescription(`\`7\` 𝑲𝒉𝒐𝒂𝒊 𝑴𝒊̀ ${hg2}
\`8\` 𝑴𝒊́𝒂 ${hg8}
\`9\` 𝑲𝒉𝒐𝒂𝒊 𝑻𝒂̂𝒚 ${hg7}
\`10\` 𝑫𝒖̛𝒂 𝑮𝒂𝒏𝒈 ${hg11}
\`11\` 𝑪𝒂̀ 𝑹𝒐̂́𝒕 ${hg6}
\`12\` 𝑪𝒂̉𝒊 𝑵𝒈𝒐̣𝒕 ${hg4}
\`13\` 𝑴𝒊́𝒕 ${hg12}`)
      .setFooter({ text: "Lệnh Thu Hoạch : Yth + tên trái cây(vietlien0dau)" })
    const fieldembed3 = new MessageEmbed()
      .setAuthor({ name: message.guild.name })
      .setTitle(`**Trang trại của ${username}**`)
      .setDescription(`\`ga\` 𝑮𝒂̀ ${tnga}
\`bo\` 𝑩𝒐̀ ${tnbo}
\`heo\` 𝑯𝒆𝒐 ${tnheo}`)
      .setFooter({ text: "Lệnh Nuôi Thú : Ynuoi + Id thú(ga | bo | heo)" })


    let embeds = [fieldembed1, fieldembed2, fieldembed3]
    let abc = await message.reply({ embeds: [fieldembed1] })
    let msgw = await chuyen_trang(client, abc, author, embeds)
    await thu_hoach(client, client.hg.ot, client.hg.lua, client.hg.dautay, client.hg.ngo, client.hg.cachua, client.hg.dao, client.hg.khoaimi, client.hg.mia, client.hg.khoaitay, client.hg.duagang, client.hg.carot, client.hg.caingot, client.hg.mit, message, message.author.id)
  }
}
//client.chuyentrangfull = async function chuyen_trang(client, message, author, embeds, home, menu)
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
      content: `**Current Page - ${currentPage + 1}/${embeds.length}**`,
      components: [buttonrow1],
      embeds: [embeds[currentPage]]
    }
  )
  var collector = queueEmbed.createMessageComponentCollector({
    filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
  })
  collector.on("collect", (interaction) => {
    if (interaction.user.id !== authorid) return interaction.reply({ content: "Không phải nút dành cho bạn!", ephemeral: true })
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
async function checktime(client, hatgiong, name, author, timeout) {
  let msg = `${hatgiong} : ${client.emo.fail} Chưa Nuôi-Trồng`
  const plantSchema = require('../../models/plantSchema')
  let plant = await plantSchema.findOne({ key: `${name}_${author}` })
  if (plant) msg = `${hatgiong} : ${client.emo.done} **Đã Chín**`
  let key = await client.cd(author, `trong${name}`)
  let cd = await client.checkcd(key, timeout)
  let cooldown = cd.after
  if (!cooldown) msg = `${hatgiong} : \`${cd.h + `:` + cd.m + `:` + cd.s}s\``
  return msg
}
async function checktimethu(client, hatgiong, name, author, timeout) {
  let soheo = await client.grow(author, `<:YuHeoCon:953396171181817997>`)

  if (soheo <= 5 && soheo > 0) heo = `<:YuHeo:953394386165698610>`
  let msg = `${hatgiong} : ${client.emo.fail} Chưa Nuôi-Trồng `
  //check khi đã nuôi
  let lastfeedheo = await client.cd(author, `cd${name}`)
  let timeheo = client.checkcd(lastfeedheo, timeout)
  let cooldownheo = timeheo.after
  if (soheo > 0 && cooldownheo) msg = `${hatgiong}: ${client.emo.done} **Đã Đói**`
  if (soheo > 0 && !cooldownheo) msg = `${hatgiong} : \`${timeheo.h + `:` + timeheo.m + `:` + timeheo.s + `s`}\``
  return msg
}
async function thu_hoach(client, hg1, hg2, hg3, hg4, hg5, hg6, hg7, hg8, hg9, hg10, hg11, hg12, hg13, message, authorid) {

  const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");
  const plantSchema = require('../../models/plantSchema')
  let buttonrow1 = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg1)
        .setCustomId('ot'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg2)
        .setCustomId('lua'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg3)
        .setCustomId('dautay'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg4)
        .setCustomId('ngo'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg5)
        .setCustomId('cachua')
    );
  let buttonrow2 = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg6)
        .setCustomId('dao'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg7)
        .setCustomId('khoaimi'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg8)
        .setCustomId('mia'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg9)
        .setCustomId('khoaitay'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg10)
        .setCustomId('duagang')
    );
  let buttonrow3 = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg11)
        .setCustomId('carot'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg12)
        .setCustomId('caingot'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji(hg13)
        .setCustomId('mit')
    );
  let startembed = new MessageEmbed()
    .setAuthor({ name: message.author.username })
    .setTitle(`Bạn Muốn Thu Hoạch?`)
    .setDescription(`Nhấp Nút Bên Dưới Để Thu Hoạch`)
    .setTimestamp()
    .setThumbnail(message.author.avatarURL())

  let reply = await message.reply({embeds:[startembed] , components: [buttonrow1, buttonrow2, buttonrow3] })

  var collector = reply.createMessageComponentCollector({
    filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
  })
  collector.on("collect", async (interaction) => {
    let hgs = {
      "ot": hg1,
      "lua": hg2,
      "dautay": hg3,
      "ngo": hg4,
      "cachua": hg5,
      "dao": hg6,
      "khoaimi": hg7,
      "mia": hg8,
      "khoaitay": hg9,
      "duagang": hg10,
      "carot": hg11,
      "caingot": hg12,
      "mit": hg13,
    }


    if (interaction.user.id !== authorid) return interaction.reply({ content: `:x: | **${interaction.user.username}** , không phải nút dành cho bạn!`, ephemeral: true }).then(async msg => {
      await client.sleep(5000)
      await msg.delete()
    }
    ).catch(e => console.log(e))
    let a = interaction.customId
    let n1 = a
    let hgss = hgs[a]
    if (n1) {
      await interaction.deferUpdate()
      let timeout = checktimeout(n1)
      let plant = await client.cd(message.author.id, `trong${n1}`)
      let used = await client.checkcd(plant, timeout)
      let cooldown = used.after
      if (!cooldown) {
        const delay = await message.channel.send(`${hgss} | **${message.author.username}**, ${hgss} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`).then(async msg => {
      await client.sleep(5000)
      await msg.delete()
    }
    ).catch(e => console.log(e))
      }
      else {
        let planted = await plantSchema.findOne({ key: `${n1}_${authorid}` })
        if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${hgss} đâu?`).then(async msg => {
      await client.sleep(5000)
      await msg.delete()
    }
    ).catch(e => console.log(e))  
        await plantSchema.deleteOne({ key: `${n1}_${authorid}` })
        let soluong = checksl(a)
        await client.addgrow(`${message.author.id}`, `${hgss}`, soluong, 'ns')
        await message.channel.send(`${hgss} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${hgss}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`).then(async msg => {
      await client.sleep(5000)
      await msg.delete()
    }
    ).catch(e => console.log(e))  
      }
    }

  })
}
function checktimeout(name) {
  let timeout = 0
  if (name == `ot`) timeout = 1800000
  else if (name == `lua`) timeout = 1800000
  else if (name == `dautay`) timeout = 3600000
  else if (name == `ngo`) timeout = 3600000
  else if (name == `cachua`) timeout = 5400000
  else if (name == `dao`) timeout = 5400000
  else if (name == `khoaimi`) timeout = 7200000
  else if (name == `mia`) timeout = 7200000
  else if (name == `khoaitay`) timeout = 14400000
  else if (name == `duagang`) timeout = 14400000
  else if (name == `carot`) timeout = 21600000
  else if (name == `caingot`) timeout = 21600000
  else if (name == `mit`) timeout = 64800000
  return timeout
}
function checksl(name) {
  let timeout = 0
  if (name == `ot`) timeout = Math.floor(Math.random() * 10) + 1
  else if (name == `lua`) timeout = timeout = Math.floor(Math.random() * 10) + 1
  else if (name == `dautay`) timeout = Math.floor(Math.random() * 8) + 1
  else if (name == `ngo`) timeout = Math.floor(Math.random() * 8) + 1
  else if (name == `cachua`) timeout = Math.floor(Math.random() * 6) + 1
  else if (name == `dao`) timeout = Math.floor(Math.random() * 6) + 1
  else if (name == `khoaimi`) timeout = Math.floor(Math.random() * 6) + 1
  else if (name == `mia`) timeout = Math.floor(Math.random() * 6) + 1
  else if (name == `khoaitay`) timeout = Math.floor(Math.random() * 4) + 1
  else if (name == `duagang`) timeout = Math.floor(Math.random() * 4) + 1
  else if (name == `carot`) timeout = Math.floor(Math.random() * 4) + 1
  else if (name == `caingot`) timeout = Math.floor(Math.random() * 4) + 1
  else if (name == `mit`) timeout = Math.floor(Math.random() * 3) + 1

  if (timeout < 2) timeout = 2
  return timeout
}




const plantSchema = require('../../models/plantSchema')

module.exports = {
  name: 'trongcay',
  description: "Trồng Cây! JOB chuyên dụng : Nông Dân",
  usage: "[prefix]tc",
  aliases: ['tc'],
  cooldown: 0,
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    const username = message.author.username
    const author = message.author.id
    await trong_cay(client, client.hg.ot, client.hg.lua, client.hg.dautay, client.hg.ngo, client.hg.cachua, client.hg.dao, client.hg.khoaimi, client.hg.mia, client.hg.khoaitay, client.hg.duagang, client.hg.carot, client.hg.caingot, client.hg.mit, "ot", "lua", "dautay", "ngo", "cachua", "dao", "khoaimi", "mia", "khoaitay", "duagang", "carot", "caingot", "mit", message, author, username)
  }
}
async function trong_cay(client, hg1, hg2, hg3, hg4, hg5, hg6, hg7, hg8, hg9, hg10, hg11, hg12, hg13, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, message, authorid, username) {

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
    .setTitle(`Bạn Muốn Trồng Cây?`)
    .setDescription(`Nhấp Nút Bên Dưới Để Trồng Cây`)
    .setTimestamp()
    .setThumbnail(message.author.avatarURL())

  let reply = await message.reply({ embeds: [startembed], components: [buttonrow1, buttonrow2, buttonrow3] })

  var collector = reply.createMessageComponentCollector({
    filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
  })
  collector.on("collect", async (interaction) => {
    if (interaction.user.id !== authorid) return interaction.reply({ content: `:x: | **${interaction.user.username}** , không phải nút dành cho bạn!`, ephemeral: true }).then(async msg => {
      await client.sleep(5000)
      await msg.delete()
    }
    ).catch(e => console.log(e))
    if (interaction.customId == n1) {
      await interaction.deferUpdate()
      let hatgiong = await client.grow(`${authorid}`, `${hg1}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg1} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))

      let plant = await plantSchema.findOne({ key: `${n1}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg1} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg1}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n1}`)
      let addplant = new plantSchema({ key: `${n1}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg1} | **${username}**, bạn đã trồng ${hg1}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n2) {
      await interaction.deferUpdate()
      let hatgiong = await client.grow(`${authorid}`, `${hg2}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg2} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n2}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg2} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg2}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n2}`)
      let addplant = new plantSchema({ key: `${n2}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg2} | **${username}**, bạn đã trồng ${hg2}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n3) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg3}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg3} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n3}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg3} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg3}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n3}`)
      let addplant = new plantSchema({ key: `${n3}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg3} | **${username}**, bạn đã trồng ${hg3}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n4) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg4}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg4} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n4}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg4} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg4}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n4}`)
      let addplant = new plantSchema({ key: `${n4}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg4} | **${username}**, bạn đã trồng ${hg4}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n5) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg5}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg5} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n5}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg5} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg5}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n5}`)
      let addplant = new plantSchema({ key: `${n5}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg5} | **${username}**, bạn đã trồng ${hg5}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n6) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg6}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg6} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n6}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg6} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg6}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n6}`)
      let addplant = new plantSchema({ key: `${n6}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg6} | **${username}**, bạn đã trồng ${hg6}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n7) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg7}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg7} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n7}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg7} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg7}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n7}`)
      let addplant = new plantSchema({ key: `${n7}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg7} | **${username}**, bạn đã trồng ${hg7}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n8) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg8}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg8} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n8}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg8} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg8}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n8}`)
      let addplant = new plantSchema({ key: `${n8}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg8} | **${username}**, bạn đã trồng ${hg8}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n9) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg9}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg9} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n9}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg9} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg9}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n9}`)
      let addplant = new plantSchema({ key: `${n9}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg9} | **${username}**, bạn đã trồng ${hg9}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n10) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg10}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg10} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n10}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg10} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg10}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n10}`)
      let addplant = new plantSchema({ key: `${n10}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg10} | **${username}**, bạn đã trồng ${hg10}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n11) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg11}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg11} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n11}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg11} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg11}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n11}`)
      let addplant = new plantSchema({ key: `${n11}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg11} | **${username}**, bạn đã trồng ${hg11}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n12) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg12}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg12} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n12}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg12} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg12}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n12}`)
      let addplant = new plantSchema({ key: `${n12}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg12} | **${username}**, bạn đã trồng ${hg12}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
    else if (interaction.customId == n13) {
      await interaction.deferUpdate() 
      let hatgiong = await client.grow(`${authorid}`, `${hg13}`)
      if (hatgiong == 0) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã hết hạt ${hg13} để trồng!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      let plant = await plantSchema.findOne({ key: `${n13}_${authorid}` })
      if (plant) return message.reply({ content: `${client.emo.fail} | **${username}**, bạn đã trồng ${hg13} rồi! Xin hãy trồng loại khác!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
      await client.trugrow(`${authorid}`, `${hg13}`, 1, 'ns');
      await client.timeout(message.author.id, `trong${n13}`)
      let addplant = new plantSchema({ key: `${n13}_${authorid}`, value: `true` })
      await addplant.save()
      return message.reply({ content: `${hg13} | **${username}**, bạn đã trồng ${hg13}! Gõ Yruong để xem khi nào thu hoạch được nhé!!!`, ephemeral: true }).then(async msg => {
        await client.sleep(5000)
        await msg.delete()
      }
      ).catch(e => console.log(e))
    }
  })
}
const plantSchema = require('../../models/plantSchema')
module.exports = {
  name: 'thuhoach',
  description: "Thu hoạch nông sản bạn đã trồng!",
  usage: "Yth + <id>",
  aliases: ['th'],
  cooldown : 0,
  run: async (client, message, args) => {
const BanSchema = require('../../models/BanSchema')
const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    return message.reply(`Gõ Yruong để thu hoạch!`)
    let author = message.author.id
    let hatthu = args[0]
    if (hatthu == `001` || hatthu == `1` || hatthu == 'ot') {
    let timeout = 1800000
    let plant = await client.cd(message.author.id, `trongot`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, ${client.hg.ot} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `ot_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.ot} đâu?`)
      await plantSchema.deleteOne({ key: `ot_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 4) soluong = 4
      await client.addgrow(`${message.author.id}`,`${client.hg.ot}`, soluong, 'ns')
      await message.channel.send(`${client.hg.ot} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.ot}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `002` || hatthu == `2` || hatthu == 'lua') {
    let timeout = 1800000
    let plant = await client.cd(message.author.id, `tronglua`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, ${client.hg.lua} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `lua_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.lua} đâu?`)
      await plantSchema.deleteOne({ key: `lua_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 4) soluong = 4
      await client.addgrow(`${message.author.id}`,`${client.hg.lua}`, soluong, 'ns')
      await message.channel.send(`${client.hg.lua} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.lua}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `003` || hatthu == `3` || hatthu == 'dautay') {
    let timeout = 3600000
    let plant = await client.cd(message.author.id, `trongdautay`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, ${client.hg.dautay} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `dautay_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.dautay} đâu?`)
      await plantSchema.deleteOne({ key: `dautay_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 3) soluong = 3
      await client.addgrow(`${message.author.id}`,`${client.hg.dautay}`, soluong, 'ns')
      await message.channel.send(`${client.hg.dautay} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.dautay}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `004` || hatthu == `4` || hatthu == 'ngo' || hatthu == 'bap') {
      let timeout = 3600000
      let plant = await client.cd(message.author.id, `trongngo`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.ngo} | **${message.author.username}**, ${client.hg.ngo} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `ngo_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.ngo} đâu?`)
      await plantSchema.deleteOne({ key: `ngo_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 3) soluong = 3
      await client.addgrow(`${message.author.id}`,`${client.hg.ngo}`, soluong, 'ns')
      await message.channel.send(`${client.hg.ngo} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.ngo}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `005` || hatthu == `5` || hatthu == 'cachua') {
      let timeout = 5400000
      let plant = await client.cd(message.author.id, `trongcachua`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.cachua} | **${message.author.username}**, ${client.hg.cachua} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `cachua_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.cachua} đâu?`)
      await plantSchema.deleteOne({ key: `cachua_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 2) soluong = 2
      await client.addgrow(`${message.author.id}`,`${client.hg.cachua}`, soluong, 'ns')
      await message.channel.send(`${client.hg.cachua} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.cachua}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `006` || hatthu == `6` || hatthu == 'dao') {
      let timeout = 5400000
      let plant = await client.cd(message.author.id, `trongdao`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.dao} | **${message.author.username}**, ${client.hg.dao} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `dao_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.dao} đâu?`)
      await plantSchema.deleteOne({ key: `dao_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 2) soluong = 2
      await client.addgrow(`${message.author.id}`,`${client.hg.dao}`, soluong, 'ns')
      await message.channel.send(`${client.hg.dao} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.dao}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `007` || hatthu == `7` || hatthu == 'khoaimi') {
      let timeout = 7200000
      let plant = await client.cd(message.author.id, `trongkhoaimi`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.khoaimi} | **${message.author.username}**, ${client.hg.khoaimi} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `khoaimi_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.khoaimi} đâu?`)
      await plantSchema.deleteOne({ key: `khoaimi_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 2) soluong = 2
      await client.addgrow(`${message.author.id}`,`${client.hg.khoaimi}`, soluong, 'ns')
      await message.channel.send(`${client.hg.khoaimi} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.khoaimi}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `008` || hatthu == `8` || hatthu == 'mia') {
      let timeout = 7200000
      let plant = await client.cd(message.author.id, `trongmia`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.mia} | **${message.author.username}**, ${client.hg.mia} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `mia_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.mia} đâu?`)
      await plantSchema.deleteOne({ key: `mia_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 2) soluong = 2
      await client.addgrow(`${message.author.id}`,`${client.hg.mia}`, soluong, 'ns')
      await message.channel.send(`${client.hg.mia} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.mia}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `009` || hatthu == `9` || hatthu == 'khoaitay') {
      let timeout = 14400000
      let plant = await client.cd(message.author.id, `trongkhoaitay`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.khoaitay} | **${message.author.username}**, ${client.hg.khoaitay} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `khoaitay_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.khoaitay} đâu?`)
      await plantSchema.deleteOne({ key: `khoaitay_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 2) soluong = 2
      await client.addgrow(`${message.author.id}`,`${client.hg.khoaitay}`, soluong, 'ns')
      await message.channel.send(`${client.hg.khoaitay} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.khoaitay}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `010` || hatthu == `10` || hatthu == 'duagang') {
      let timeout = 14400000
      let plant = await client.cd(message.author.id, `trongduagang`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.duagang} | **${message.author.username}**, ${client.hg.duagang} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `duagang_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.duagang} đâu?`)
      await plantSchema.deleteOne({ key: `duagang_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 2) soluong = 2
      await client.addgrow(`${message.author.id}`,`${client.hg.duagang}`, soluong, 'ns')
      await message.channel.send(`${client.hg.duagang} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.duagang}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `011` || hatthu == `11` || hatthu == 'carot') {
      let timeout = 21600000
      let plant = await client.cd(message.author.id, `trongcarot`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.carot} | **${message.author.username}**, ${client.hg.carot} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `carot_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.carot} đâu?`)
      await plantSchema.deleteOne({ key: `carot_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 2) soluong = 2
      await client.addgrow(`${message.author.id}`,`${client.hg.carot}`, soluong, 'ns')
      await message.channel.send(`${client.hg.carot} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.carot}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `012` || hatthu == `12` || hatthu == 'caingot') {
      let timeout = 21600000
      let plant = await client.cd(message.author.id, `trongcaingot`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.caingot} | **${message.author.username}**, ${client.hg.caingot} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `caingot_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.caingot} đâu?`)
      await plantSchema.deleteOne({ key: `caingot_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 2) soluong = 2
      await client.addgrow(`${message.author.id}`,`${client.hg.caingot}`, soluong, 'ns')
      await message.channel.send(`${client.hg.caingot} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.caingot}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `013` || hatthu == `13` || hatthu == 'mit') {
      let timeout = 64800000
      let plant = await client.cd(message.author.id, `trongmit`)
    let used = await client.checkcd(plant, timeout)
    let cooldown = used.after
     if (!cooldown) {
    const delay = await message.channel.send(`${client.emo.mit} | **${message.author.username}**, ${client.hg.mit} bạn trồng chưa chín để thu hoạch! Xin hãy quay lại sau \`${used.h + `:` + used.m + `:` + used.s}s\` để thu hoạch nhé!`)
      await client.sleep(5000)
      await delay.delete()
      return
    }
    else {
      let planted = await plantSchema.findOne({ key: `mit_${author}` })
      if (!planted) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn đã trồng ${client.hg.mit} đâu?`)
      await plantSchema.deleteOne({ key: `mit_${author}` })
      let soluong = Math.floor(Math.random() * 5)
      if (soluong < 2) soluong = 2
      await client.addgrow(`${message.author.id}`,`${client.hg.mit}`, soluong, 'ns')
      await message.channel.send(`${client.hg.mit} | **${message.author.username}**, bạn đã thu hoạch được ***${soluong}*** ${client.hg.mit}, bán để kiếm lời, nhớ giữ giống để trồng nhé!`)
    }
    }
    else if (hatthu == `014` || hatthu == `14`) {
  return message.channel.send(`Không có hạt thứ 14, 15 hoặc lớn hơn !`)
    } 
    else if (hatthu == `015` || hatthu > 15) {
      return message.channel.send(`Không có hạt thứ 14, 15 hoặc lớn hơn !`)
    }
    else {
      return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn nhập đúng ID muốn thu hoạch nào!`)
    }
  }
}


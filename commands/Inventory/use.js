const gems1 = [
  '<:C_gem_01:982028743608533022>',
  '<:U_gem_01:982028744204103810>',
  '<:R_gem_01:982028744107655198>',
  '<:SR_gem_01:982028743960854598>',
  '<:E_gem_01:982028743595941938>',
  '<:P_gem_01:982028744191529010>',
  '<:G_gem_01:982028743629484082>',
]
const gems2 = [
  '<:C_gem_02:982028743537209424>',
  '<:U_gem_02:982028744061505606>',
  '<:R_gem_02:982028744124428428>',
  '<:SR_gem_02:982028743956652072>',
  '<:E_gem_02:982028743679827968>',
  '<:P_gem_02:982028743713366066>',
  '<:G_gem_02:982028743646265364>',
]
const gems3 = [
  '<:C_gem_03:982028743914696704>',
  '<:U_gem_03:982028743650463795>',
  '<:R_gem_03:982028743948247110>',
  '<:SR_gem_03:982028744124411924>',
  '<:E_gem_03:982028743805648926>',
  '<:P_gem_03:982028743960830032>',
  '<:G_gem_03:982028743537217588>',
]
const gems4 = [
  '<:C_gem_04:982028743570755624>',
  '<:U_gem_04:982028744187326494>',
  '<:R_gem_04:982028743822426152>',
  '<:SR_gem_04:982028743981817908>',
  '<:E_gem_04:982028743688212520>',
  '<:P_gem_04:982028743893721178>',
  '<:G_gem_04:982028744057294848>',
]
const invSchema = require('../../models/invSchema')
const userSchema = require('../../models/userSchema')
module.exports = {
  name: 'use',
  cooldown: 2000,
  description: 'Sử dụng vật phẩm!',
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    const buff1 = await client.buff(message.author.id, 1)
    const buff2 = await client.buff(message.author.id, 2)
    const buff3 = await client.buff(message.author.id, 3)
    const buff4 = await client.buff(message.author.id, 4)
    let author = message.author.id
    let gem1 = {
      '01': '<:C_gem_01:982028743608533022>',
      '05': '<:U_gem_01:982028744204103810>',
      '09': '<:R_gem_01:982028744107655198>',
      '13': '<:SR_gem_01:982028743960854598>',
      '17': '<:E_gem_01:982028743595941938>',
      '21': '<:P_gem_01:982028744191529010>',
      '25': '<:G_gem_01:982028743629484082>',
    }
    let gem2 = {
      '02': '<:C_gem_02:982028743537209424>',
      '06': '<:U_gem_02:982028744061505606>',
      '10': '<:R_gem_02:982028744124428428>',
      '14': '<:SR_gem_02:982028743956652072>',
      '18': '<:E_gem_02:982028743679827968>',
      '22': '<:P_gem_02:982028743713366066>',
      '26': '<:G_gem_02:982028743646265364>',
    }
    let gem3 = {
      '03': '<:C_gem_03:982028743914696704>',
      '07': '<:U_gem_03:982028743650463795>',
      '11': '<:R_gem_03:982028743948247110>',
      '15': '<:SR_gem_03:982028744124411924>',
      '19': '<:E_gem_03:982028743805648926>',
      '23': '<:P_gem_03:982028743960830032>',
      '27': '<:G_gem_03:982028743537217588>',
    }
    let gem4 = {
      '04': '<:C_gem_04:982028743570755624>',
      '08': '<:U_gem_04:982028744187326494>',
      '12': '<:R_gem_04:982028743822426152>',
      '16': '<:SR_gem_04:982028743981817908>',
      '20': '<:E_gem_04:982028743688212520>',
      '24': '<:P_gem_04:982028743893721178>',
      '28': '<:G_gem_04:982028744057294848>',
    }
    const id = args[0]
    const idngoc1 = gem1[args[0]]
    const idngoc2 = gem2[args[0]]
    const idngoc3 = gem3[args[0]]
    const idngoc4 = gem4[args[0]]
    let passports = {
      "30": "<:ProPassport:988093838348410930>",
      "31": "<:VIPPassport:988093810955411456>"
    }
    const idpassport = passports[args[0]]
    if (id == `gb` || id == `gembox` || id == `29`) {
      const gemboxes = [
        '<:C_gem_01:982028743608533022>',
        '<:U_gem_01:982028744204103810>',
        '<:R_gem_01:982028744107655198>',
        '<:SR_gem_01:982028743960854598>',
        '<:C_gem_02:982028743537209424>',
        '<:U_gem_02:982028744061505606>',
        '<:R_gem_02:982028744124428428>',
        '<:SR_gem_02:982028743956652072>',
        '<:C_gem_03:982028743914696704>',
        '<:U_gem_03:982028743650463795>',
        '<:R_gem_03:982028743948247110>',
        '<:SR_gem_03:982028744124411924>'
      ]
      const gembox = await client.gem(author, `<:GEMBOX:982028743952441355>`)
      if (gembox < 1) return message.channel.send(`Bạn không còn hộp ngọc để dùng.`)
      let soluong = parseInt(args[1])
      if (soluong < 0) return message.channel.send(`:x: | **${message.author.username} Bạn không thể nhập số âm !**`)
      if (!soluong && gembox > 0) soluong = 1


      if (args[1] == `all`) soluong = gembox
      if (soluong > 20) soluong = 20
      if (gembox < soluong) return message.channel.send(`:x: | **${message.author.username}**, bạn không có đủ hộp ngọc để dùng!`)
      await client.trugem(author, `<:GEMBOX:982028743952441355>`, soluong)
      let gg = []
      if (soluong > 1) {
        for (var i = 0; i < soluong; i++) {
          let g = gemboxes[Math.floor(Math.random() * gemboxes.length)]
          gg[i] = g
        }
        let count = {}
        gg.forEach(item => {
          if (count[item]) {
            count[item] += 1
            return
          }
          count[item] = 1
        })
        for (let item in count) {
          let type = checktype(gems1, gems2, gems3, gems4, item)
          await client.addgem(author, item, count[item], type)
        }
        await message.channel.send(`<:GEMBOX:982028743952441355> | **${message.author.username}**, bạn đã sử dụng **${soluong}** hộp ngọc và nhận được ${gg}!`)
      }
      else {
        let a = gemboxes[Math.floor(Math.random() * gemboxes.length)]
        let type = checktype(gems1, gems2, gems3, gems4, a)
        await client.addgem(author, a, 1, type)
        await message.channel.send(`<:GEMBOX:982028743952441355> | **${message.author.username}**, bạn đã sử dụng **${soluong}** hộp ngọc và nhận được ${a}`)

      }
    }
    else if (id == `pgb` || id == `progembox` || id == `32`) {
      const gemboxes = [
        '<:C_gem_01:982028743608533022>',
        '<:U_gem_01:982028744204103810>',
        '<:R_gem_01:982028744107655198>',
        '<:SR_gem_01:982028743960854598>',
        '<:E_gem_01:982028743595941938>',
        '<:P_gem_01:982028744191529010>',

        '<:C_gem_02:982028743537209424>',
        '<:U_gem_02:982028744061505606>',
        '<:R_gem_02:982028744124428428>',
        '<:SR_gem_02:982028743956652072>',
        '<:E_gem_02:982028743679827968>',
        '<:P_gem_02:982028743713366066>',

        '<:C_gem_03:982028743914696704>',
        '<:U_gem_03:982028743650463795>',
        '<:R_gem_03:982028743948247110>',
        '<:SR_gem_03:982028744124411924>',
        '<:E_gem_03:982028743805648926>',
        '<:P_gem_03:982028743960830032>',
      ]
      const gembox = await client.gem(author, `<:PRO_GEMBOX:982028744057298964>`)
      if (gembox < 1) return message.channel.send(`Bạn không còn hộp ngọc PRO để dùng.`)
      let soluong = parseInt(args[1])
      if (soluong < 0) return message.channel.send(`:x: | **${message.author.username} Bạn không thể nhập số âm !**`)
      if (!soluong && gembox > 0) soluong = 1


      if (args[1] == `all`) soluong = gembox
      if (soluong > 20) soluong = 20
      if (gembox < soluong) return message.channel.send(`:x: | **${message.author.username}**, bạn không có đủ hộp ngọc PRO để dùng!`)
      await client.trugem(author, `<:PRO_GEMBOX:982028744057298964>`, soluong)
      let gg = []
      if (soluong > 1) {
        for (var i = 0; i < soluong; i++) {
          let g = gemboxes[Math.floor(Math.random() * gemboxes.length)]
          gg[i] = g
        }
        let count = {}
        gg.forEach(item => {
          if (count[item]) {
            count[item] += 1
            return
          }
          count[item] = 1
        })
        for (let item in count) {
          let type = checktype(gems1, gems2, gems3, gems4, item)
          await client.addgem(author, item, count[item], type)
        }
        await message.channel.send(`<:PRO_GEMBOX:982028744057298964> | **${message.author.username}**, bạn đã sử dụng **${soluong}** hộp ngọc PRO và nhận được ${gg}!`)
      }
      else {
        let a = gemboxes[Math.floor(Math.random() * gemboxes.length)]
        let type = checktype(gems1, gems2, gems3, gems4, a)
        await client.addgem(author, a, 1, type)
        await message.channel.send(`<:PRO_GEMBOX:982028744057298964> | **${message.author.username}**, bạn đã sử dụng **${soluong}** hộp ngọc PRO và nhận được ${a}`)

      }
    }
    else if (id == `vgb` || id == `vipgembox` || id == `33`) {
      const gemboxes = [
        '<:C_gem_04:982028743570755624>',
        '<:U_gem_04:982028744187326494>',
        '<:R_gem_04:982028743822426152>',
        '<:SR_gem_04:982028743981817908>',
        '<:E_gem_04:982028743688212520>',
        '<:P_gem_04:982028743893721178>',
      ]
      const gembox = await client.gem(author, `<:VIP_GEMBOX:982028743889543278>`)
      if (gembox < 1) return message.channel.send(`Bạn không còn hộp ngọc VIP để dùng.`)
      let soluong = parseInt(args[1])
      if (soluong < 0) return message.channel.send(`:x: | **${message.author.username} Bạn không thể nhập số âm !**`)
      if (!soluong && gembox > 0) soluong = 1


      if (args[1] == `all`) soluong = gembox
      if (soluong > 20) soluong = 20
      if (gembox < soluong) return message.channel.send(`:x: | **${message.author.username}**, bạn không có đủ hộp ngọc VIP để dùng!`)
      await client.trugem(author, `<:VIP_GEMBOX:982028743889543278>`, soluong)
      let gg = []
      if (soluong > 1) {
        for (var i = 0; i < soluong; i++) {
          let g = gemboxes[Math.floor(Math.random() * gemboxes.length)]
          gg[i] = g
        }
        let count = {}
        gg.forEach(item => {
          if (count[item]) {
            count[item] += 1
            return
          }
          count[item] = 1
        })
        for (let item in count) {
          let type = checktype(gems1, gems2, gems3, gems4, item)
          await client.addgem(author, item, count[item], type)
        }
        await message.channel.send(`<:VIP_GEMBOX:982028743889543278> | **${message.author.username}**, bạn đã sử dụng **${soluong}** hộp ngọc VIP và nhận được ${gg}!`)
      }
      else {
        let a = gemboxes[Math.floor(Math.random() * gemboxes.length)]
        let type = checktype(gems1, gems2, gems3, gems4, a)
        await client.addgem(author, a, 1, type)
        await message.channel.send(`<:VIP_GEMBOX:982028743889543278> | **${message.author.username}**, bạn đã sử dụng **${soluong}** hộp ngọc VIP và nhận được ${a}`)

      }
    }
    else if (idngoc1) {
      const geml = await client.gem(author, `${idngoc1}`)
      if (geml == 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không có ngọc ${idngoc1}`)
      if (buff1 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng chung loại ngọc!`)
      if (buff4 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng thêm ngọc khi đã dùng KINGSTONE!`)
      let soluong = checkngoc(gems1, idngoc1, 10)
      let heso = checkbuff(gems1, idngoc1, 1)
      await client.trugem(author, idngoc1, 1)
      await client.addbuff(author, 1, soluong, heso)
      await message.channel.send(`${idngoc1} | **${message.author.username}**, bạn đã sử dụng ngọc ${idngoc1} và được buff **${soluong}** lần hunt x${heso}`)
    }
    else if (idngoc2) {
      const geml = await client.gem(author, `${idngoc2}`)
      if (geml == 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không có ngọc ${idngoc2}`)
      if (buff2 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng chung loại ngọc!`)
      if (buff4 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng thêm ngọc khi đã dùng KINGSTONE!`)
      let soluong = checkngoc(gems2, idngoc2, 10)
      await client.trugem(author, idngoc2, 1)
      await client.addbuff(author, 2, soluong, 1)
      await message.channel.send(`${idngoc2} | **${message.author.username}**, bạn đã sử dụng ngọc ${idngoc2} và được buff **${soluong}** lần hunt double!`)
    }
    else if (idngoc3) {
      const geml = await client.gem(author, `${idngoc3}`)
      if (geml == 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không có ngọc ${idngoc3}`)
      if (buff3 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng chung loại ngọc!`)
      if (buff4 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng thêm ngọc khi đã dùng KINGSTONE!`)
      let soluong = checkngoc(gems3, idngoc3, 10)
      await client.trugem(author, idngoc3, 1)
      await client.addbuff(author, 3, soluong, 1)
      await message.channel.send(`${idngoc3} | **${message.author.username}**, bạn đã sử dụng ngọc ${idngoc3} và được buff **${soluong}** lần hunt may mắn!`)
    }
    else if (idngoc4) {
      const gem = await client.gem(author, `${idngoc4}`)
      if (gem < 1) return message.channel.send(`:x: | **${message.author.username}**, bạn không có ngọc ${idngoc4}`)
      if (buff1 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng thêm  KINGSTONE khi vẫn còn sức mạnh đá quý!`)
      if (buff2 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng thêm  KINGSTONE khi vẫn còn sức mạnh đá quý!`)
      if (buff3 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng thêm  KINGSTONE khi vẫn còn sức mạnh đá quý!`)
      if (buff4 > 0) return message.channel.send(`:x: | **${message.author.username}**, bạn không thể dùng thêm ngọc khi đã dùng KINGSTONE!`)
      let soluong = checkngoc(gems4, idngoc4, 10)
      let heso = checkbuff(gems4, idngoc4, 1)
      await client.trugem(author, idngoc4, 1)
      await client.addbuff(author, 4, soluong, heso)
      await message.channel.send(`${idngoc4} | **${message.author.username}**, bạn đã sử dụng ngọc ${idngoc4} và được buff **${soluong}** lần hunt may mắn!`)
    }
    else if (idpassport) {

      const passport = await invSchema.findOne({ memberid: message.author.id, name: idpassport })
      if (!passport || passport.quanlity == 0) return message.reply(`${client.emo.fail} | Bạn không còn ${idpassport} để dùng!`)

      const date = await client.datepassport(message.author.id)
      const status = await client.checkpassport(date)
      let end = status.after
      let d = status.d
      let h = status.h
      let m = status.m
      let s = status.s
      if (!end) return message.reply(`${client.emo.fail} | Passport của bạn vẫn còn ${d + `ngày` + h + `giờ` + m + `phút` + s + `giây`} mới hết hạn !`)
      passport.quanlity -= 1
      await passport.save()
      await client.activatepassport(message.author.id, idpassport)
      await message.channel.send(`${idpassport} | **${message.author.username}**, bạn đã sử dụng PASSPORT ${idpassport}! Passport sẽ có hiệu lực trong 30 ngày!`)
      const user = await userSchema.findOne({ memberid: message.author.id })
      if (idpassport == "<:VIPPassport:988093810955411456>") {
        user.vip = `Đã Đăng Ký`
        await user.save()
      } else {
        user.pro = `Đã Đăng Ký`
        await user.save()
      }
    }
    else {
      return message.channel.send(`**${message.author.username}**, vật phẩm bạn dùng không hợp lệ.`)
    }
  }
}
function checkngoc(array, ngoc, heso) {
  if (ngoc == array[0]) result = heso * 1
  if (ngoc == array[1]) result = heso * 2
  if (ngoc == array[2]) result = heso * 4
  if (ngoc == array[3]) result = heso * 6
  if (ngoc == array[4]) result = heso * 8
  if (ngoc == array[5]) result = heso * 12
  if (ngoc == array[6]) result = heso * 20
  return result
}
function checktype(s1, s2, s3, s4, ngoc) {
  if (s1.includes(ngoc)) result = 1
  if (s2.includes(ngoc)) result = 2
  if (s3.includes(ngoc)) result = 3
  if (s4.includes(ngoc)) result = 4
  return result

}
function checkbuff(array, ngoc, heso) {
  if (ngoc == array[0]) result = 4
  if (ngoc == array[1]) result = 5
  if (ngoc == array[2]) result = 6
  if (ngoc == array[3]) result = 7
  if (ngoc == array[4]) result = 8
  if (ngoc == array[5]) result = 9
  if (ngoc == array[6]) result = 10
  return result
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
const overrideWithinDay = false;
const { Permissions } = require(`discord.js`)
const banSchema = require('../../models/BanSchema')
const { QuickDB } = require('quick.db')
const db = new QuickDB();
const { MessageEmbed } = require("discord.js");
const dailySchema = require("../../models/dailySchema")
const BanSchema = require('../../models/BanSchema')
const cooldownSchema = require('../../models/cooldownSchema')
const luckyicon = `<a:Yngoisaohivong:919968345418268714>`
const vipSchema = require("../../models/vipSchema")
const marrySchema = require('../../models/marrySchema')
module.exports = {
  name: 'daily',
  aliases: ['moingay'],
  cooldown: 0,
  description: `Dùng lệnh này để nhận quà mỗi ngày!`,
  usage: `Ydaily`,
  run: async (client, message, args) => {
    //return message.channel.send(`Lệnh Đang Sửa!`)
    let user = message.author
    const ban = await BanSchema.findOne({ memberid: user.id })
    if (ban) {
      if (ban.memberid == user.id) return
    }
    let timeout = 3000
    let lastused = await client.cd(message.author.id, `addngoc`)
    let used = client.checkcd(lastused, timeout)
    let cooldown = used.after
    if (!cooldown) {
      const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn từ từ thôi cho tôi thở phát... **${used.s}s** nữa hãy gõ tiếp!`).catch((e) => console.log(e))
      await client.sleep(timeout - (Date.now() - lastused))
      await delay.delete()
      return
    }
    else {
      await client.timeout(message.author.id, `addngoc`)
      const profile = await marrySchema.findOne({ authorid: message.author.id })
      let a = await client.cd(message.author.id, `daily10`)
      let day = await client.newday(a)
      let inday = day.withinDay
      let h = day.hours
      let min = day.minutes
      let sec = day.seconds
      let after = day.after
      let vip = false
      let pro = false
      const provip = await vipSchema.findOne({ memberid: message.author.id })
      if (provip) {
        const date = await client.datepassport(message.author.id)
        const status = await client.checkpassport(date)
        let end = status.after
        if (!end && provip.type == `<:VIPPassport:988093810955411456>`) vip = true
        if (!end && provip.type == `<:ProPassport:988093838348410930>`) pro = true
      }
      if (!after) {
        await client.timeout(message.author.id, `daily10`)
        await message.channel.send(`<:xxx:921536522451316766> | **${user.username}**, bạn đã nhận quà hôm nay rồi, quay lại sau **__${h + `:` + min + `:` + sec}s__** để nhận! \`[Mốc 00:00 Mỗi Ngày]\``).catch((e) => console.log(e))
      }
      else if (after && inday) {

        await client.timeout(message.author.id, `daily10`)
        const data = await dailySchema.findOne({ id: user.id })
        if (!data) {
          let newdata = new dailySchema({ id: user.id, name: user.name, streak: 1 })
          await newdata.save();
        }
        else {
          data.streak += 1;
          await data.save()
        }
        let streaks = 1
        if (data) streaks = data.streak
        let dailymoney = (Math.floor(Math.random() * 499) + 1) * streaks;
        if (profile) dailymoney *= 2
        await client.cong(user.id, dailymoney);
        const msg = `<a:Yngoisaohivong:919968345418268714> **| ${user.username}**, bạn nhận được **${parseInt(dailymoney).toLocaleString('En-us')} Ycoin!** Bạn đã điểm danh liên tục : **${streaks}** ngày!`
        if (!pro && !vip) {
          let msg1 = ``
          let soluong = 3
          if (profile) soluong += 1, msg1 = `, và 1 hộp thêm vì đã cưới <@${profile.husbandid}> `
          await client.addgem(user.id, `<:GEMBOX:982028743952441355>`, soluong, 0)
          await message.channel.send(`${msg}
${luckyicon} | **${user.username}**, bạn đã được tặng 3 <:GEMBOX:982028743952441355>${msg1} cho ngày hôm nay!`).catch((e) => console.log(e))
        }
        else if (pro) {
          let msg1 = ``
          let soluong = 3
          if (profile) soluong += 2, msg1 = `, và một 2 thêm vì đã cưới <@${profile.husbandid}> `
          await client.addgem(user.id, `<:PRO_GEMBOX:982028744057298964>`, 2, 0)
          await client.addgem(user.id, `<:GEMBOX:982028743952441355>`, soluong, 0)
          await message.channel.send(`${msg}
<:ProPassport:988093838348410930> | **${user.username}**, bạn đã được tặng 3 <:GEMBOX:982028743952441355>${msg1} và được thêm 2 <:PRO_GEMBOX:982028744057298964> cho ngày hôm nay vì đã đăng ký PRO-PASSPORT !`).catch((e) => console.log(e))
        }
        else if (vip) {
          let msg1 = ``
          let soluong = 3
          if (profile) soluong += 3, msg1 = `, và 3 hộp thêm vì đã cưới <@${profile.husbandid}> `
          await client.addgem(user.id, `<:PRO_GEMBOX:982028744057298964>`, 2, 0)
          await client.addgem(user.id, `<:VIP_GEMBOX:982028743889543278>`, 2, 0)
          await client.addgem(user.id, `<:GEMBOX:982028743952441355>`, soluong, 0)
          await message.channel.send(`${msg}
<:VIPPassport:988093810955411456> | **${user.username}**, bạn đã được tặng 3 <:GEMBOX:982028743952441355>${msg1} và được thêm 2 <:PRO_GEMBOX:982028744057298964>, 2 <:VIP_GEMBOX:982028743889543278> cho ngày hôm nay vì đã đăng ký VIP-PASSPORT !`).catch((e) => console.log(e))
        }

        return
      }
      else if (after && !inday) {
        await client.timeout(message.author.id, `daily10`)
        const data = await dailySchema.findOne({ id: user.id })
        if (!data) {
          let newdata = new dailySchema({ id: user.id, name: user.name, streak: 1 })
          await newdata.save();
        }
        else {
          data.streak = 1;
          await data.save()
        }
        let streaks = 1
        if (data) streaks = data.streak

        let dailymoney = (Math.floor(Math.random() * 499) + 1) * streaks;
        if (profile) dailymoney *= 2
        await client.cong(user.id, dailymoney);

        const msg = `<a:Yngoisaohivong:919968345418268714> **| ${user.username}**, bạn nhận được **${parseInt(dailymoney).toLocaleString('En-us')} Ycoin!** Bạn đã bỏ lỡ điểm danh liên tục, streak hiện tại : **${streaks}** ngày!`
        if (!pro && !vip) {
          let msg1 = ``
          let soluong = 3
          if (profile) soluong += 1, msg1 = `, và 1 hộp thêm vì đã cưới <@${profile.husbandid}> `
          await client.addgem(user.id, `<:GEMBOX:982028743952441355>`, soluong, 0)
          await message.channel.send(`${msg}
${luckyicon} | **${user.username}**, bạn đã được tặng 3 <:GEMBOX:982028743952441355>${msg1} cho ngày hôm nay!`).catch((e) => console.log(e))
        }
        else if (pro) {
          let msg1 = ``
          let soluong = 3
          if (profile) soluong += 2, msg1 = `, và 2 hộp thêm vì đã cưới <@${profile.husbandid}> `
          await client.addgem(user.id, `<:PRO_GEMBOX:982028744057298964>`, 2, 0)
          await client.addgem(user.id, `<:GEMBOX:982028743952441355>`, soluong, 0)
          await message.channel.send(`${msg}
<:ProPassport:988093838348410930> | **${user.username}**, bạn đã được tặng 3 <:GEMBOX:982028743952441355>${msg1} và được thêm 2 <:PRO_GEMBOX:982028744057298964> cho ngày hôm nay vì đã đăng ký PRO-PASSPORT !`).catch((e) => console.log(e))
        }
        else if (vip) {
          await client.addgem(user.id, `<:PRO_GEMBOX:982028744057298964>`, 2, 0)
          await client.addgem(user.id, `<:VIP_GEMBOX:982028743889543278>`, 2, 0)
          let msg1 = ``
          let soluong = 3
          if (profile) soluong += 3, msg1 = `, và 3 hộp thêm vì đã cưới <@${profile.husbandid}> `
          await client.addgem(user.id, `<:GEMBOX:982028743952441355>`, soluong, 0)
          await message.channel.send(`${msg}
<:VIPPassport:988093810955411456> | **${user.username}**, bạn đã được tặng 3 <:GEMBOX:982028743952441355>${msg1} và được thêm 2 <:PRO_GEMBOX:982028744057298964>, 2 <:VIP_GEMBOX:982028743889543278> cho ngày hôm nay vì đã đăng ký VIP-PASSPORT !`).catch((e) => console.log(e))
        }
      }


    }
    await message.channel.send(`\`VOTE CHO BOT MỖI 12G ĐỂ NHẬN 3 GEMBOX!\``)
  }
}


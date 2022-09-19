const userSchema = require('../../models/userSchema')
const marrySchema = require('../../models/marrySchema')
const zoopointSchema = require('../../models/zoopointSchema')
const invSchema = require('../../models/invSchema')
const dailySchema = require('../../models/dailySchema')
const houseSchema = require('../../models/houseSchema')
const moneySchema = require('../../models/moneySchema')
const bankSchema = require('../../models/bankSchema')
const praySchema = require('../../models/praySchema')
const vipSchema = require('../../models/vipSchema')
const badgeSchema = require('../../models/badgeSchema')
const { MessageEmbed } = require('discord.js')
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  name: 'profile',
  cooldown: 0,
  description: "Get Mentioned Users Avatar",
  usage: "[prefix]avatar",
  aliases: ['p5', "user"],
  nsfwOnly: true,
  run: async (client, message, args) => {
    const userp5 = await userSchema.findOne({ memberid: message.author.id })
    if (!userp5) {
      const add = new userSchema({
        memberid: message.author.id,
        membername: message.author.username,
        vip: `Chưa Đăng Ký`,
        pro: `Chưa Đăng Ký`,
        avatar: ``,
        about: `Nông Dân Chăm Chỉ`,
        description: `Người Bạn Thân Thiện Của Yubabe`,
      })
      await add.save()
      const msg = await message.channel.send(`Đang thiết lập profile của ${message.author.username}....`)
      await sleep(1000)
      await msg.edit(`Đang thiết lập profile của ${message.author.username}...`)
      await sleep(1000)
      await msg.edit(`Đang thiết lập profile của ${message.author.username}..`)
      await sleep(1000)
      await msg.edit(`Đang thiết lập profile của ${message.author.username}...`)
      await sleep(1000)
      await msg.edit(`Đang thiết lập profile của ${message.author.username}.`)
      await sleep(1000)
      return msg.edit(`Đã hoàn tất, gõ lại lệnh để xem Profile!`)

    }
    const marry = await marrySchema.findOne({ authorid: message.author.id })
    let tinhtrang = `Độc Thân`
    let wifename = ``
    if (marry) wifename = await marrySchema.findOne({ authorid: marry.wifeid })
    if (marry) tinhtrang = `Đã Kết Hôn Cùng <@${marry.wifeid}> Với ${marry.nhan} - Điểm Thân Mật : ${marry.together}`
    const zpoint = await client.zoopoint(message.author.id)
    const daily = await dailySchema.findOne({ id: message.author.id })
    let stre = 0
    if (daily) stre = daily.streak
    let badges = ``
    const badgearr = await badgeSchema.find({
      memberid: message.author.id
    })
    if (badgearr[0]) {
      for (let bad in badgearr) {
        let bn = badgearr[bad]
        if (bn) {
          let bnem = bn.badge
          badges += `${bnem} `
        } else {
          badges = `Không Có Phù Hiệu`
        }
      }
    }
    let vip = false
    let pro = false
    const provip = await vipSchema.findOne({ memberid: message.author.id })
    if (provip) {
      const date = await client.datepassport(message.author.id)
      const status = await client.checkpassport(date)
      let end = status.after
      if (!end && provip.type == `<:VIPPassport:988093810955411456>`) vip = true, pro = true
      if (!end && provip.type == `<:ProPassport:988093838348410930>`) pro = true
    }
    var msgpro;
    var msgvip
    if (!pro) msgpro = `Chưa Đăng Ký`
    if (!vip) msgvip = `Chưa Đăng Ký`
    if (pro) msgpro = `Đã Đăng Ký`
    if (vip) msgvip = `Đã Đăng Ký`, msgpro = `Bao Gồm Trong Gói VIP`
    
    const NhaNho = await houseSchema.findOne({
      id: `${message.author.id}_<:Yu_nhanho:950503484548087848>`
    });
    if (NhaNho) {
      nhanho = NhaNho.quanlity;
    }
    else {
      nhanho = 0;
    }
    const NhaCap4 = await houseSchema.findOne({
      id: `${message.author.id}_<:Yu_nhacap4:950503307854622840>`
    });
    if (NhaCap4) {
      nhacap4 = NhaCap4.quanlity;
    }
    else {
      nhacap4 = 0;
    }
    const NhaCaoTang = await houseSchema.findOne({
      id: `${message.author.id}_<:Yu_nhacaotang:950503798953095258>`
    });
    if (NhaCaoTang) {
      nhacaotang = NhaCaoTang.quanlity;
    }
    else {
      nhacaotang = 0;
    }

    const cash = await client.cash(message.author.id)
    const bank = await client.bank(message.author.id)
    const pray = await client.prayed(message.author.id)

    const pro5 = new MessageEmbed()
      .setAuthor({ name: message.author.username, iconURL: message.author.avatarURL, url: `https://discord.gg/yuland` })
      .setTitle(`Thông tin cá nhân của ${userp5.membername}`)
      .setDescription(`${badges}`)
      .setThumbnail(message.author.avatarURL())
      .setColor(`#303037`)
      .addField(`<:GEMBOX:982028743952441355> Điểm Zoo : ${parseInt(zpoint).toLocaleString('En-Us')}`, `<:bufflucky:983135001300307968> Điểm May Mắn : ${parseInt(pray).toLocaleString('En-Us')}`)
      .addField(`Hôn Nhân`, tinhtrang)
      .addField(`<a:emoji_131:910626774638010378> Bất Động Sản :`, `<:Yu_nhanho:950503484548087848> - Nhà Nhỏ \`${nhanho}\`
<:Yu_nhacap4:950503307854622840> - Nhà Cấp 4 \`${nhacap4}\`
<:Yu_nhacaotang:950503798953095258> - Nhà Cao Tầng \`${nhacaotang}\`
<:Yu_Ycoin:953323682246316082> `)

      .addField(userp5.about, userp5.description)
      .addField(`<:VIPPassport:988093810955411456> V.I.P PASSPORT`, msgvip)
      .addField(`<:ProPassport:988093838348410930> PRO-PASSPORT`, msgpro)
      .setFooter({ text: `Thành Viên Của YuFarm`, iconURL: message.author.avatarURL() })
      .setTimestamp()


    await message.channel.send({ embeds: [pro5] })


  }
}
const { MessageEmbed, Permissions } = require("discord.js");
const taxiSchema = require(`../../models/taxiSchema`)
module.exports = {
  name: 'taxi',
  description: "Get Mentioned Users Avatar",
  usage: "[prefix]avatar",
  aliases: ['to', "go"],
  cooldown : 0,
  run: async (client, message, args) => {
    let emojis = [
      '<a:Yizumilacmong:929738419930808430>',
      '<a:Yvayduoi1:924665323578359888>',
      '<a:YutimnhaymauKha:924871121768181781>',
      '<a:Yu_luatim:939279440960184350>',
      '<a:Yu_luahong:939279249066582136>',
      '<a:Yu_luado:939279022033088554>',
      '<a:Ymeoaoma:923743727124639774>',
      '<a:Ymeonhay:902835820094971924>',
      '<a:Ykimcuonglaplanh:922597979146313830>',
      '<a:yhug:903753945397231726>',
      '<a:Ygaunhay:902287361617039470>',
      '<a:Ydosat:919967409190862858>',
      '<a:ycow:919387665202307113>',
      '<a:Ybutterfly:911682101005398058>',
      '<a:Ybluebutterfly:919664482102419466>',
      '<a:Yaibietjdou:915376724152287342>',
      '<:Yadu:925796521730015304>',
      '<a:slow_traitimden:914214036277698580>',
    ];
    let emoji = emojis[Math.floor(Math.random() * emojis.length)];
    let emoji2 = emojis[Math.floor(Math.random() * emojis.length)];
    let job = args[0]
    if (!job) {
      await message.channel.send(`1. Nếu bạn có quyền quản lý trong server :
- Gõ Ytaxi new [ID CHANNEL] [TAG] để tạo lối tắt đến kênh
Ví dụ: Ytaxi new 123456789 main
2. Sau đó sử dụng bằng cách
- Gõ Ygo main => Tôi sẽ đưa link kênh cho bạn mà không cần phải lướt danh sách kênh.
3. Ngoài ra bạn có thể check các tag đã tạo bằng Ygo list`)
    }
    else if (job == 'new') {
      if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.channel.send(`Bạn phải có quyền quản lý mới được tạo lệnh taxi mới!`)
      let idchannel = args[1]
      if (!idchannel) return message.channel.send(`Thiếu ID hoặc ID channel không đúng! 
Cú Pháp : \`Ytaxi new [channelid] [tag]\`
VD : Ytaxi new 123456789 mainchat`)
      let tag = args[2]
      if (!tag) return message.channel.send(`Thiếu tag channel ! 
Cú Pháp : \`Ytaxi new [channelid] [tag]\`
VD : Ytaxi new 123456789 mainchat`)
      const guild = await taxiSchema.findOne({ guildid: `${message.guild.id}_${tag}` })
      const list = await taxiSchema.findOne({ guildid: message.guild.id })
      if (!list) {
        const newlist = new taxiSchema({ guildid: message.guild.id, channelid: `LIST`, tag: args[2] })
        await newlist.save()
      } else {
        list.tag += `\`${args[2]}\` `
        await list.save()
      }
      if (guild) return message.channel.send(`Bạn đã tạo lối tắt có tag : **${tag}** rồi! Hãy sử dụng tên khác!`)

      const newtag = new taxiSchema({ guildid: `${message.guild.id}_${tag}`, channelid: args[1], tag: args[2] })
      await newtag.save()
      await message.channel.send(`Bạn đã tạo lối tắt **${tag}** cho kênh <#${idchannel}>! Dùng lệnh : Ygo **${tag}** sẽ dẫn đến kênh này!
\`Dùng lệnh Ygo list để xem các tag trong server!\``)
    }
    else if (job == 'delete' || job == 'xoa') {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bạn phải có quyền quản lý mới được xóa lệnh taxi trong server!`)
      let tag = args[1]
      if (!tag) return message.channel.send(`Thiếu tag channel ! 
Cú Pháp : \`Ytaxi delete(xoa) [tag]\`
VD : Ytaxi xoa mainchat`)
      const guild = await taxiSchema.findOne({ guildid: `${message.guild.id}_${tag}` })
      if (!guild) return message.channel.send(`Không có **${tag}** rồi! Hãy check lại list taxi bằng lệnh Ytaxi list!`)

      const list = await taxiSchema.findOne({ guildid: message.guild.id })
      if (list) {
        const string = list.tag
        list.tag = string.replace(`\`${args[1]}\` `, ``)
        await list.save()
      }
      await taxiSchema.deleteOne({ guildid: `${message.guild.id}_${tag}` })
      await message.channel.send(`Bạn đã xóa lối tắt **${tag}** Dùng lệnh : Ygo list để xem danh sách tag còn lại trong server!`)
    }
    else if (job == `list`) {
      const list = await taxiSchema.findOne({ guildid: message.guild.id })
      let listed = []
      if (list) listed = list.tag
      await message.channel.send(`Danh sách các tag dùng được trong server : ${listed}`)
    }
    else {
      const tag = args[0]
      const place = await taxiSchema.findOne({ guildid: `${message.guild.id}_${tag}` })
      if (!place) return message.channel.send(`Không tìm thấy lối tắt **${tag}**, hãy tạo bằng lệnh : Ytaxi new [channel ID] [tag]`)
      const id = place.channelid
      await message.channel.send(`🚕 | Mời bạn đến <#${id}> ${emoji}`)
      await message.channel.send(`\`VOTE CHO BOT ĐỂ NHẬN HỘP NGỌC | GÕ YVOTE\``)
    }
  }
}
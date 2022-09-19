const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js')
module.exports = {
  name: 'batdau',
  cooldown: 0,
  description: "Tạo nhân vật và bắt đầu cuộc hành trình của bạn! Nhân Vật bao gồm các chỉ số : Sức Mạnh, Nhanh Nhẹn, Trí Lực, Ma Lực, Hấp Dẫn và Thể Lực",
  aliases: ['create'],
  usage: "Ynhanvat",
  run: async (client, message, args) => {
    // return message.channel.send(`TÍNH NĂNG TẠM ĐÓNG
    //\`VOTE CHO BOT ĐỂ NHẬN HỘP NGỌC | GÕ YVOTE\``)
    const author = message.author.id
    const username = message.author.username
    const nv = await client.nv(author)
    if (!nv && !args[0]) {
      const newbie = await client.batdaunv(author, username)
      let msg = await message.channel.send(`${client.emo.load} | **${username}**, đợi chút nhé, đang khởi tạo dữ liệu nhân vật! \`20%\``)
      await client.sleep(1000)
      await msg.edit(`${client.emo.load} | **${username}**, đợi chút nhé, đang khởi tạo dữ liệu nhân vật! \`43%\``)
      await client.sleep(1000)
      await msg.edit(`${client.emo.load} | **${username}**, đợi chút nhé, đang khởi tạo dữ liệu nhân vật! \`71%\``)
      await client.sleep(1000)
      await msg.edit(`${client.emo.load} | **${username}**, đợi chút nhé, đang khởi tạo dữ liệu nhân vật! \`92%\``)
      await client.sleep(1000)
      return msg.edit(`${client.emo.load} | **${username}**, đã hoàn thành khởi tạo dữ liệu nhân vật, gõ Ynhanvat để xem lại nhân vật của bạn!`)
    }
    else {
      const nhanvatembed = new MessageEmbed()
        .setTitle(`Hồ Sơ Của **${nv.name}**`)
        .setURL('https://discord.gg/yuland')
        .setAuthor({ name: nv.name, iconURL: message.author.avatarURL(), url: 'https://discord.gg/yuland' })
        .setDescription(`${client.bat.hp}**HP** : **__${parseInt(nv.hp).toLocaleString('En-Us')}__** | ${client.bat.mana}**MANA** : **__${parseInt(nv.mana).toLocaleString('En-Us')}__**
${client.bat.def}**PHÒNG THỦ** : **__${parseInt(nv.def).toLocaleString('En-Us')}__** | ${client.bat.magicdef}**PHÁP PHÒNG** : **__${parseInt(nv.magicdef).toLocaleString('En-Us')}__**`)
        .setThumbnail('https://cdn.discordapp.com/avatars/936872532932440065/59b3e7c9da97700f3e629fe73714f1b2.webp?size=1024')
        .addFields(
          { name: `${client.bat.sucmanh}Sức Mạnh`, value: `**__${nv.sucmanh}__**`, inline: true },
          { name: `${client.bat.nhanhnhen}Nhanh Nhẹn`, value: `**__${nv.nhanhnhen}__**`, inline: true },
          { name: `${client.bat.triluc}Trí Lực`, value: `**__${nv.triluc}__**`, inline: true },
          { name: `${client.bat.maluc}Ma Lực`, value: `**__${nv.maluc}__**`, inline: true },
          { name: `${client.bat.theluc}Thể Lực`, value: `**__${nv.theluc}__**`, inline: true },
          { name: `${client.bat.hapdan}Hấp Dẫn`, value: `**__${nv.hapdan}__**`, inline: true },
        )
        .setTimestamp()
        .setFooter({ text: 'Hệ Thống Đang Được Xây Dựng', iconURL: 'https://cdn.discordapp.com/emojis/902835678361047070.gif' });
      await message.channel.send({ content: `<@${author}>`, embeds: [nhanvatembed] })
    }
  }
}
// memberid : String,
//   name: String,
//   hp : Number,
//   mana: Number,
//   def: Number,
//   magicdef : Number,
//   sucmanh: Number,
//   nhanhnhen : Number,
//   triluc : Number,
//   maluc: Number,
//   hapdan : Number,
//   theluc : Number,
//   exp : Number,
//   level : Number,
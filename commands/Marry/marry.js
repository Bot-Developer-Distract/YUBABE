const { MessageEmbed,MessageActionRow, MessageButton } = require("discord.js");
const marrySchema = require('../../models/marrySchema')
const userReg = RegExp(/<@!?(\d+)>/)
const invSchema = require('../../models/invSchema')
const anhcuoiSchema = require(`../../models/anhcuoi`)
module.exports = {
  name: 'marry',
  cooldown : 0,
  description: "Bên nhau trọn đời...",
  aliases: ['cuoianhnha', 'cuoiemnha'],
  usage: "[prefix]marry | cuoianhnha | cuoiemnha",
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    const data = await marrySchema.findOne({ authorid: message.author.id })
    const husband = message.author
    let wifeid = ``
    if(data) wifeid = data.wifeid
    let wife = userReg.test(args[0]) ? userReg.exec(args[0])[1] : [0]
    const lovedata = await marrySchema.findOne({ authorid: wife })
    const hinhcuoi = await anhcuoiSchema.findOne({ authorid: message.author.id })

    if (!args[0]) {
      if (!data) {
        return message.channel.send(`**${husband.username}** Đồ F.A... người ta có đôi còn ai kia ăn cơm chó`)
      }
      else {
        let hinhcuoia = `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e7781e25-3bf5-4185-aad7-ec93d0b5e1b0/d7fa2wq-cf60174b-9a41-44de-bb2f-605cde85dad5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U3NzgxZTI1LTNiZjUtNDE4NS1hYWQ3LWVjOTNkMGI1ZTFiMFwvZDdmYTJ3cS1jZjYwMTc0Yi05YTQxLTQ0ZGUtYmIyZi02MDVjZGU4NWRhZDUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vX_oTdMeJ4D5xWpqNQV4NOjiJW4ahpQWZ4Fyp4xX8x8`
        if (hinhcuoi) hinhcuoia = hinhcuoi.anhcuoi
        let dacodoi = data.wifeid
        let bennhau = data.together || 0
        let nhan = data.nhan
        if (nhan == `<:Yu_nhanvang:941435163181727824>`) nhan = `https://cdn.discordapp.com/emojis/941435163181727824.webp?size=128&quality=lossless`
        if (nhan == `<:Yu_nhanbac:941435162728730675>`) nhan = `https://cdn.discordapp.com/emojis/941435162728730675.webp?size=128&quality=lossless`
        if (nhan == `<:Yu_nhanco:951133679546159214>`) nhan = `https://cdn.discordapp.com/emojis/951133679546159214.webp?size=128&quality=lossless`
        if (nhan == `<:Yu_nhankimcuong:941435160883265556>`) nhan = `https://cdn.discordapp.com/emojis/941435160883265556.webp?size=128&quality=lossless`
        if (nhan == `<:Yu_nhanvangkc:951586992897024060>`) nhan = `https://cdn.discordapp.com/emojis/951586992897024060.png`
        let loihuacuack = data.loihua
        let vkid = data.wifeid
        const vkdata = await marrySchema.findOne({ authorid: vkid })
        const wifefind = await client.yuker(vkid)
        const wifename = wifefind.name
        let loihuacuavk = vkdata.loihua
        const love = new MessageEmbed()
          .setTitle(`💖 𝓢𝓸 𝓢𝔀𝓮𝓮𝓽 💖`)
          .setThumbnail(`${nhan}`)
          .setDescription(`**__${husband.username}__** <a:Yu_timnhaynhot:950735238177366076> **__${wifename}__**
<a:ctim2:912046879662030969> **Đ**𝒊𝒆̂̉𝒎 𝒕𝒉𝒂̂𝒏 𝒎𝒂̣̂𝒕 : **${bennhau}** điểm`)
          .addField(`𝑴𝒊𝒏𝒉 𝒄𝒉𝒖̛́𝒏𝒈 𝒄𝒉𝒐 𝒍𝒐̛̀𝒊 𝒏𝒐́𝒊:`,
            `<a:FW_bluetick:911688322638807050> **${loihuacuack}**
<a:GTI_tick:911420037678649354> **${loihuacuavk}**`)
          .setFooter({ text:`💖 Chúc hai bạn hạnh phúc dài lâu! 💖`, iconURL: message.author.displayAvatarURL() })
          .setColor(`#FFCCCC`)
          .setImage(hinhcuoia)
        .setTimestamp()

        await message.channel.send({content : `Hạnh Phúc Có Đôi, Bên Nhau Mãi Mãi...`, embeds : [love]})
      }
    } else if (args[0].includes(message.author.id)) {
      return message.channel.send(`Sao lại tự cưới mình chứ hả??`)
    }
    else {
      const author = message.author.id
      const data = await marrySchema.findOne({ authorid: message.author.id })
      const wife = userReg.test(args[0]) ? userReg.exec(args[0])[1] : [0]
      const lovedata = await marrySchema.findOne({ authorid: wife })
      const nhan = args[1]
      if (!nhan) {
        return message.channel.send(`Bạn chọn nhẫn nào để cưới ?`)
      }
      else if (nhan == '002') {
      const NhanBac = await invSchema.findOne({ memberid: `${message.author.id}`, name : `<:Yu_nhanbac:941435162728730675>` })
          if (!NhanBac) {
            return message.channel.send(`Có nhẫn bạc đâu mà xin cưới ?`)
          }
      if (data || lovedata) {
          if (wife !== data.wifeid) {
            return message.channel.send(`Bạn đã có nửa kia rồi! Đừng tham lam thế chứ!`)
          } else if (lovedata.wifeid !== message.author.id) {
            return message.channel.send(`Đối phương đã có nửa kia rồi! Đừng làm trà xanh chứ!`)
          } else if (wife == data.wifeid) {
            data.nhan = "<:Yu_nhanbac:941435162728730675>"
            await data.save()
            lovedata.nhan = "<:Yu_nhanbac:941435162728730675>"
            await lovedata.save()
            return message.channel.send(`Chúc mừng hai bạn đã UP nhẫn lên : <:Yu_nhanbac:941435162728730675>`)
          }
        }
      const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
                .setCustomId('yes')
                .setLabel('Yes, I Do')
                .setStyle('SUCCESS')
                .setEmoji('911417844045082684')
        )
        .addComponents(
        new MessageButton()
                .setCustomId('no')
                .setLabel('0, Gì z chời?')
                .setStyle('DANGER')
                .setEmoji('❌')
			)
        let kethonmessage = await message.channel.send({ content: `<@!${wife}>, <@!${husband.id}> đã ngỏ ý muốn cưới bạn... Bạn có 30s để trả lời họ!`, components: [row] });
        const filter = i => i.customId === 'yes' && i.user.id === wife || i.customId === 'no' && i.user.id === wife
        const collector =  await message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async i => {
	if (i.customId === 'yes') {
    await invSchema.deleteOne({ memberid: `${message.author.id}`, name:`<:Yu_nhanbac:941435162728730675>`})
          let loihuacuack = `Yêu nhau suốt kiếp`
          let loihuacuavk = `Đầu bạc răng long`
          let addWife = new marrySchema({ authorid: husband.id, wifeid: wife, husbandid: wife, nhan: `<:Yu_nhanbac:941435162728730675>`, together: 1, loihua: loihuacuack })
          await addWife.save();
          let addHusband = new marrySchema({ authorid: wife, wifeid: husband.id, husbandid: husband.id, loihua: loihuacuavk, nhan: `<:Yu_nhanbac:941435162728730675>`, together: +1 })
          await addHusband.save();
          await i.update({ content: `<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>**Chúc mừng hai bạn đã thuộc về nhau**<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>`});
  }
  else if (i.customId === 'no') {
    return i.update(`Lêu lêu **${message.author.username}** tỏ tình bị người ta từ chối!`)
  }
    });
collector.on('end', async i => {
  console.log(`${message.author.id} cầu hôn ${wife}`)
})
      }
      else if (nhan == '003') {
      const NhanBac = await invSchema.findOne({ memberid: `${message.author.id}`, name : `<:Yu_nhanvang:941435163181727824>` })
          if (!NhanBac) {
            return message.channel.send(`Có nhẫn vàng đâu mà xin cưới ?`)
          }
      if (data || lovedata) {
          if (wife !== data.wifeid) {
            return message.channel.send(`Bạn đã có nửa kia rồi! Đừng tham lam thế chứ!`)
          } else if (lovedata.wifeid !== message.author.id) {
            return message.channel.send(`Đối phương đã có nửa kia rồi! Đừng làm trà xanh chứ!`)
          } else if (wife == data.wifeid) {
            data.nhan = "<:Yu_nhanvang:941435163181727824>"
            await data.save()
            lovedata.nhan = "<:Yu_nhanvang:941435163181727824>"
            await lovedata.save()
            return message.channel.send(`Chúc mừng hai bạn đã UP nhẫn lên : <:Yu_nhanvang:941435163181727824>`)
          }
        }
      const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
                .setCustomId('yes')
                .setLabel('Yes, I Do')
                .setStyle('SUCCESS')
                .setEmoji('911417844045082684')
        )
        .addComponents(
        new MessageButton()
                .setCustomId('no')
                .setLabel('0, Gì z chời?')
                .setStyle('DANGER')
                .setEmoji('❌')
			)
        let kethonmessage = await message.channel.send({ content: `<@!${wife}>, <@!${husband.id}> đã ngỏ ý muốn cưới bạn... Bạn có 30s để trả lời họ!`, components: [row] });
        const filter = i => i.customId === 'yes' && i.user.id === wife || i.customId === 'no' && i.user.id === wife
        const collector =  await message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async i => {
	if (i.customId === 'yes') {
    await invSchema.deleteOne({ memberid: `${message.author.id}`, name:`<:Yu_nhanvang:941435163181727824>`})
          let loihuacuack = `Yêu nhau suốt kiếp`
          let loihuacuavk = `Đầu bạc răng long`
          let addWife = new marrySchema({ authorid: husband.id, wifeid: wife, husbandid: wife, nhan: `<:Yu_nhanvang:941435163181727824>`, together: 1, loihua: loihuacuack })
          await addWife.save();
          let addHusband = new marrySchema({ authorid: wife, wifeid: husband.id, husbandid: husband.id, loihua: loihuacuavk, nhan: `<:Yu_nhanvang:941435163181727824>`, together: +1 })
          await addHusband.save();
          await i.update({ content: `<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>**Chúc mừng hai bạn đã thuộc về nhau**<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>`});
  }
  else if (i.customId === 'no') {
    return i.update(`Lêu lêu **${message.author.username}** tỏ tình bị người ta từ chối!`)
  }
    });
collector.on('end', async i => {
  console.log(`${message.author.id} cầu hôn ${wife}`)
})
      }
      else if (nhan == '001') {
      const NhanBac = await invSchema.findOne({ memberid: `${message.author.id}`, name : `<:Yu_nhanco:951133679546159214>` })
          if (!NhanBac) {
            return message.channel.send(`Có nhẫn cỏ đâu mà xin cưới ?`)
          }
      if (data || lovedata) {
          if (wife !== data.wifeid) {
            return message.channel.send(`Bạn đã có nửa kia rồi! Đừng tham lam thế chứ!`)
          } else if (lovedata.wifeid !== message.author.id) {
            return message.channel.send(`Đối phương đã có nửa kia rồi! Đừng làm trà xanh chứ!`)
          } else if (wife == data.wifeid) {
            data.nhan = "<:Yu_nhanco:951133679546159214>"
            await data.save()
            lovedata.nhan = "<:Yu_nhanco:951133679546159214>"
            await lovedata.save()
            return message.channel.send(`Vàng bạc không bằng tấm chân tình, hai bạn yêu nhau với lời hứa vàng son từ nhẫn cỏ : <:Yu_nhanco:951133679546159214>`)
          }
        }
      const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
                .setCustomId('yes')
                .setLabel('Yes, I Do')
                .setStyle('SUCCESS')
                .setEmoji('911417844045082684')
        )
        .addComponents(
        new MessageButton()
                .setCustomId('no')
                .setLabel('0, Gì z chời?')
                .setStyle('DANGER')
                .setEmoji('❌')
			)
        let kethonmessage = await message.channel.send({ content: `<@!${wife}>, <@!${husband.id}> đã ngỏ ý muốn cưới bạn... Bạn có 30s để trả lời họ!`, components: [row] });
        const filter = i => i.customId === 'yes' && i.user.id === wife || i.customId === 'no' && i.user.id === wife
        const collector =  await message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async i => {
	if (i.customId === 'yes') {
    await invSchema.deleteOne({ memberid: `${message.author.id}`, name:`<:Yu_nhanco:951133679546159214>`})
          let loihuacuack = `Yêu nhau suốt kiếp`
          let loihuacuavk = `Đầu bạc răng long`
          let addWife = new marrySchema({ authorid: husband.id, wifeid: wife, husbandid: wife, nhan: `<:Yu_nhanco:951133679546159214>`, together: 1, loihua: loihuacuack })
          await addWife.save();
          let addHusband = new marrySchema({ authorid: wife, wifeid: husband.id, husbandid: husband.id, loihua: loihuacuavk, nhan: `<:Yu_nhanco:951133679546159214>`, together: +1 })
          await addHusband.save();
          await i.update({ content: `<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>**Chúc mừng hai bạn đã thuộc về nhau**<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>`});
  }
  else if (i.customId === 'no') {
    return i.update(`Lêu lêu **${message.author.username}** tỏ tình bị người ta từ chối!`)
  }
    });
collector.on('end', async i => {
  console.log(`${message.author.id} cầu hôn ${wife}`)
})
      }
      else if (nhan == '004') {
      const NhanBac = await invSchema.findOne({ memberid: `${message.author.id}`, name : `<:Yu_nhankimcuong:941435160883265556>` })
          if (!NhanBac) {
            return message.channel.send(`Có nhẫn kim cương đâu mà xin cưới ?`)
          }
      if (data || lovedata) {
          if (wife !== data.wifeid) {
            return message.channel.send(`Bạn đã có nửa kia rồi! Đừng tham lam thế chứ!`)
          } else if (lovedata.wifeid !== message.author.id) {
            return message.channel.send(`Đối phương đã có nửa kia rồi! Đừng làm trà xanh chứ!`)
          } else if (wife == data.wifeid) {
            data.nhan = "<:Yu_nhankimcuong:941435160883265556>"
            await data.save()
            lovedata.nhan = "<:Yu_nhankimcuong:941435160883265556>"
            await lovedata.save()
            return message.channel.send(`Chúc mừng hai bạn đã UP nhẫn lên : <:Yu_nhankimcuong:941435160883265556>`)
          }
        }
      const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
                .setCustomId('yes')
                .setLabel('Yes, I Do')
                .setStyle('SUCCESS')
                .setEmoji('911417844045082684')
        )
        .addComponents(
        new MessageButton()
                .setCustomId('no')
                .setLabel('0, Gì z chời?')
                .setStyle('DANGER')
                .setEmoji('❌')
			)
        let kethonmessage = await message.channel.send({ content: `<@!${wife}>, <@!${husband.id}> đã ngỏ ý muốn cưới bạn... Bạn có 30s để trả lời họ!`, components: [row] });
        const filter = i => i.customId === 'yes' && i.user.id === wife || i.customId === 'no' && i.user.id === wife
        const collector =  await message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async i => {
	if (i.customId === 'yes') {
    await invSchema.deleteOne({ memberid: `${message.author.id}`, name:`<:Yu_nhankimcuong:941435160883265556>`})
          let loihuacuack = `Yêu nhau suốt kiếp`
          let loihuacuavk = `Đầu bạc răng long`
          let addWife = new marrySchema({ authorid: husband.id, wifeid: wife, husbandid: wife, nhan: `<:Yu_nhankimcuong:941435160883265556>`, together: 1, loihua: loihuacuack })
          await addWife.save();
          let addHusband = new marrySchema({ authorid: wife, wifeid: husband.id, husbandid: husband.id, loihua: loihuacuavk, nhan: `<:Yu_nhankimcuong:941435160883265556>`, together: +1 })
          await addHusband.save();
          await i.update({ content: `<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>**Chúc mừng hai bạn đã thuộc về nhau**<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>`});
  }
  else if (i.customId === 'no') {
    return i.update(`Lêu lêu **${message.author.username}** tỏ tình bị người ta từ chối!`)
  }
    });
collector.on('end', async i => {
  console.log(`${message.author.id} cầu hôn ${wife}`)
})
      }
      else if (nhan == '005') {
      const NhanBac = await invSchema.findOne({ memberid: `${message.author.id}`, name : `<:Yu_nhanvangkc:951586992897024060>` })
          if (!NhanBac) {
            return message.channel.send(`Có nhẫn đôi kim cương đâu mà xin cưới ?`)
          }
      if (data || lovedata) {
          if (wife !== data.wifeid) {
            return message.channel.send(`Bạn đã có nửa kia rồi! Đừng tham lam thế chứ!`)
          } else if (lovedata.wifeid !== message.author.id) {
            return message.channel.send(`Đối phương đã có nửa kia rồi! Đừng làm trà xanh chứ!`)
          } else if (wife == data.wifeid) {
            data.nhan = "<:Yu_nhanvangkc:951586992897024060>"
            await data.save()
            lovedata.nhan = "<:Yu_nhanvangkc:951586992897024060>"
            await lovedata.save()
            return message.channel.send(`Chúc mừng hai bạn đã UP nhẫn lên : <:Yu_nhanvangkc:951586992897024060>`)
          }
        }
      const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
                .setCustomId('yes')
                .setLabel('Yes, I Do')
                .setStyle('SUCCESS')
                .setEmoji('911417844045082684')
        )
        .addComponents(
        new MessageButton()
                .setCustomId('no')
                .setLabel('0, Gì z chời?')
                .setStyle('DANGER')
                .setEmoji('❌')
			)
        let kethonmessage = await message.channel.send({ content: `<@!${wife}>, <@!${husband.id}> đã ngỏ ý muốn cưới bạn... Bạn có 30s để trả lời họ!`, components: [row] });
        const filter = i => i.customId === 'yes' && i.user.id === wife || i.customId === 'no' && i.user.id === wife
        const collector =  await message.channel.createMessageComponentCollector({ filter, time: 30000 });
collector.on('collect', async i => {
	if (i.customId === 'yes') {
    await invSchema.deleteOne({ memberid: `${message.author.id}`, name:`<:Yu_nhanvangkc:951586992897024060>`})
          let loihuacuack = `Yêu nhau suốt kiếp`
          let loihuacuavk = `Đầu bạc răng long`
          let addWife = new marrySchema({ authorid: husband.id, wifeid: wife, husbandid: wife, nhan: `<:Yu_nhanvangkc:951586992897024060>`, together: 1, loihua: loihuacuack })
          await addWife.save();
          let addHusband = new marrySchema({ authorid: wife, wifeid: husband.id, husbandid: husband.id, loihua: loihuacuavk, nhan: `<:Yu_nhanvangkc:951586992897024060>`, together: +1 })
          await addHusband.save();
          await i.update({ content: `<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>**Chúc mừng hai bạn đã thuộc về nhau**<a:ctim2:912046879662030969><a:ctim2:912046879662030969><a:ctim2:912046879662030969>`});
  }
  else if (i.customId === 'no') {
    return i.update(`Lêu lêu **${message.author.username}** tỏ tình bị người ta từ chối!`)
  }
    });
collector.on('end', async i => {
  console.log(`${message.author.id} cầu hôn ${wife}`)
})
      }
    }
  }
}
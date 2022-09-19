const { MessageEmbed } = require("discord.js");
const userReg = RegExp(/<@!?(\d+)>/)
const marrySchema = require('../../models/marrySchema');
module.exports = {
  name: 'yeuem',
  cooldown : 300000,
  description: "Tình cảm nồng đậm...",
  aliases: ['yeuanh', 'iuem', 'iuanh', 'loveyou', 'iuxop'],
  usage: "[prefix]marry | cuoianhnha | cuoiemnha",
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
      const husband = message.author
      const data = await marrySchema.findOne({ authorid: message.author.id })
      if (!data) return message.channel.send(`Yêu thì cưới đi chời! Nói suông...`)
      const vkid = data.wifeid
      const lovedata = await marrySchema.findOne({ authorid: vkid })
      const thanmatck = data.together || 0
      data.together += 1
      await data.save()
      if (lovedata) lovedata.together = thanmatck + 1
      await lovedata.save()
    if (message.author.id === "715020568017109122") { 
      await message.channel.send(`>>> **Òi oi, <@${husband.id}> đã thơm má <@${vkid}> được __${thanmatck + 1}__ lần gòi kìa !**`)
    }
    else if (message.author.id === "696893548863422494") {
      await message.channel.send(`u là trời, <@${husband.id}> đã vừa đấm vừa xoa <@${vkid}> được **__${thanmatck + 1}__** lần rồi kìa !`)
    }
     else if (message.author.id === "620860299356143657") { 
      await message.channel.send(`>>> **Òi oi, <@${husband.id}> đã thơm má <@${vkid}> được __${thanmatck + 1}__ lần gòi kìa !**`)
    }
    else { 
      await message.channel.send(`Dữ vậy chời... <@${husband.id}> đã nói lời yêu với <@${vkid}>! Hai bạn được **${thanmatck + 1}** điểm thân mật~ <a:ctim2:912046879662030969> `)
    }
    }
}
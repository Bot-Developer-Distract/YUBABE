const random = require("random-number-csprng");
const { MessageEmbed } = require('discord.js')
const check_game = new Set();
const hitemoji = "👊";
const stopemoji = "🛑"
const TwoSum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const {QuickDB} = require('quick.db')
const db=new QuickDB()
  module.exports = {
  name: "nhiemvu",
  category: "🎯 Fun",
  aliases: ["mission", "m", "nv"],
  cooldown: 0,
  usage: "<PREFIX>rd <number>",
  description: "Làm nhiệm vụ nhận quà mỗi ngày",
  run: async (client, message, args) => {
const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    let today = await client.cd(`${message.author.id}missionhuntthu`)
    let inday = await client.newday(today)
    if(!inday.after) {
      let huntthu = await db.get(`${message.author.id}.nvhuntthu`)
      let mission = new MessageEmbed()
      .setAuthor({name : message.author.username})
      .setTitle('Nhiệm Vụ Hàng Ngày')
      .setDescription(`${huntthu == 3 ? `■` : `□` } 1. Hunt thú 3 lần (${huntthu}/3)
`)

await message.reply({embeds : [mission]})
    }
else {
let huntthu = await db.get(`${message.author.id}.nvhuntthu`)
      let mission = new MessageEmbed()
      .setAuthor({name : message.author.username})
      .setTitle('Nhiệm Vụ Hàng Ngày')
      .setDescription(`${huntthu == 3 ? '■' : '□' } 1. Hunt thú 3 lần (${huntthu}/3)
`)

await message.reply({embeds : [mission]})

}


}
};


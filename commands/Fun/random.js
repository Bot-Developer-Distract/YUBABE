const random = require("random-number-csprng");
const { MessageEmbed } = require('discord.js')
const check_game = new Set();
const hitemoji = "👊";
const stopemoji = "🛑"
const TwoSum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

module.exports = {
  name: "random",
  category: "🎯 Minigames",
  aliases: ["rd"],
  cooldown: 0,
  usage: "<PREFIX>rd <number>",
  description: "Random số, cá cược vui vẻ cùng bạn bè",
  run: async (client, message, args) => {
const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    if(!parseInt(args[0])) return message.reply("Số không hợp lệ")
let number = Math.floor(Math.random()*parseInt(args[0]))
await message.reply(`Số của bạn là : **__${number}__**`)

}
};


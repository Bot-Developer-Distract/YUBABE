module.exports = {
  name: "vote",
  description: "PONG",
  aliases: ["topgg"],
  cooldown : 10000,
  run: async (client, message, args) => {
    const website = `https://top.gg/bot/936872532932440065` 
    const mss = await message.channel.send(`**${message.author.username}**, hãy Vote cho tôi tại [${website}] để nhận 3 hộp ngọc`)
  }
}
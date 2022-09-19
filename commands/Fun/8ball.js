const answers = require('../../config/8ball.json')
module.exports = {
  name: '8ball',
  cooldown : 0,
  description: "Trả lời một câu hỏi yes/n",
  usage: "[prefix]8ball <question>",
  aliases: ["cothay", "chohoi"],
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    const question = args.join(" ")

    if (!question) {
      return message.channel.send(`Xin hãy đưa ra một câu hỏi!`)
    }
    const answer = answers[Math.floor(Math.random() * answers.length)];

    message.channel.send(`Nếu mà **${message.author.username}** hỏi **${question}** thì **${answer}**`);

  }
}
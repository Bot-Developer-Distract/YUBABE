const BanSchema = require('../../models/BanSchema')
const { QuickDB } = require('quick.db');
const db = new QuickDB();
module.exports = {
  name: 'balance',
  cooldown: 5000,
  description: "Xem tài khoản của bạn và đua top cùng mọi người!",
  usage: "Ybalance",
  aliases: ['bal', 'cash', 'coin', 'money'],
  run: async (client, message, args) => {
    if (message.author.id == `896739787392819240`) {
      const member = message.mentions.members.first()
        || message.guild.members.cache.get(args[0]) || message.author
      if (!args[0] || member.id == `896739787392819240`) {
        const cash = await client.cash(message.author.id);
      await db.set(`${message.author.id}_money`, cash)
        await message.channel.send(`<:Yu_Ycoin:953323682246316082> **|** **${message.author.username}** , bạn đang có **${cash.toLocaleString('En-us')} Ycoin**`).catch((e) => console.log(e)) 
      } else {
        const cash = await client.cash(member.id);
        await db.set(`${message.author.id}_money`, cash)
        await message.channel.send(`<:Yu_Ycoin:953323682246316082> **|** **${message.author.username}** , **${member.user.username}** đang có **${cash.toLocaleString('En-us')} Ycoin**`).catch((e) => console.log(e)) ;
      }
    } 
    else {
      let member = message.author;
      const cash = await client.cash(member.id);
      await db.set(`${message.author.id}_money`, cash)
      await message.channel.send(`<:Yu_Ycoin:953323682246316082> **|** **${message.author.username}** , bạn đang có **${cash.toLocaleString('En-us')} Ycoin**`).catch((e) => console.log(e)) 

    }
  }
}
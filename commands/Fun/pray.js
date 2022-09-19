const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
  name: 'pray',
  cooldown: 300000,
  description: "Cày điểm may mắn",
  usage: "Ydotnhang",
  aliases: ['dotnhang', 'dichua', 'ditu', 'samhoi', 'caunguyen'],
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    const member = message.author;
    const user = message.mentions.users.first();
    if (!user) {
      await client.pray(member.id);
      const prayed = await client.prayed(member.id);
      const prays = new MessageEmbed()
        .setTitle(`<a:ysao:944752515260502046> | ${message.author.username} đã cầu nguyện`)
        .setColor(0xfae4ff)
        .setThumbnail(`https://i.gifer.com/7Or5.gif`)
        .setDescription(`\`Bạn đã thắp được:\`
<a:Yngoisaohivong:919968345418268714> **__${prayed + 1}__**<a:Yngoisaohivong:919968345418268714> **ngọn nến may mắn!**`)
        .setFooter({ text: `Cầu nguyện để nhận sự may mắn!🍀`, iconURL: 'https://cdn.discordapp.com/emojis/983135001300307968.png' })
      message.channel.send({ content: `<@${message.author.id}>`, embeds: [prays] });
    }
    else {
      await client.pray(user.id);
      await client.curse(member.id)
      const prayed = await client.prayed(user.id)
      const cursed = await client.prayed(member.id);
      const prays = new MessageEmbed()
        .setTitle(`<a:ysao:944752515260502046> | ${message.author.username} đã cầu nguyện cho ${user.username}`)
        .setColor(0xfae4ff)
        .setThumbnail(`https://i.gifer.com/7Or5.gif`)
        .addField(`<a:Yngoisaohivong:919968345418268714> | ${user.username}, bạn đã có được ${prayed + 1} điểm may mắn `, `<a:Yngoisaohivong:919968345418268714> | ${message.author.username}, bạn còn ${cursed - 1} điểm may mắn`, true)
        .setFooter({ text: `Cầu nguyện để nhận sự may mắn!🍀`, iconURL: 'https://cdn.discordapp.com/emojis/983135001300307968.png' })
      message.channel.send({ content: `<@${message.author.id}>`, embeds: [prays] });
    }


  }
}
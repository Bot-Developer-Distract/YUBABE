const { Collection, Permissions } = require('discord.js')
const client = require('../handlers/commands')
const BanSchema = require('../models/BanSchema')
const { QuickDB } = require('quick.db')
const db = new QuickDB()
module.exports = {
  name: 'messageCreate',
  async execute(message) {
    if (message.channel.type == 'DM' && !message.author.bot) {
      const guilds = client.guilds.cache.find(c => c.id === '896744428100804688');
      const ChRules = guilds.channels.cache.find(c => c.id === '983473330122268744')
      let a = await ChRules.send(`Tin nhắn được gửi bởi **${message.author.username}**, với nội dung:\n \`\`\`` +
        message.content + `\n\`\`\``)
      await a.reply(`${message.author.id}`)
    }
    else {
      let prefix = await db.get(`${message.guildId}_prefix`)
      let defaultprefix = process.env.prefix
      if (!prefix) prefix = defaultprefix
      if (!message.content.toLowerCase(defaultprefix).startsWith(defaultprefix) && !message.content.toLowerCase(prefix).startsWith(prefix) || message.author.bot) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const args2 = message.content.slice(defaultprefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase()
      const cmd2 = args2.shift().toLowerCase()
      if (cmd.length === 0 || cmd2.length === 0) return;
      let command =
        client.commands.get(cmd) || client.commands.get(cmd2) ||
        client.commands.find((command) => command.aliases && command.aliases.includes(cmd)) || client.commands.find((command) => command.aliases && command.aliases.includes(cmd2));
      if (command) {
        //if (message.author.id !== `896739787392819240`) return
        const ban = await BanSchema.findOne({ memberid: message.author.id })
        if (ban) {
          if (ban.memberid == message.author.id) return
        }
        else {
          let spam = await db.get(`${message.author.id}.${command.name}.spam1`)
          if (Date.now() - spam < 500) {
            await db.add(`${message.author.id}.warn1`, 1)
            return message.reply(`Bạn đang cố gắng sử dụng bot quá nhanh! Nếu còn tiếp tục, bạn sẽ bị Ban bot!`)
          }
          else {
            await db.set(`${message.author.id}.${command.name}.spam1`, Date.now())
            let warns = await db.get(`${message.author.id}.warn1`)
            if (warns >= 3 && message.author.id !== "896739787392819240") {
              const guilds = client.guilds.cache.find(c => c.id === '995424086916350052');
              const ChRules = guilds.channels.cache.find(c => c.id === '995878743706968125')
              ChRules.send(`<@896739787392819240>
 **__MEMBER CỐ GẮNG SPAM__**
ID : ${message.author.id}
USERNAME : ${message.author.username}
ĐÃ BỊ SOFT BAN, HÃY BAN NGƯỜI NÀY`)
              return message.reply(`Bạn đã bị cấm sử dụng bot vì spam 1 lệnh nhiều lần (3 lần cảnh báo)!`).catch(e => console.log(e))
            }
            else {
              if (!message.guild.me.permissions.has(Permissions.FLAGS.EMBED_LINKS)) return message.reply(`Tôi chưa có quyền gửi Embed Link!`)
              if (!message.guild.me.permissions.has(Permissions.FLAGS.USE_EXTERNAL_EMOJIS)) return message.reply(`Tôi chưa có quyền gửi emoji bên ngoài server!`)
              // if (message.author.id !== `896739787392819240`) return message.channel.send(`Bot Đang Sửa Chữa Cho Content Mới, bạn chờ chút nhé !`)

              let timeout = command.cooldown
              let lastused = await db.get(`CD${command.name}_${message.author.id}`)
              let used = client.checkcd(lastused, timeout)
              let canUse = used.after
              if (!canUse) {
                if (!command.error) {
                  const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, từ từ nào, hãy chờ : \`${used.h + `:` + used.m + `:` + used.s}s\` để sử dụng lệnh tiếp`).catch((e) => console.log(e))
                  await client.sleep(timeout - (Date.now() - lastused))
                  await delay.delete()
                } else {
                  const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, ${command.error}, xin hãy chờ : \`${used.h + `:` + used.m + `:` + used.s}s\` để sử dụng lệnh ${command.name}!`).catch((e) => console.log(e))
                  await client.sleep(timeout - (Date.now() - lastused))
                  await delay.delete()
                }
              }
              else {
                if (!command) return
                let a = await db.get(`${message.channel.id}_${command.name}`)
                if (a == `false`) return message.reply(`:x: | Lệnh đã bị vô hiệu hóa tại ${message.channel.name} ! `).then(async msg => {
                  await client.sleep(4000)
                  await msg.delete()
                })
                let runn = await command.run(client, message, args).catch((e) => console.log(e));
                await client.expchat(client, message.author.id, message)
                let text2 = `[${(message.author.tag).toUpperCase()} ĐÃ DÙNG LỆNH ${(command.name).toUpperCase()} TẠI ${(message.guild.name).toUpperCase()}]`
                console.log(text2.bold.brightGreen);
                const guilds = client.guilds.cache.find(c => c.id === '995424086916350052');
                const ChRules = guilds.channels.cache.find(c => c.id === '995449798054395904')
                ChRules.send(`**Người Dùng : ${message.author.tag}** \`[ID : ${message.author.id}]\`
Đã dùng lệnh : \`${command.name}\`
**Guild** : ${message.guild.name} \`[ID : ${message.guild.id}]\`
**Kênh** : ${message.channel.name} \`[ID : ${message.channel.id}]\`
**Thời Gian** : <t:${Math.floor(Date.now() / 1000)}>
<:Yu_line:940865641609576458><:Yu_line:940865641609576458><:Yu_line:940865641609576458><:Yu_line:940865641609576458><:Yu_line:940865641609576458><:Yu_line:940865641609576458><:Yu_line:940865641609576458>`);
                await db.set(`CD${command.name}_${message.author.id}`, Date.now())
              };
            }
          }
        }

      }
    }
  }
}
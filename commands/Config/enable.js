const ls = require('local-storage');
const { readdirSync } = require('fs');
const path = require('path');
const { Permissions } = require('discord.js')
const { QuickDB } = require('quick.db')
const db = new QuickDB()
module.exports = {
  name: "enable",
  cooldown: 0,
  description: "Kích hoạt lệnh, cho phép dùng trong kênh!",
  aliases: ["enablecommand", "en", "ec"],
  usage: `Yenable + <tên lệnh>`,
  run: async (client, message, args) => {
    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply(`${client.emo.fail} | Bạn phải có quyền \`ADMINISTRATOR\` để cài đặt lệnh trong guild này!`)
    const done = `<:vvv:921536318062862396>`
    let commandsa = []
    if (args[0] == `all`) {
      var cms;
      readdirSync("./commands/").forEach(async (dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter(async (file) => file.endsWith(".js"));
        for (let file of commands) {
          if (dir == `Config` || dir == `AdminsOnly`) continue;
          let pull = require(`../../commands/${dir}/${file}`);
          if (pull) await db.set(`${message.channel.id}_${pull.name}`, `true`), cms += pull.name
        }
      })
      await message.channel.send(`${client.emo.done} | Đã kích hoạt tất cả lệnh trong kênh!`)
      console.log(cms)
    }
    else {
      let commandsa = []
      for (var i = 0; i < args.length; i++) {
        if (args[i].length === 0) return;
        let command =
          client.commands.get(args[i]) ||
          client.commands.find((command) => command.aliases && command.aliases.includes(args[i]));
        if (!command) return message.channel.send(`:x: | Không tìm thấy ${args[i]}`);
        if (command) await db.set(`${message.channel.id}_${command.name}`, `true`)
        if (command) commandsa[i] = command.name
      }
      await message.channel.send(`${done} | Lệnh \`${commandsa}\` đã được **Kích Hoạt** trong kênh <#${message.channel.id}>!`)
    }

  }
}

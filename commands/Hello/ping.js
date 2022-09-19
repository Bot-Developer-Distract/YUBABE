module.exports = {
  name: "ping",
  description: "PONG",
  aliases: ["ping", "pong", "uptime"],
  cooldown : 10000,
  run: async (client, message, args) => {
    const dt = new Date(message.createdTimestamp);
    const mss = await message.channel.send(`🏓 Pong \`${new Date() - dt}ms\`| ws : \`${client.ws.ping}ms\` 
Server Support : https://discord.gg/yuland`)
     setTimeout(() => mss.delete(), 10000);
    await message.channel.send(`\`VOTE CHO BOT ĐỂ NHẬN HỘP NGỌC | GÕ YVOTE\``)
  }
}
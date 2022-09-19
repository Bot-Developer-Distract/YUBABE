const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
  Discord
} = require("discord.js");
module.exports = {
  name: "help",
  category: "Info",
  aliases: ["h", "commandinfo", "commands"],
  cooldown: 3,
  usage: "help [Command]",
  description: "Returns all Commmands, or one specific command",
  run: async (client, message, args, guildData, player, prefix) => {
    if (args[0]) {
      let embed = new MessageEmbed()
        .setColor('#ffcc00')
      if (args[0].length === 0) return;
      let command =
        client.commands.get(args[0]) ||
        client.commands.find((command) => command.aliases && command.aliases.includes(args[0]));
      if (!command) return message.channel.send(`:x: | Không tìm thấy commands này!`);
      if (command.name) embed.addField(`**Command name**`, `\`${command.name}\``);
      if (command.name) embed.setTitle(`Thông tin chi tiết | \`${command.name}\``);
      if (command.description) embed.addField("**Giới thiệu**", `\`${command.description}\``);
      if (command.aliases) try {
        embed.addField("**Aliases**", command.aliases.length > 0 ? command.aliases.map(a => "`" + a + "`").join("\n") : "Không Aliases")
      } catch { }
      if (command.usage) {
        embed.addField("**Cách dùng**", `\`${command.usage}\``);
        embed.setFooter({ text: "Syntax: <> = bắt buộc, [] = tùy chọn", iconURL: `` });
      }
      return message.channel.send({ embeds: [embed] });
    }


    let helpmenu = new MessageEmbed()
      .setTitle(`YUBABE COMMAND HELP`)
      .setDescription(`
**Xin chào ${message.author}, tôi là ${client.user}**.
**Bot Fun Economy Được Phát Triển Bởi Yuland Team**      
** <:vngc_discord:917212352410177536> Các lệnh help liên quan**

**<:G_bachtuoc:974392970931470347> \`:\` Animals**
**<a:load02:902835678361047070> \`:\` Config**
**<a:Yu_cassh:942212732642537502> \`:\` Economy**
**<:Yu_field:953050619558645820> \`:\` Farm**
**<:Ymoon:922599051269111909> \`:\` Fun**
**<:box:974069616093560852> \`:\` Inventory**
**<:Yu_shopping:953322964764487690> \`:\` Shop**
**<:Yu_nhanvangkc:951586992897024060> \`:\` Marry**

[Invite](${`https://discord.com/api/oauth2/authorize?client_id=936872532932440065&permissions=431174843457&scope=bot`}) ● [Support Server](${`http://discord.gg/yuland`}) 
 `)

      .setFooter({ text: `Prefix của bot là Y`, iconURL: `https://media.discordapp.net/attachments/978011752610557972/983694683760902204/910622798584643646.gif` })
      .setColor(`#303037`)

    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('helpop')
          .setPlaceholder('❯ Yubabe Help Menu!')
          .addOptions([
            {
              label: 'Animals',
              description: 'Các lệnh hunt thú và xem zoo',
              value: 'first',
              emoji: '<:G_bachtuoc:974392970931470347>'
            },
            {
              label: 'Config',
              description: 'Kích hoạt hoặc vô hiệu lệnh trong kênh...',
              value: 'second',
              emoji: '<a:load02:902835678361047070>'
            },
            {
              label: 'Economy',
              description: 'Các lệnh liên quan đến Ycoin!',
              value: 'third',
              emoji: "<a:Yu_cassh:942212732642537502>"
            },
            {
              label: 'Farm',
              description: 'Các lệnh nông trại.',
              value: 'fourth',
              emoji: "<:Yu_field:953050619558645820>"
            },
            {
              label: 'Fun',
              description: 'Các lệnh Fun, black jack v.v',
              value: 'fifth',
              emoji: "<:Ymoon:922599051269111909>"
            },
            {
              label: 'Inventory',
              description: 'Các lệnh xem túi đồ!',
              value: 'sixth',
              emoji: "<:box:974069616093560852> "
            },
            {
              label: 'Shop',
              description: 'Lệnh Shop!',
              value: 'seventh',
              emoji: "<:Yu_shopping:953322964764487690>"
            },
            {
              label: 'Marry',
              description: 'Lệnh Marry !',
              value: 'eighth',
              emoji: "<:Yu_nhanvangkc:951586992897024060>"
            },
          ])
      )
    await message.channel.send({ embeds: [helpmenu], components: [row] })
    await message.channel.send(`\`VOTE CHO BOT ĐỂ NHẬN HỘP NGỌC | GÕ YVOTE\``)

  }
}
async function swap_pages2(client, message, embeds) {
  let currentPage = 0;
  const { MessageButton, MessageActionRow } = require("discord.js");

  let buttonrow1 = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('<:ARROW1:874262374595588117>')
        .setCustomId('skip-page1'),
      new MessageButton()
        .setStyle('SECONDARY')
        .setEmoji('<:ARROW2:874262374733987860>')
        .setCustomId('back-page'),
      new MessageButton()
        .setStyle('SUCCESS')
        .setEmoji('<:HOME:894217044013248532>')
        .setCustomId('home-page'),
      new MessageButton()
        .setStyle('SECONDARY')
        .setEmoji('<:ARROW3:874262374541049896>')
        .setCustomId('next-page'),
      new MessageButton()
        .setStyle('PRIMARY')
        .setEmoji('<:ARROW4:874262374608150578>')
        .setCustomId('skip-page2')
    );

  if (embeds.length === 1) return message.channel.send({ embeds: [embeds[0]] })
  const queueEmbed = await message.channel.send(
    {
      content: `**Current Page - ${currentPage + 1}/${embeds.length}**`,
      components: [buttonrow1],
      embeds: [embeds[currentPage]]
    }
  ).then(msg => {
    const collector = msg.createMessageComponentCollector({
      filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
    })
  })

  collector.on("collect", (interaction) => {
    if (interaction.customId == "next-page") {
      if (currentPage < embeds.length - 1) {
        currentPage++;
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      } else {
        currentPage = 0
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1, buttonrow2] });
      }
    } else if (interaction.customId == "back-page") {
      if (currentPage !== 0) {
        --currentPage; to
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      } else {
        currentPage = embeds.length - 1
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      }
    } else if (interaction.customId == "skip-page1") {
      currentPage = 0;
      queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
    } else if (interaction.customId == "skip-page2") {
      currentPage = embeds.length - 1;
      queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
    } else if (interaction.customId == "home-page") {
      interaction.message.delete()
    }
  })
}
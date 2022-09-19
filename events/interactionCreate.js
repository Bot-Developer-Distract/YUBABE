const { Collection , MessageEmbed} = require('discord.js')

module.exports = {
  name: 'interactionCreate',
  execute(interaction) {

    if (interaction.isCommand()) {
      const slashcommand = client.slashcommands.get(interaction.commandName);

      if (!slashcommand) return;

      try {
        slashcommand.execute(interaction);
      } catch (error) {
        console.error(error);
        interaction.reply({ content: 'Đã có lỗi xảy ra khi truy xuất lệnh này!', ephemeral: true });
      }
      console.log(`${interaction.user.tag} # ĐÃ DÙNG LỆNH SLASH ${(interaction.commandName).toUpperCase()} TẠI ${(interaction.guild.name).toUpperCase()}.`);
    }
    else if (interaction.isSelectMenu()) {
      let options = interaction.values;
      const funny = options[0]
      if (funny === 'first') {
        const embed1 = new MessageEmbed()
          .setThumbnail(`https://media.discordapp.net/attachments/942015852310577162/983698397452193872/59b3e7c9da97700f3e629fe73714f1b2.webp`)
          .setDescription(`🐱 **Animals** - (2)\n\`hunt\`, \`zoo\`\n\n● [Support Server](${`https://discord.gg/yuland`})\n● Bán Thú : \`Ysell <thu | t | a | animal> [C,U,R,SR,E,P,G] [số lượng | all (nếu bán bằng ICON)]\` | \`Ysell thu all\`\n● Bán Nhẫn : \`Ysell <nhan | ring | r> <ID Nhẫn>\`\n● Bán Nông Sản : \`Ysell <nongsan | ns | hg | hatgiong> <Tên hoặc ID> <số lượng | all>\` | \`Ysell ns all\``)
          .addField(`Cách Dùng : Yhunt`, `Săn thú, rút gọn : \`h\``)
          .addField(`Cách dùng : Yzoo`, `Xem zoo, rút gọn : \`z\``)
          .setColor("#303037")
          .setFooter({ text: "Cảm ơn bạn đã chọn Yubabe", URL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif` })
          .setTimestamp()
        interaction.reply({ embeds: [embed1], ephemeral: true })
        return
      }

      else if (funny === 'second') {
        const embed2 = new MessageEmbed()
          .setThumbnail(`https://media.discordapp.net/attachments/942015852310577162/983698397452193872/59b3e7c9da97700f3e629fe73714f1b2.webp`)
          .setDescription(`📛 **Config** - (2) \`enable\`, \`disable\`\n\n● [Support Server](${`https://discord.gg/yuland`})`)
          .addField(`Cách Dùng : \`Ydisable + command\``, `Vô hiệu lệnh trong channel, rút gọn : \`ds, dc\``)
          .addField(`Cách dùng : \`Yenable + command\``, `Kích hoạt lệnh trong channel, rút gọn : \`en, ec\``)
          .addField("● Các lệnh có thể sẽ chưa hoàn thiện hoặc bị mất khi reset bot", "Bọn mình sẽ cố gắng sửa chữa nhanh nhất !")
          .setColor('#303037')
          .setFooter({ text: "Cảm ơn bạn đã chọn Yubabe", URL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif` })
          .setTimestamp()
        interaction.reply({ embeds: [embed2], ephemeral: true })
        return
      }

      else if (funny === 'fourth') {
        const embed3 = new MessageEmbed()
          .setThumbnail(`https://media.discordapp.net/attachments/942015852310577162/983698397452193872/59b3e7c9da97700f3e629fe73714f1b2.webp`)
          .setDescription(`🌾 **Farm** - (7)\n\`ruong\`, \hatgiong\`, \`trongcay\`, \`thuhoach\`,\`nuoi\`\n\n● [Support Server](${`https://discord.gg/yuland`})`)
          .addField(`● Nếu là người chơi mới, bạn gõ \`Yruong\` để nhận field`, `● Sau đó mua hạt giống theo ID và trồng cây bằng lệnh \`Ytc lua\`.\nBạn có thể xem ID bằng lệnh Yruong, id có thể là tên trái cây!`)
          .addField(`Cách Dùng : \`Yruong\``, `Xem các cây trồng hoặc thú nuôi bạn đang nuôi-trồng, rút gọn : \`field, r\``)
          .addField(`Cách Dùng : \`Yhatgiong\``, `Xem các nông sản bạn nuôi-trồng để bán, hiện tại bot đang bảo trì tính năng sell hạt giống, rút gọn : \`crop, hg\``)
          .addField(`Cách Dùng : \`Ytrongcay + id || Ythuhoach + id || Ynuoi + ga/bo/heo\``, `Trồng cây, thu hoạch và cho thú ăn, bạn có thể mua cám heo, cỏ và thóc bằng lệnh Ybuy + co/thoc/camheo + soluong, rút gọn : \`Ytc, Yth, Yn\``)
          .setColor('#303037')
          .setFooter({ text: "Cảm ơn bạn đã chọn Yubabe", URL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif` })
          .setTimestamp()
        interaction.reply({ embeds: [embed3], ephemeral: true })
        return

      }

      else if (funny === 'fifth') {

        const embed4 = new MessageEmbed()
          .setThumbnail(`https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif`)
          .setDescription(`🎮 **Fun** - (5)\n\`slot\`, \`cophieu\`, \`coinflip\`, \`cothay\`, \`pray\`\n\n● [Support Server](${`https://discord.gg/yuland`})`)
          .addField("● Cách dùng : `Yslot + <tiền đặt> | Ycp + <tiền đặt> | Ycf + <tiền đặt> <n/u> | Ypray | Ycothay + <câu hỏi>`", `Chơi cổ phiếu, coinflip, slot, pray và đặt câu hỏi!`)
          .setColor('#303037')
          .setFooter({ text: "Cảm ơn bạn đã chọn Yubabe", URL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif` })
          .setTimestamp()
        interaction.reply({ embeds: [embed4], ephemeral: true })
        return

      }

      else if (funny === 'third') {

        const embed5 = new MessageEmbed()
          .setThumbnail(`https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif `)
          .setDescription(`💴 **Economy** - (7)\n\`cash\`, \`bank\`, \`guitietkiem\`, \`ruttien\`, \`daily\`, \`give\`\n\n● [Support Server](${`https://discord.gg/yuland`})`)
          .addField("● Cách dùng : `Ycash | Ydaily`", `Xem tiền bạn đang có và nhận tiền daily, rút gọn : \`Ybal, Ycash, Ymoney, Ycoin\``)
          .addField("● Cách dùng : `Ybank`", `Xem tiền bạn đang có trong ngân hàng, hãy check DMS, bot sẽ inb riêng cho bạn!`)
          .addField("● Cách dùng : `Ytietkiem + tiền | Yruttien + tiền`", `Gửi tiết kiệm hoặc rút tiền từ bank! Rút gọn : \`tk, gtk, rt, rut\`, hãy check DMS, bot sẽ inb riêng cho bạn!`)
          .addField("● Cách dùng : `Ygive + <user> + <số tiền>`, lệnh khác : `ct, tf`", `Give tiền cho người khác.`)

          .setColor('#303037')
          .setFooter({ text: "Cảm ơn bạn đã chọn Yubabe", URL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif` })
          .setTimestamp()
        interaction.reply({ embeds: [embed5], ephemeral: true })
        return

      }

      else if (funny === 'sixth') {
        const embed6 = new MessageEmbed()
          .setThumbnail(`https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif `)
          .setDescription(`📦 **Inventory** - (3)\n\`inventory\`, \`use\`, \`sell\`,\`buy\`\n\n● [Support Server](${`https://discord.gg/yuland`})`)
          .addField("● Cách dùng : `Yinventory`", `Xem kho vật phẩm bạn đang có (ngọc, cần câu, nhà, nhẫn), lệnh khác \`inv, kho\``)
          .addField("● Cách dùng : `Yuse + id`", `Dùng ngọc, xem ID ngọc trong Inventory`)
          .addField("● Cách dùng : `Ysell`", `Hiện tại bạn có thể bán thú, nhẫn : \`Ysell <thu | nhan> <all | icon thú | loại thú>\` , lệnh khác : s, thu, nhan có thể thay bằng : animal, a, t và n, r, ring`)
          .setColor('#303037')
          .setFooter({ text: "Cảm ơn bạn đã chọn Yubabe", URL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif` })
          .setTimestamp()
        interaction.reply({ embeds: [embed6], ephemeral: true })
        return
      }

      else if (funny === 'seventh') {
        const embed6 = new MessageEmbed()
          .setThumbnail(`https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif `)
          .setDescription(`💰 Shop - (2)\n\`buy\`,\`shop\`\n\n● [Support Server](${`https://discord.gg/yuland`})`)
          .addField("● Cách dùng : `Ybuy + ID`", `Bạn có thể mua nhẫn với các ID : 001,002,003,004,005, các loại cần câu : cc1,cc2,cc3, các loại thức ăn thú nuôi : co, thoc, camheo`)
          .addField("● Cách dùng : `Yshop`", `Truy cập vào danh sách các item trong tiệm tạp hóa YUBABE để mua!`)
          .addField("● Cách dùng : `Ybuy + <ID> + [số lượng]`", `Mua các item trong tiệm tạp hóa YUBABE!`)
          .setColor('#303037')
          .setFooter({ text: "Cảm ơn bạn đã chọn Yubabe", URL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif` })
          .setTimestamp()
        interaction.reply({ embeds: [embed6], ephemeral: true })
        return
      }

      else if (funny === 'eighth') {
        const embed6 = new MessageEmbed()
          .setThumbnail(`https://cdn.discordapp.com/emojis/951586992897024060.png`)
          .setDescription(`💟 Marry - (5)\n\`anhcuoi\`,\`lyhon\`,\`marry\`,\`promise\`,\`together\`\n\n● [Support Server](${`https://discord.gg/yuland`})`)
          .addField("● Cách dùng : `Yanhcuoi + link`", `Thay đổi ảnh nền cho embed marry`)
          .addField("● Cách dùng : `Ymarry + tag + ID nhẫn`", `Cưới một người, bạn có thể gõ Ymarry sau khi kết hôn để xem Bằng Chứng Đính Hôn của mình!`)
          .addField("● Cách dùng : `Ylyhon`", `Ý nghĩa như tên...`)
          .addField("● Cách dùng : `Yloihua + lời hứa`", `Set lời hứa trên EMBED`)
          .addField("● Cách dùng : `Yloveyou`", `Cày điểm thân mật`)
          .setColor('#303037')
          .setFooter({ text: "Cảm ơn bạn đã chọn Yubabe", URL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif` })
          .setTimestamp()
        interaction.reply({ embeds: [embed6], ephemeral: true })
        return
      }

      else return
    }
  }
};
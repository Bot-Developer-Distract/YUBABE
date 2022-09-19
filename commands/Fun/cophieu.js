module.exports = {
  name: 'cophieu',
  description: "Chơi cổ phiếu kiếm tiền : JOB chuyên dụng : Chứng Khoán",
  usage: "Xcp + <tiền đặt>",
  aliases: ['cp'],
  cooldown : 20000,
  run: async (client, message, args) => {
const BanSchema = require('../../models/BanSchema')
const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    let member = message.author;
    let tiền = parseInt(args[0]);
    if (parseInt(tiền) > 150000) tiền = 150000;
    if ((tiền) > 150000) tiền = 150000
    const cash = await client.cash(member.id);
    if (!args[0]) return message.channel.send(`Đặt bao nhiêu?`);
    else if (args[0] == `all`) {
      tiền = cash
      if (tiền > 150000) tiền = 150000
    }
    if ((cash) < 1) return message.channel.send(`Bạn còn cái gì đâu mà all`)
    if (isNaN(tiền)) return message.channel.send(`Nhập cái quái gì vậy ?`);
    if (parseInt(tiền) > cash) return message.channel.send(`Làm gì đủ tiền mà đua đòi`);
    if ((tiền) > cash) return message.channel.send(`Làm gì đủ tiền mà đua đòi`);
    if ((tiền) < 0) return message.channel.send(`Người sống không chơi tiền âm bạn ơi !`)
      let botNumber = [Math.floor(Math.random() * 100)];
      let userNumber = [Math.floor(Math.random() * 100)];

      const bet = await message.channel.send(`<a:Ybankdi:925552304013320192> | **${message.author.username}** đã bỏ ra **${tiền.toLocaleString('En-us')}** để mua cổ phiếu`);
      await client.sleep(2000);
      if (botNumber < userNumber) {
        console.log(`Bot: ${botNumber} User: ${userNumber}`)
        let prize = tiền * (userNumber / 100 - botNumber / 100);
        await client.cong(member.id, parseInt(prize));
        await bet.edit(`<:Ycuoirotconcu:945024100890460270> | **${message.author.username}**, __bạn đã **ĂN** cổ phiếu__
<a:cchamhoi:919903486462820372> \`Tỉ giá CP Mua Vào :\` **${botNumber.toLocaleString('En-us')}%**
<a:cchamhoi:919903486462820372> \`Tỉ giá CP Bán Ra :\` **${userNumber.toLocaleString('En-us')}%**
<:Yu_done:941587979212845076> \`Lợi Nhuận :\` **${parseInt(prize).toLocaleString('En-us')}**
<a:cchamhoi:919903486462820372> \`Tiền Lúc Trước :\` **${(cash).toLocaleString('En-us')} Ycoin**!
<a:cchamhoi:919903486462820372> \`Tiền Hiện Tại :\` **${(cash + parseInt(prize)).toLocaleString('En-us')} Ycoin**!`)
      } 
      else if (botNumber > userNumber) {
        console.log(`Bot: ${botNumber} User: ${userNumber}`)
        let prize = tiền * (botNumber / 100 - userNumber / 100);
        await client.tru(member.id, parseInt(prize));
        const newcash = await client.cash(member.id)
        await bet.edit(`<a:Yla:902287360547516446> **|** **${message.author.username}** , __bạn **Thua** con mẹ nó rồi__
<a:cchamhoi:919903486462820372> \`Tỉ giá CP Mua Vào\` : **${botNumber.toLocaleString('En-us')}%**
<a:cchamhoi:919903486462820372> \`Tỉ giá CP Bán Ra :\` **${userNumber.toLocaleString('En-us')}%**
<:Yu_fail:941589021761634306> Tiền Mất : **${parseInt(prize).toLocaleString('En-us')}** 
<a:cchamhoi:919903486462820372> \`Tiền Lúc Trước :\` **${cash.toLocaleString('en-us')} Ycoin**!
<a:cchamhoi:919903486462820372> \`Tiền Hiện Tại :\` **${(cash - parseInt(prize)).toLocaleString('En-us')} Ycoin**!`);
      }
    }
  }

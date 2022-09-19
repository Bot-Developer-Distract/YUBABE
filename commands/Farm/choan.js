
module.exports = {
  name: 'nuoi',
  cooldown : 0,
  description: "Cho thú nuôi ăn :D",
  usage: "Yn ga | bo | heo",
  aliases: ['n', 'feed', 'choan'],
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    const author = message.author.id
    const username = message.author.username
    let ga = await client.grow(message.author.id, `<:YuGaCon:953394343148920902>`)
    let bo = await client.grow(message.author.id, `<:YuBoCon:953394492503908362>`)
    let heo = await client.grow(message.author.id, `<:YuHeoCon:953396171181817997>`)
    let id = args[0]
    let thoc = await client.grow(message.author.id, `thoc`)
    let co = await client.grow(message.author.id, `co`)
    let camheo = await client.grow(message.author.id, `camheo`)
    if (id == '001' || id == 'ga' || id == '1') {
      if (thoc < 1) return message.channel.send(`${client.emo.fail} | **${username}** , bạn đã hết thóc! Mua thim ik <3`)
      if (ga < 1) return message.channel.send(`${client.emo.fail} | **${username}** , bạn không còn gà để nuôi, mua gà ik <3`)
      let timeout = 3600000
      let lastfeed = await client.cd(message.author.id, `cdga`)
      let used = client.checkcd(lastfeed, timeout)
      let cooldown = used.after
      if (!cooldown) {
        const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn phải chờ : \`${used.h + `:` + used.m + `:` + used.s}s\` để cho gà ăn tiếp!`)
        await client.sleep(5000)
        await delay.delete()
      }
      else {
        await client.timeout(message.author.id, `cdga`)
        if (ga > 4) {
          await client.trugrow(message.author.id, `<:YuGaCon:953394343148920902>`, 1, `thu`)
          await client.trugrow(message.author.id, `thoc`, 1, `food`)
          let solan = -(ga - 1) + 8
          await message.channel.send(`<:YuGaCon:953394343148920902> | **${username}**, bạn đã nuôi gà được **${solan}**/8 lần, trứng sẽ được thu hoạch từ lần thứ 5!`)
        }
        else if (ga <= 4 && ga > 0) {
          await client.trugrow(message.author.id, `<:YuGaCon:953394343148920902>`, 1, `thu`)
          await client.trugrow(message.author.id, `thoc`, 1, `food`)
          await client.addgrow(message.author.id, `🥚`, 3, `ns`)
          let solan = -(ga - 1) + 8
          await message.channel.send(`<:YuGa:953394305614094336> | **${username}**, bạn đã nuôi gà được **${solan}**/8 lần, Bạn nhận được 3 🥚!`)
        }
      }
    }
    else if (id == '002' || id == 'bo' || id == '2') {
      if (co < 1) return message.channel.send(`${client.emo.fail} | **${username}** , bạn đã hết cỏ! Mua thim ik <3`)
      if (bo < 1) return message.channel.send(`${client.emo.fail} | **${username}** , bạn không còn bò để nuôi, mua bò ik <3`)
      let timeout = 7200000
      let lastfeed = await client.cd(message.author.id, `cdbo`)
      let used = client.checkcd(lastfeed, timeout)
      let cooldown = used.after
      if (!cooldown) {
        const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn phải chờ : \`${used.h + `:` + used.m + `:` + used.s}s\` để cho bò ăn tiếp!`)
        await client.sleep(5000)
        await delay.delete()
      }
      else {
        await client.timeout(message.author.id, `cdbo`)
        if (bo > 5) {
          await client.trugrow(message.author.id, `<:YuBoCon:953394492503908362>`, 1, 'thu')
          await client.trugrow(message.author.id, `co`, 1, 'food')
          let solan = -(bo - 1) + 10
          await message.channel.send(`<:YuBoCon:953394492503908362> | **${username}**, bạn đã nuôi bò được **${solan}**/10 lần, sữa sẽ được thu hoạch từ lần thứ 6!`)
        }
        else if (bo <= 5 && bo > 0) {
          client.trugrow(message.author.id, `<:YuBoCon:953394492503908362>`, 1, 'thu')
          client.trugrow(message.author.id, `co`, 1, 'food')
          client.addgrow(message.author.id, `<a:Ybluemilk:918844687425609739>`, 4, 'ns')
          let solan = -(bo - 1) + 10
          await message.channel.send(`<:YuConBo:953394436086308934> | **${username}**, bạn đã nuôi bò được **${solan}**/10 lần, Bạn nhận được 4 <a:Ybluemilk:918844687425609739>!`)
        }
      }
    }
    else if (id == '003' || id == 'heo' || id == '3') {
      if (camheo < 1) return message.channel.send(`${client.emo.fail} | **${username}** , bạn đã hết cám heo! Mua thim ik <3`)
      if (heo < 1) return message.channel.send(`${client.emo.fail} | **${username}** , bạn không còn heo để nuôi, mua heo ik <3`)
      let timeout = 10800000
      let lastfeed = await client.cd(message.author.id, `cdheo`)
      let used = client.checkcd(lastfeed, timeout)
      let cooldown = used.after
      if (!cooldown) {
        const delay = await message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn phải chờ : \`${used.h + `:` + used.m + `:` + used.s}s\` để cho heo ăn tiếp!`)
        await client.sleep(5000)
        await delay.delete()
      }
      else {
        await client.timeout(message.author.id, `cdheo`)
        if (heo > 6) {
          await client.trugrow(message.author.id, `<:YuHeoCon:953396171181817997>`, 1, 'thu')
          await client.trugrow(message.author.id, `camheo`, 1, 'food')
          let solan = -(heo - 1) + 12
          await message.channel.send(`<:YuHeoCon:953396171181817997> | **${username}**, bạn đã nuôi heo được **${solan}**/12 lần, thịt sẽ được thu hoạch từ lần thứ 7!`)
        }
        else if (heo <= 6 && heo > 0) {
          await client.trugrow(message.author.id, `camheo`, 1, 'food')
          await client.trugrow(message.author.id, `<:YuHeoCon:953396171181817997>`, 1, 'thu')
          await client.addgrow(message.author.id, `🥩`, 5, `ns`)
          let solan = -(heo - 1) + 12
          await message.channel.send(`<:YuHeo:953394386165698610> | **${username}**, bạn đã nuôi heo được **${solan}**/12 lần, Bạn nhận được 5 🥩!`)
        }
      }
    }
    else {
      return message.channel.send(`${client.emo.fail} | ID phải là ga | bo | heo hoặc 1 | 2 | 3 \`VD : Ynuoi ga\``)
    }
  }
}


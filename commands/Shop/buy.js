const invSchema = require('../../models/invSchema')
const vipSchema = require('../../models/vipSchema')
const itemSchema = require('../../models/itemSchema')
let { QuickDB } = require('quick.db')
let db = new QuickDB()
module.exports = {
  name: 'buy',
  description: "Mua các Item, sẽ có Shop sau!",
  aliases: ['mua'],
  cooldown: 0,
  usage: "[prefix]buy [item]",
  run: async (client, message, args) => {
    const BanSchema = require('../../models/BanSchema')
    const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    let member = message.author
    let purchase = args[0]
    let cash = await client.cash(member.id)
    let tn1 = `<:YuGaCon:953394343148920902>`
    let tn2 = `<:YuBoCon:953394492503908362>`
    let tn3 = `<:YuHeoCon:953396171181817997>`

    let thunuoi1 = await client.grow(`${member.id}`, `${tn1}`)
    let thunuoi2 = await client.grow(`${member.id}`, `${tn2}`)
    let thunuoi3 = await client.grow(`${member.id}`, `${tn3}`)
    let pricehg = [
      "<:Yu_ot:953103262318477342>",
      "<:Yu_lua:953059348777672705>",
      "<:Yu_DauTay:953375220935295047>",
      "<:Yu_ngo:953971194565124186>",
      "<:Yu_cachua:953059348794470420>",
      "<:Yu_Dao:953375136134877294>",
      "<:Yu_khoaimi:953059349637500968>",
      "<:Yu_mia:953103263476117584>",
      "<:Yu_khoaitay:953103263178305566>",
      "<:Yu_DuaGang:953375173225091133>",
      "<:Yu_carot:953103263895535626>",
      "<:Yu_caingot:953059348731543592>",
      "<:Yu_Mit:953237141440327700>"
    ]
    let arrhg1 = {
      "1": "<:Yu_ot:953103262318477342>",
      "2": "<:Yu_lua:953059348777672705>",
      "3": "<:Yu_DauTay:953375220935295047>",
      "4": "<:Yu_ngo:953971194565124186>",
      '5': "<:Yu_cachua:953059348794470420>",
      "6": "<:Yu_Dao:953375136134877294>",
      "7": "<:Yu_khoaimi:953059349637500968>",
      "8": "<:Yu_mia:953103263476117584>",
      "9": "<:Yu_khoaitay:953103263178305566>",
      "10": "<:Yu_DuaGang:953375173225091133>",
      "11": "<:Yu_carot:953103263895535626>",
      "12": "<:Yu_caingot:953059348731543592>",
      "13": "<:Yu_Mit:953237141440327700>"
    }
    let arrhg2 = {
      "ot": "<:Yu_ot:953103262318477342>",
      "lua": "<:Yu_lua:953059348777672705>",
      "dautay": "<:Yu_DauTay:953375220935295047>",
      "ngo": "<:Yu_ngo:953971194565124186>",
      "ngo": "<:Yu_ngo:953971194565124186>",
      "cachua": "<:Yu_cachua:953059348794470420>",
      "dao": "<:Yu_Dao:953375136134877294>",
      "khoaimi": "<:Yu_khoaimi:953059349637500968>",
      "mia": "<:Yu_mia:953103263476117584>",
      "khoaitay": "<:Yu_khoaitay:953103263178305566>",
      "duagang": "<:Yu_DuaGang:953375173225091133>",
      "carot": "<:Yu_carot:953103263895535626>",
      "caingot": "<:Yu_caingot:953059348731543592>",
      "mit": "<:Yu_Mit:953237141440327700>"
    }
    let namehg1 = arrhg1[args[0]]
    let namehg2 = arrhg2[args[0]]
    let pro = false
    let vip = false
    const provip = await vipSchema.findOne({ memberid: message.author.id })
    if (provip) {
      const date = await client.datepassport(message.author.id)
      const status = await client.checkpassport(date)
      let end = status.after
      if (!end && provip.type == `<:VIPPassport:988093810955411456>`) vip = true
      if (!end && provip.type == `<:ProPassport:988093838348410930>`) pro = true
    }
    if (!purchase) {
      return message.channel.send(`<:Yu_fail:941589021761634306> | **${member.username}**, bạn muốn mua gì ?`)
    }
    if (purchase == '002' || purchase == 'nhanb' || purchase == 'nhanbac') {
      if (cash < 1000000) {
        return message.channel.send(`<:Yu_fail:941589021761634306> | **${member.username}**, bạn không đủ tiền mua Nhẫn Bạc!`)
      }
      const NhanBac = await invSchema.findOne({ memberid: `${member.id}`, name: '<:Yu_nhanbac:941435162728730675>' })
      if (NhanBac) {
        return message.channel.send(`Bạn đã sở hữu nhẫn Bạc rồi!`)
      }
      else {
        let price = 0
        let luck = 0
        if (!pro && !vip) luck = Math.floor(Math.random() * 10)
        if (pro) luck = Math.floor(Math.random() * 10) - 2
        if (vip) luck = Math.floor(Math.random() * 10) - 4
        if (luck <= 3) price = Math.floor(Math.random() * 150000)
        if (luck > 3) price = -(Math.floor(Math.random() * 150000))
        const muanhanbac = new invSchema({ memberid: `${member.id}`, name: `<:Yu_nhanbac:941435162728730675>`, quanlity: 1, type: `ring`, price: (1000000 + price) })
        await muanhanbac.save()
      }
      client.tru(member.id, 1000000)
      await message.channel.send(`<:Yu_nhanbac:941435162728730675> | **${member.username}**, bạn đã mua **Nhẫn Bạc** với giá **1,000,000 Ycoin!**`)
    }
    else if (purchase == '003' || purchase == 'nhanv' || purchase == 'nhanvang') {
      if (cash < 10000000) {
        return message.channel.send(`<:Yu_fail:941589021761634306> | **${member.username}**, bạn không đủ tiền mua Nhẫn Vàng!`)
      }
      const NhanVang = await invSchema.findOne({ memberid: `${member.id}`, name: `<:Yu_nhanvang:941435163181727824>` })
      if (NhanVang) {
        return message.channel.send(`Bạn đã sở hữu nhẫn Vàng rồi!`)
      } else {
        let price = 0
        let luck = 0
        if (!pro && !vip) luck = Math.floor(Math.random() * 10)
        if (pro) luck = Math.floor(Math.random() * 10) - 2
        if (vip) luck = Math.floor(Math.random() * 10) - 4
        if (luck <= 3) price = Math.floor(Math.random() * 1000000)
        if (luck > 3) price = -(Math.floor(Math.random() * 1000000))
        const muanhanvang = new invSchema({ memberid: `${member.id}`, name: `<:Yu_nhanvang:941435163181727824>`, quanlity: 1, type: `ring`, price: (10000000 + price) })
        await muanhanvang.save()
      }
      client.tru(member.id, 10000000)
      message.channel.send(`<:Yu_nhanvang:941435163181727824> | **${member.username}**, bạn đã mua **Nhẫn Vàng** với giá **10,000,000 Ycoin**!`)
    }
    else if (purchase == '004' || purchase == 'nhankc' || purchase == 'nhankimcuong') {
      if (cash < 20000000) {
        return message.channel.send(`<:Yu_fail:941589021761634306> | **${member.username}**, bạn không đủ tiền mua Nhẫn Kim Cương!`)
      }
      const NhanKimCuong = await invSchema.findOne({ memberid: `${member.id}`, name: `<:Yu_nhankimcuong:941435160883265556>` })
      if (NhanKimCuong) {
        return message.channel.send(`Bạn đã sở hữu nhẫn Kim Cương rồi!`)
      } else {
        let price = 0
        let luck = 0
        if (!pro && !vip) luck = Math.floor(Math.random() * 10)
        if (pro) luck = Math.floor(Math.random() * 10) - 2
        if (vip) luck = Math.floor(Math.random() * 10) - 4
        if (luck == 1) price = Math.floor(Math.random() * 3000000)
        if (luck !== 1) price = -(Math.floor(Math.random() * 3000000))
        const muanhankimcuong = new invSchema({ memberid: `${member.id}`, name: `<:Yu_nhankimcuong:941435160883265556>`, quanlity: 1, type: `ring`, price: (20000000 + price) })
        await muanhankimcuong.save()
      }
      client.tru(member.id, 20000000)
      await message.channel.send(`<:Yu_nhankimcuong:941435160883265556> | **${member.username}**, bạn đã mua **Nhẫn Kim Cương** với giá **20,000,000 Ycoin**!`)
    }
    else if (purchase == '001' || purchase == 'nhanc' || purchase == 'nhanco') {
      if (cash < 50000) {
        return message.channel.send(`<:Yu_fail:941589021761634306> | **${member.username}**, bạn không đủ tiền mua Nhẫn cỏ!`)
      }
      const NhanCo = await invSchema.findOne({ memberid: `${member.id}`, name: `<:Yu_nhanco:951133679546159214>` })
      if (NhanCo) {
        return message.channel.send(`Bạn đã sở hữu nhẫn Cỏ rồi!`)
      } else {
        let price = 0
        let luck = 0
        if (!pro && !vip) luck = Math.floor(Math.random() * 10)
        if (pro) luck = Math.floor(Math.random() * 10) - 2
        if (vip) luck = Math.floor(Math.random() * 10) - 4
        if (luck == 1) price = Math.floor(Math.random() * 5000)
        if (luck !== 1) price = -(Math.floor(Math.random() * 5000))
        const muanhanco = new invSchema({ memberid: `${member.id}`, name: `<:Yu_nhanco:951133679546159214>`, quanlity: 1, type: `ring`, price: (50000 + price) })
        await muanhanco.save()
      }
      client.tru(member.id, 50000)
      await message.channel.send(`<:Yu_nhanco:951133679546159214> | **${member.username}**, bạn đã mua **Nhẫn Cỏ** với giá **50,000 Ycoin**!`)
    }
    else if (purchase == '005' || purchase == 'nhanvkc' || purchase == 'nhanvangkimcuong') {
      if (cash < 50000000) {
        return message.channel.send(`<:Yu_fail:941589021761634306> | **${member.username}**, bạn không đủ tiền mua Nhẫn Đôi Hột Soàn!`)
      }
      const NhanVangKimCuong = await invSchema.findOne({ memberid: `${member.id}`, name: `<:Yu_nhanvangkc:951586992897024060>` })
      if (NhanVangKimCuong) {
        return message.channel.send(`Bạn đã sở hữu nhẫn đôi Kim Cương rồi!`)
      } else {
        let price = 0
        let luck = 0
        if (!pro && !vip) luck = Math.floor(Math.random() * 10)
        if (pro) luck = Math.floor(Math.random() * 10) - 2
        if (vip) luck = Math.floor(Math.random() * 10) - 4
        if (luck == 1) price = Math.floor(Math.random() * 5000000)
        if (luck !== 1) price = -(Math.floor(Math.random() * 5000000))
        const muanhanvkimcuong = new invSchema({ memberid: `${member.id}`, name: `<:Yu_nhanvangkc:951586992897024060>`, quanlity: 1, type: `ring`, price: (50000000 + price) })
        await muanhanvkimcuong.save()
      }
      client.tru(member.id, 50000000)
      await message.channel.send(`<:Yu_nhanvangkc:951586992897024060> | **${member.username}**, bạn đã mua **Nhẫn Đôi Kim Cương** với giá **50,000,000 Ycoin**!`)
    }
    else if (purchase == 'thoc') {
      let soluong = parseInt(args[1])
      if (soluong < 0) return message.channel.send(`:x: | **${message.author.username}** Bạn không thể nhập số âm !`)
      if (!soluong || isNaN(soluong)) return message.channel.send(`Số lượng không hợp lệ!`)
      if (cash < (2000 * soluong)) {
        return message.channel.send(`<:Yu_fail:941589021761634306> | **${member.username}**, bạn không đủ tiền mua thóc!`)
      }
      client.tru(member.id, 2000 * soluong)
      await client.addgrow(`${message.author.id}`, `thoc`, soluong, 'food')
      await message.channel.send(`<:Yu_Ycoin:953323682246316082> | **${member.username}**, bạn đã mua <:Yu_thoc:953407482884161566> **${soluong}** <:Yu_thoc:953407482884161566> Bao Thóc với giá **${parseInt(2000 * soluong).toLocaleString('En-us')} Ycoin**!`)
    }
    else if (purchase == 'co') {
      let soluong = parseInt(args[1])
      if (soluong < 0) return message.channel.send(`:x: | **${message.author.username}** Bạn không thể nhập số âm !`)
      if (!soluong || isNaN(soluong)) return message.channel.send(`Số lượng không hợp lệ!`)
      if (cash < (6000 * soluong)) {
        return message.channel.send(`<:Yu_fail:941589021761634306> | **${member.username}**, bạn không đủ tiền mua cỏ!`)
      }
      client.tru(member.id, 6000 * soluong)
      await client.addgrow(`${message.author.id}`, `co`, soluong, 'food')
      message.channel.send(`<:Yu_Ycoin:953323682246316082> | **${member.username}**, bạn đã mua <:Yu_co:953408530474475520> **${soluong}** <:Yu_co:953408530474475520> Bao Cỏ với giá **${parseInt(6000 * soluong).toLocaleString('En-us')} Ycoin**!`)
    }
    else if (purchase == 'cam' || purchase == 'camheo') {
      let soluong = parseInt(args[1])
      if (soluong < 0) return message.channel.send(`:x: | **${message.author.username}** Bạn không thể nhập số âm !`)
      if (!soluong || isNaN(soluong)) return message.channel.send(`Số lượng không hợp lệ!`)
      if (cash < (12000 * soluong)) {
        return message.channel.send(`<:Yu_fail:941589021761634306> | **${member.username}**, bạn không đủ tiền mua cám heo!`)
      }
      client.tru(member.id, 12000 * soluong)
      await client.addgrow(`${message.author.id}`, `camheo`, soluong, 'food')
      message.channel.send(`<:Yu_Ycoin:953323682246316082> | **${member.username}**, bạn đã mua <:Yu_camheo:953407482955436062> **${soluong}** <:Yu_camheo:953407482955436062> Bao Cám Heo với giá **${parseInt(12000 * soluong).toLocaleString('En-us')} Ycoin**!`)
    }
    else if (purchase == 'ga') {
      if (thunuoi1 > 0) return message.channel.send(`:x: | **Thú nuôi của bạn vẫn đang trong quá trình nuôi dưỡng! Không thể mua thú mới!**`)
      if (cash < 100000) return message.channel.send(`<:Yu_fail:941589021761634306> | **${message.author.username}**, bạn không có đủ tiền mua ${tn1}!`)
      await client.addgrow(`${member.id}`, `${tn1}`, 8, 'thu')
      await client.tru(member.id, 100000)
      await message.channel.send(`${tn1} | **${message.author.username}**, bạn đã mua Gà Giống ${tn1} để nuôi lấy trứng 🥚!!`)
    }
    else if (purchase == 'bo') {
      if (thunuoi2 > 0) return message.channel.send(`:x: | **Thú nuôi của bạn vẫn đang trong quá trình nuôi dưỡng! Không thể mua thú mới!**`)
      if (cash < 200000) return message.channel.send(`<:Yu_fail:941589021761634306> | **${message.author.username}**, bạn không có đủ tiền mua ${tn2}!`)
      await client.addgrow(`${member.id}`, `${tn2}`, 10, 'thu')
      await client.tru(member.id, 200000)
      await message.channel.send(`${tn2} | **${message.author.username}**, bạn đã mua Bò Giống ${tn2} để nuôi lấy sữa <a:Ybluemilk:918844687425609739>!!`)
    }
    else if (purchase == 'heo') {
      if (thunuoi3 > 0) return message.channel.send(`:x: | **Thú nuôi của bạn vẫn đang trong quá trình nuôi dưỡng! Không thể mua thú mới!**`)
      if (cash < 400000) return message.channel.send(`<:Yu_fail:941589021761634306> | **${message.author.username}**, bạn không có đủ tiền mua ${tn3}!`)
      await client.addgrow(`${member.id}`, `${tn3}`, 12, 'thu')
      await client.tru(member.id, 400000)
      await message.channel.send(`${tn3} | **${message.author.username}**, bạn đã mua Heo Giống ${tn3} để nuôi lấy thịt 🥩!!`)
    }
    else if (namehg1) {
      let soluong = parseInt(args[1])
      if (soluong < 0) return message.channel.send(`:x: | **${message.author.username}** Bạn không thể nhập số âm !`)
      if (soluong > 20) soluong = 20
      if (isNaN(soluong)) soluong = 1
      let price = await client.checktienhg(pricehg, namehg1)
      const cash = await client.cash(message.author.id)
      if (price * soluong > cash) return message.channel.send(`Bạn không đủ tiền!`)
      await client.addgrow(message.author.id, namehg1, soluong, 'ns')
      await client.tru(message.author.id, price * soluong)
      await message.channel.send(`<:Yu_field:953050619558645820> | **${message.author.username}**, bạn đã mua **${soluong}** hạt ${namehg1} để trồng!`)
    }
    else if (namehg2) {
      let soluong = parseInt(args[1])
      if (soluong < 0) return message.channel.send(`:x: | **${message.author.username}** Bạn không thể nhập số âm !`)
      if (!soluong) soluong = 1
      if (soluong > 20) soluong = 20
      if (isNaN(soluong)) soluong = 1
      const cash = await client.cash(message.author.id)
      let price = await client.checktienhg(pricehg, namehg2)
      if (price * soluong > cash) return message.channel.send(`Bạn không đủ tiền!`)

      await client.addgrow(message.author.id, namehg2, soluong, 'ns')
      await client.tru(message.author.id, price * soluong)
      await message.channel.send(`<:Yu_field:953050619558645820> | **${message.author.username}**, bạn đã mua **${soluong}** hạt ${namehg2} để trồng!`)
    }
    /**
    else if (purchase == `cmt`) {
      let soluong = 1
      if (parseInt(args[1])) soluong = parseInt(args[1])
      let cash = await client.cash(message.author.id)
      if (cash < soluong * 10000) return message.reply(`Bạn không có đủ tiền mua chiêu mộ lệnh! Bạn còn thiếu **__${((soluong * 10000) - cash).toLocaleString('en-us')} Ycoin__**`)
      if (soluong > 1000) soluong = 1000
      let buyed = await db.get(`${message.author.id}_cmtlenh`)
      
      if (buyed > 1000) return message.reply(`:x: | Bạn đã mua giới hạn 1000 lệnh test!`)
      await client.tru(message.author.id, soluong * 10000)
      let lenhbai = await itemSchema.findOne({ id: member.id, name: `<:LenhBaiChieuMo:991633427168231505>` })
      if (!lenhbai) {
        let add = new itemSchema({
          id: member.id,
          name: `<:LenhBaiChieuMo:991633427168231505>`,
          quanlity: soluong,
          type: `chieumo`
        })
        await add.save()
      }
      else {
        lenhbai.quanlity += soluong
        await lenhbai.save()
      }
      await db.set(`${message.author.id}_cmtlenh`, soluong)
      await message.reply(`<:LenhBaiChieuMo:991633427168231505> | Bạn đã mua ${soluong} <:LenhBaiChieuMo:991633427168231505>! Lưu ý, tính năng chỉ đang test cho mọi người chơi vui, sẽ bị xóa tất cả dữ liệu khi đưa vào hoạt động!`)
    }
    **/
  }
}
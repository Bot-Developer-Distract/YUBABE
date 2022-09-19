const invSchema = require('../../models/invSchema')
const thu = require('../../config/animal.json');
const { QuickDB } = require('quick.db')
const db = new QuickDB()
const animalSchema = require('../../models/animalSchema')
const farmSchema = require('../../models/farmSchema')
const C = ["🐛", "🪱", "🐞", "🐌", "🦋"]
const U = ["🐭", "🐰", "🐱", "🐶", "🦊"]
const R = ["🐓", "🐖", "🐏", "🐄", "🐃"]
const SR = ["🦎", "🐢", "🦂", "🐍", "🐊"]
const E = ["🐒", "🦛", "🐆", "🐅", "🐘"]
const P = [
  "<a:Ybutterfly:911682101005398058>",
  "<a:Yizumilacmong:929738419930808430>",
  "<:Ynth:930032493065801758>",
  "<:Ykhatrapboi:918082945686851615>",
  "<:be_non:918932737543503912>",
  "<a:Yu_meobaymau:944351775597674558>",
  "<:Yquyxu:941244934797799434>",
  "<a:GG_hongchuyen:911309645681946685>"
]
const G = [
  "<:G_naisungtam:974392899536056401>",
  "<:G_kilan:974392813095616542>",
  "<:G_gautruc:974392721106149466>",
  "<:G_cho:974392664445308958>",
  "<:G_chim:974392505317597194>",
  "<:G_caoden:974392590029959188>",
  "<:G_bachtuoc:974392970931470347>"
]
const D = [
  "<:D_Chimera:985411852542562344>",
  "<:D_Hydra:985411855927349298>",
  "<:D_Medusa:985411858557202513>",
  "<:D_Minotaur:985411860922761276>",
  "<:D_Pegasus:985411864324358184>"
]
const V = [
  "<a:V_Cinderella:988149859745943592>",
  "<a:V_Sonic:988149031291215914>",
  "<a:V_Vanellope:988148591669440615>",
  "<a:V_Belle:988150258066423858>",
  "<a:V_BossBaby:988147327292276756>"
]

module.exports = {
  name: "sell",
  cooldown: 2000,
  description: "● Bán Thú : Ysell <thu | t | a | animal> [C,U,R,SR,E,P,G] [số lượng | all (nếu bán bằng ICON)] | Ysell thu all\n● Bán Nhẫn : Ysell <nhan | ring | r> <ID Nhẫn>\n● Bán Nông Sản : Ysell <nongsan | ns | hg | hatgiong> <Tên hoặc ID> <số lượng | all> | Ysell ns all",
  aliases: ["s"],
  usage: `Ysell <type> <name> [quanlity]`,
  run: async (client, message, args) => {

    //if (message.author.id !== `896739787392819240`) return message.channel.send(`Lệnh Đang Sửa Chữa`)
    const nsprice = [
      `<:Yu_ot:953103262318477342>`,
      `<:Yu_lua:953059348777672705>`,
      `<:Yu_DauTay:953375220935295047>`,
      `<:Yu_ngo:953971194565124186>`,
      `<:Yu_cachua:953059348794470420>`,
      `<:Yu_Dao:953375136134877294>`,
      `<:Yu_khoaimi:953059349637500968>`,
      `<:Yu_mia:953103263476117584>`,
      `<:Yu_khoaitay:953103263178305566>`,
      `<:Yu_DuaGang:953375173225091133>`,
      `<:Yu_carot:953103263895535626>`,
      `<:Yu_caingot:953059348731543592>`,
      `<:Yu_Mit:953237141440327700>`,
      `🥚`,
      `<a:Ybluemilk:918844687425609739>`,
      `🥩`,
    ]
    const type = args[0]
    const object = args[1]
    let soluong = parseInt(args[2])
    if (!type) return message.channel.send(`:x: | **${message.author.username}**, bạn phải nhập thứ muốn bán! \`Ysell [thu] [C,U,R,SR,E,P,G]\``)
    if (!object) return message.channel.send(`:x: | **${message.author.username}**, bạn phải nhập thứ muốn bán! \`Ysell [thu] [C,U,R,SR,E,P,G]\``)

    if (type == `thu` || type == `animal` || type == `a` || type == `t`) {
      let name1 = `${thu.C[0]}`;
      let name2 = `${thu.C[1]}`;
      let name3 = `${thu.C[2]}`;
      let name4 = `${thu.C[3]}`;
      let name5 = `${thu.C[4]}`;

      let name6 = `${thu.U[0]}`;
      let name7 = `${thu.U[1]}`;
      let name8 = `${thu.U[2]}`;
      let name9 = `${thu.U[3]}`;
      let name10 = `${thu.U[4]}`;

      let name11 = `${thu.R[0]}`;
      let name12 = `${thu.R[1]}`;
      let name13 = `${thu.R[2]}`;
      let name14 = `${thu.R[3]}`;
      let name15 = `${thu.R[4]}`;

      let name16 = `${thu.SR[0]}`;
      let name17 = `${thu.SR[1]}`;
      let name18 = `${thu.SR[2]}`;
      let name19 = `${thu.SR[3]}`;
      let name20 = `${thu.SR[4]}`;

      let name21 = `${thu.E[0]}`;
      let name22 = `${thu.E[1]}`;
      let name23 = `${thu.E[2]}`;
      let name24 = `${thu.E[3]}`;
      let name25 = `${thu.E[4]}`;

      let name26 = `${thu.P[0]}`;
      let name27 = `${thu.P[1]}`;
      let name28 = `${thu.P[2]}`;
      let name29 = `${thu.P[3]}`;
      let name30 = `${thu.P[4]}`;
      let name31 = `${thu.P[5]}`;
      let name32 = `${thu.P[6]}`;
      let name33 = `${thu.P[7]}`;

      let name34 = `${thu.G[0]}`;
      let name35 = `${thu.G[1]}`;
      let name36 = `${thu.G[2]}`;
      let name37 = `${thu.G[3]}`;
      let name38 = `${thu.G[4]}`;
      let name39 = `${thu.G[5]}`;
      let name40 = `${thu.G[6]}`;
      let name41 = `${thu.D[0]}`;
      let name42 = `${thu.D[1]}`;
      let name43 = `${thu.D[2]}`;
      let name44 = `${thu.D[3]}`;
      let name45 = `${thu.D[4]}`;
      let name46 = `${thu.V[0]}`;
      let name47 = `${thu.V[1]}`;
      let name48 = `${thu.V[2]}`;
      let name49 = `${thu.V[3]}`;
      let name50 = `${thu.V[4]}`;
      let name51 = `${thu.V[5]}`;
      let ids = [name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, name11, name12, name13, name14, name15, name16, name17, name18, name19, name20, name21, name22, name23, name24, name25, name26, name27, name28, name29, name30, name31, name32, name33, name34, name35, name36, name37, name38, name39, name40, name41, name42, name43, name44, name45, name46, name47, name48, name49, name50, name51]
      if (object !== `all`) {
        const selltype = await animalSchema.find(
          { id: message.author.id, type: object }
        ).sort({ quanlity: -1 })
        const sellname = await animalSchema.findOne({
          id: message.author.id, name: object
        }).sort({ quanlity: -1 })
        if (selltype[0]) {
          let sltb = 0
          let moneys = 0
          for (let a in selltype) {
            let thuban = selltype[a]
            let price = checkprice(C, U, R, SR, E, P, G, D, V, thuban.name)
            console.log(price)
            let sl = thuban.quanlity
            sltb += sl
            if (sl >= 1) moneys += price * sl
            if (sl < 1) moneys += 0
            thuban.quanlity = 0
            await thuban.save()
          }
          await client.cong(message.author.id, moneys)
          await message.channel.send(`<:vvv:921536318062862396> | **${message.author.username}**, bạn đã bán ${sltb} loại ${object} và thu được **${parseInt(moneys).toLocaleString('En-Us')} Ycoin**`)
        }
        if (sellname) {
          if (args[2] == `all`) soluong = sellname.quanlity
          if (soluong > sellname.quanlity) soluong = sellname.quanlity
          if (!args[2]) soluong = 1
          sellname.quanlity -= soluong
          await sellname.save()
          let price = checkprice(C, U, R, SR, E, P, G, D, V, sellname.name)
          await client.cong(message.author.id, price * soluong)
          await message.channel.send(`<:vvv:921536318062862396> | **${message.author.username}**, bạn đã bán **${soluong}** ${sellname.name} và thu được **${parseInt(price * soluong).toLocaleString('En-Us')} Ycoin**`)
        }
      }
      else if (object == `all`) {
        let typeC = 0
        let typeU = 0
        let typeR = 0
        let typeSR = 0
        let typeE = 0
        let typeP = 0
        let typeG = 0
        let typeD = 0
        let typeV = 0
        let money = 0
        const array = await animalSchema.find(
          { id: message.author.id, name: { $in: ids } }
        ).sort({ quanlity: -1 })
        if (!array[0]) return message.channel.send(`:x: | **${message.author.username}**, bạn làm gì có thú mà bán ?`)
        for (let a in array) {
          var o = array[a];
          i = o.quanlity
          if (o.type == `C`) {
            typeC += i
            money += i * 5
          }
          else if (o.type == `U`) {
            typeU += i
            money += i * 15
          }
          else if (o.type == `R`) {
            typeR += i
            money += i * 100
          }
          else if (o.type == `SR`) {
            typeSR += i
            money += i * 500
          }
          else if (o.type == `E`) {
            typeE += i
            money += i * 1000
          }
          else if (o.type == `P`) {
            typeP += i
            money += i * 100000
          }
          else if (o.type == `G`) {
            typeG += i
            money += i * 30000
          }
          else if (o.type == `D`) {
            typeD += i
            money += i * 70000
          }
          else if (o.type == `V`) {
            typeV += i
            money += i * 130000
          }
          o.quanlity = 0
          await o.save()
        }
        await client.cong(message.author.id, money)
        await message.channel.send(`<:vvv:921536318062862396> | **${message.author.username}**, bạn đã bán ${typeC} C, ${typeU} U, ${typeR} R, ${typeSR} SR, ${typeE} E, ${typeP} P, ${typeG} G, ${typeD} D,${typeV} V và thu được **${parseInt(money).toLocaleString('En-Us')} Ycoin**`)
      }
    }
    else if (type == `nhan` || type == `ring` || type == `r`) {
      let nhanname = {
        '001': '<:Yu_nhanco:951133679546159214>',
        '002': '<:Yu_nhanbac:941435162728730675>',
        '003': '<:Yu_nhanvang:941435163181727824>',
        '004': '<:Yu_nhankimcuong:941435160883265556>',
        '005': '<:Yu_nhanvangkc:951586992897024060>'
      }
      const tennhan = nhanname[args[1]]
      const nhan = await invSchema.findOne({ memberid: message.author.id, name: tennhan })
      if (!nhan) return message.channel.send(`:x: | **${message.author.username}**, bạn nhập sai ID nhẫn!`)
      let user = message.author
      let a = await client.cd(message.author.id, `sellnhan1`)
      let day = await client.newday(a)
      let inday = day.withinDay
      let h = day.hours
      let min = day.minutes
      let sec = day.seconds
      let after = day.after
      if (!after) {
        const delay = await message.channel.send(`<:Yu_fail:941589021761634306> | **${user.username}**, bạn phải chờ : \`${h}:${min}:${sec}s\` để sell nhẫn tiếp!`)
        await client.sleep(5000)
        await delay.delete()
      }
      else {
        await client.timeout(message.author.id, `sellnhan1`)
        if (nhan.quanlity < 1) return message.channel.send(`:x: | **${message.author.username}**, bạn không đủ nhẫn để bán!`)
        let money = nhan.price
        await invSchema.deleteOne({ memberid: message.author.id, name: tennhan })
        await client.cong(message.author.id, money)
        await message.channel.send(`<:vvv:921536318062862396> | **${message.author.username}**, bạn đã bán thành công ${nhan.name} và nhận được **${parseInt(money).toLocaleString('En-Us')} Ycoin**`)
      }
    }
    else if (type == `hg` || type == `hatgiong`) {
      let arr = {
        '1': client.hg.ot,
        '2': client.hg.lua,
        '3': client.hg.dautay,
        '4': client.hg.ngo,
        '5': client.hg.cachua,
        '6': client.hg.dao,
        '7': client.hg.khoaimi,
        '8': client.hg.mia,
        '9': client.hg.khoaitay,
        '10': client.hg.duagang,
        '11': client.hg.carot,
        '12': client.hg.caingot,
        '13': client.hg.mit
      }
      let arr2 = {
        'ot': client.hg.ot,
        'lua': client.hg.lua,
        'dautay': client.hg.dautay,
        'ngo': client.hg.ngo,
        'bap': client.hg.ngo,
        'cachua': client.hg.cachua,
        'dao': client.hg.dao,
        'khoaimi': client.hg.khoaimi,
        'mia': client.hg.mia,
        'khoaitay': client.hg.khoaitay,
        'duagang': client.hg.duagang,
        'carot': client.hg.carot,
        'caingot': client.hg.caingot,
        'mit': client.hg.mit,
      }
      let name = arr[args[1]]
      let name2 = arr2[args[1]]
      if (name) {
        const hatgiong = await client.grow(message.author.id, name)
        let soluong = parseInt(args[2])
        if (hatgiong == 0) return message.channel.send(`:x: | ${message.author.username}, bạn không còn ${name} để bán`)
        if (soluong < 0) return message.channel.send(`:x: | **${message.author.username}** Bạn không thể nhập số âm !`)
        if (args[2] == `all` && hatgiong > 0) soluong = hatgiong
        if (isNaN(soluong)) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn phải nhập chính xác số lượng ${name} thì mới bán được!`)
        if (hatgiong < soluong) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn không có đủ ${name} để bán!`)
        let a = checktienhg(nsprice, name)
        let money = soluong * a
        let thoitiet = ``
        let phantram = 0
        let sophantram = Math.floor(Math.random() * 10) + 1
        let tile = Math.floor(Math.random() * 1000)
        let loi = ``
        if (tile % 2 == 0) thoitiet = `Mưa Thuận Gió Hòa`, phantram = sophantram / 100, loi = `lời`
        if (tile % 2 !== 0) thoitiet = `Hạn Hán`, phantram = -(sophantram / 100), loi = `lỗ`
        let realmoney = money + (money * phantram)
        console.log(`Tỉ lệ : ${tile}, Phần Trăm : ${sophantram}/${phantram}`)
        await client.trugrow(message.author.id, name, soluong, 'ns')
        await client.cong(message.author.id, realmoney)
        await message.channel.send(`${client.emo.done} | **${message.author.username}**, vụ mùa qua tiết trời **${thoitiet}** bạn đã bán **${soluong}** hạt giống ${name} và thu được **${realmoney.toLocaleString('En-Us')} Ycoin** \`[${loi} ${sophantram}%]\``)

      }
      else if (name2) {
        const hatgiong = await client.grow(message.author.id, name2)
        let soluong = parseInt(args[2])
        if (hatgiong == 0) return message.channel.send(`:x: | ${message.author.username}, bạn không còn ${name} để bán`)
        if (soluong < 0) return message.channel.send(`:x: | **${message.author.username}** Bạn không thể nhập số âm !`)
        if (args[2] == `all`) soluong = hatgiong
        if (isNaN(soluong)) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn phải nhập chính xác số lượng ${name2} thì mới bán được!`)
        if (hatgiong < soluong) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn không có đủ ${name2} để bán!`)
        let a = checktienhg(nsprice, name2)
        let money = soluong * a
        let thoitiet = ``
        let phantram = 0
        let sophantram = Math.floor(Math.random() * 10) + 1
        let tile = Math.floor(Math.random() * 1000)
        let loi = ``
        if (tile % 2 == 0) thoitiet = `Mưa Thuận Gió Hòa`, phantram = sophantram / 100, loi = `lời`
        if (tile % 2 !== 0) thoitiet = `Hạn Hán`, phantram = -(sophantram / 100), loi = `lỗ`
        let realmoney = parseInt(money + (money * phantram))
        console.log(realmoney)
        await client.trugrow(message.author.id, name2, soluong, 'ns')
        await client.cong(message.author.id, realmoney)
        await message.channel.send(`${client.emo.done} | **${message.author.username}**, vụ mùa qua tiết trời **${thoitiet}**, bạn đã bán **${soluong}** hạt giống ${name2} và thu được **${parseInt(realmoney).toLocaleString('En-Us')} Ycoin** \`[${loi} ${sophantram}%]\``)

      }
      else if (args[1] == "all") {
        let hatjonh = [
          client.hg.ot,
          client.hg.lua,
          client.hg.dautay,
          client.hg.ngo,
          client.hg.cachua,
          client.hg.khoaimi,
          client.hg.dao,
          client.hg.mia,
          client.hg.khoaitay,
          client.hg.duagang,
          client.hg.carot,
          client.hg.caingot,
          client.hg.mit
        ]
        const nongsan = await farmSchema.find({
          memberid: message.author.id,
          name: { $in: hatjonh },
          type: 'ns'
        })
        let money = 0
        for (let n in nongsan) {
          let ns = nongsan[n]
          let name = ns.name
          let sl = ns.quanlity
          let price = await client.checktienhg(nsprice, name)
          if (isNaN(price)) price = 0
          money += price * sl
          console.log(money)
          ns.quanlity = 0
          await ns.save()
        }
        let thoitiet = ``
        let phantram = 0
        let sophantram = Math.floor(Math.random() * 10) + 1
        let tile = Math.floor(Math.random() * 1000)
        let loi = ``
        if (tile % 2 == 0) thoitiet = `Mưa Thuận Gió Hòa`, phantram = sophantram / 100, loi = `lời`
        if (tile % 2 !== 0) thoitiet = `Hạn Hán`, phantram = -(sophantram / 100), loi = `lỗ`

        let realmoney = parseInt(money + (money * phantram))
        await message.channel.send(`${client.emo.done} | **${message.author.username}**, vụ mùa qua thời tiết : **${thoitiet}**, bạn đã bán tất cả hạt giống và thu được **${realmoney.toLocaleString('En-Us')} Ycoin** [\`${loi} ${sophantram}%\`]`)
        await client.cong(message.author.id, realmoney)
      }
    }
    else if (type == `ns` || type == `nongsan`) {
      let arr = {
        'trung': `🥚`,
        'thit': `🥩`,
        'sua': `<a:Ybluemilk:918844687425609739>`,
      }
      let name = arr[args[1]]
      if (name) {
        const hatgiong = await client.grow(message.author.id, name)
        let soluong = parseInt(args[2])
        if (soluong < 0) return message.channel.send(`:x: | **${message.author.username}** Bạn không thể nhập số âm !`)
        if (args[2] == `all`) soluong = hatgiong
        if (isNaN(soluong)) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn phải nhập chính xác số lượng ${name} thì mới bán được!`)
        if (hatgiong < soluong) return message.channel.send(`${client.emo.fail} | **${message.author.username}**, bạn không có đủ ${name} để bán!`)
        let a = checktienhg(nsprice, name)
        let money = soluong * a
        let thoitiet = ``
        let phantram = 0
        let sophantram = Math.floor(Math.random() * 10) + 1
        let tile = Math.floor(Math.random() * 1000)
        let loi = ``
        if (tile % 2 == 0) thoitiet = `Một Mùa Khỏe Mạnh`, phantram = sophantram / 100, loi = `lời`
        if (tile % 2 !== 0) thoitiet = `Dịch Bệnh Tràn Lan`, phantram = -(sophantram / 100), loi = `lỗ`
        let realmoney = parseInt(money + (money * phantram))
        await client.trugrow(message.author.id, name, soluong, 'ns')
        await client.cong(message.author.id, realmoney)
        await message.channel.send(`${client.emo.done} | **${message.author.username}**, vụ mùa qua thú của bạn trải qua **${thoitiet}**, bạn đã bán **${soluong}** ${name} và thu được **${parseInt(realmoney).toLocaleString('En-Us')} Ycoin** \`[${loi} ${sophantram}%]\``)

      }
      else if (args[1] == `all` && args[0] == 'ns') {
        let nogsa = [
          "🥩",
          "🥚",
          "<a:Ybluemilk:918844687425609739>"
        ]
        const nongsan = await farmSchema.find({
          memberid: message.author.id,
          name: { $in: nogsa },
          type: 'ns'
        })

        let money = 0
        for (let n in nongsan) {
          let ns = nongsan[n]
          let name = ns.name
          let sl = ns.quanlity
          let price = await client.checktienhg(nsprice, name)
          if (isNaN(price)) price = 0
          money += price * sl
          console.log(money)
          ns.quanlity = 0
          await ns.save()
        }
        console.log(money)
        let thoitiet = ``
        let phantram = 0
        let sophantram = Math.floor(Math.random() * 10) + 1
        let tile = Math.floor(Math.random() * 1000)
        let loi = ``
        if (tile % 2 == 0) thoitiet = `Mưa Thuận Gió Hòa`, phantram = sophantram / 100, loi = `lời`
        if (tile % 2 !== 0) thoitiet = `Dịch Bệnh Tràn Lan`, phantram = -(sophantram / 100), loi = `lỗ`
        let realmoney = parseInt(money + (money * phantram))

        await message.channel.send(`${client.emo.done} | **${message.author.username}**, vụ mùa qua, thú nuôi của bạn đã trải qua **${thoitiet}** bạn đã bán tất cả nông sản và thu được **${realmoney.toLocaleString('En-Us')} Ycoin**\`[${loi} ${sophantram}%]\``)
        await client.cong(message.author.id, realmoney)
      }
    }
    else {
      return message.channel.send(`:x: | **${message.author.username}**, bạn phải nhập thứ muốn bán! 
\`Ysell <thu | t | a | animal> [C,U,R,SR,E,P,G,D,V] [số lượng | all (nếu bán bằng ICON)]\`
\`Ysell <nhan | ring | r> <ID Nhẫn>\`
\`Ysell <nongsan | ns | hg | hatgiong> <Tên hoặc ID> <số lượng | all>\`
`)
    }
  }
}
function checkprice(c, u, r, s, e, p, g, d, v, thu) {
  let result = 0
  if (c.includes(thu)) result = 5
  if (u.includes(thu)) result = 15
  if (r.includes(thu)) result = 100
  if (s.includes(thu)) result = 500
  if (e.includes(thu)) result = 1000
  if (p.includes(thu)) result = 100000
  if (g.includes(thu)) result = 30000
  if (d.includes(thu)) result = 70000
  if (v.includes(thu)) result = 130000
  return result
}
function Datecheck(date) {
  let now = new Date(Date.now() + 25200000);
  let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  /* Calculate time until midnight */
  let temp = Math.trunc(((midnight - now) + 86400000) / 1000);
  let seconds = temp % 60;
  temp = Math.trunc(temp / 60);
  let minutes = temp % 60
  temp = Math.trunc(temp / 60);
  let hours = temp % 24;
  temp = Math.trunc(temp / 24);
  let days = temp;

  /* If there is no data */
  if (!date) return { after: true, seconds: seconds, minutes: minutes, hours: hours, days: days, now };

  let pDate = new Date(date);
  let diff = midnight - pDate;

  /* Not past midnight */
  if (diff <= 0) return { after: false, diff: diff, seconds: seconds, minutes: minutes, hours: hours, days: days, now };

  /* Within 1 day */
  else if (diff <= 172810000) return { after: true, diff: diff, withinDay: true, seconds: seconds, minutes: minutes, hours: hours, days: days, now };

  /* Over 1 full day */
  else return { after: true, diff: diff, withinDay: (overrideWithinDay || false), seconds: seconds, minutes: minutes, hours: hours, days: days, now };
}
function checktienhg(array, hg) {
  let phantram = 1
  if (hg == array[0]) result = 500 * phantram
  if (hg == array[1]) result = 500 * phantram
  if (hg == array[2]) result = 800 * phantram
  if (hg == array[3]) result = 800 * phantram
  if (hg == array[4]) _result = 1000 * phantram
  if (hg == array[5]) result = 1000 * phantram
  if (hg == array[6]) result = 1500 * phantram
  if (hg == array[7]) result = 1500 * phantram
  if (hg == array[8]) result = 3000 * phantram

  if (hg == array[9]) result = 3000 * phantram
  if (hg == array[10]) result = 5000
  if (hg == array[11]) result = 5000 * phantram
  if (hg == array[12]) result = 15000 * phantram
  if (hg == array[13]) result = 10000
  if (hg == array[14]) result = 15000
  if (hg == array[15]) result = 25000
  return result
}
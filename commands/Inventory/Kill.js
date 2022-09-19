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
  name: "kill",
  cooldown: 2000,
  description: "● Bán Thú : Ysell <thu | t | a | animal> [C,U,R,SR,E,P,G] [số lượng | all (nếu bán bằng ICON)] | Ysell thu all\n● Bán Nhẫn : Ysell <nhan | ring | r> <ID Nhẫn>\n● Bán Nông Sản : Ysell <nongsan | ns | hg | hatgiong> <Tên hoặc ID> <số lượng | all> | Ysell ns all",
  aliases: [],
  usage: `Ysell <type> <name> [quanlity]`,
  run: async (client, message, args) => {
    const object = args[0]
    let soluong = parseInt(args[1])
    let honthu = await invSchema.findOne({
      memberid: message.author.id,
      name: `<:ThuHon:991633698300624956>`,
      type: `th`
    })
    let thuhon = 0

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

        for (let a in selltype) {
          let thuban = selltype[a]
          let price = checkprice(C, U, R, SR, E, P, G, D, V, thuban.name)
          console.log(price)
          let sl = thuban.quanlity
          sltb += sl
          if (sl >= 1) thuhon += price * sl
          if (sl < 1) thuhon += 0
          thuban.quanlity = 0
          await thuban.save()
        }
        if (!honthu) {
          let newhonthu = new invSchema({
            memberid: message.author.id,
            name: "<:ThuHon:991633698300624956>",
            quanlity: thuhon,
            type: "th",
            price: 0
          })
          await newhonthu.save()

        }
        else {
          honthu.quanlity += thuhon
          await honthu.save()
        }
        await message.channel.send(`<:vvv:921536318062862396> | **${message.author.username}**, bạn đã kill ${sltb} loại **${object}** và thu được **${parseInt(thuhon).toLocaleString('En-Us')} hồn thú**`)
      }
      if (sellname) {
        let thuhon = 0
        if (args[1] == `all`) soluong = sellname.quanlity
        if (soluong > sellname.quanlity) soluong = sellname.quanlity
        if (!args[1]) soluong = 1
        sellname.quanlity -= soluong
        await sellname.save()
        let price = checkprice(C, U, R, SR, E, P, G, D, V, sellname.name)
        thuhon = price * soluong
        if (!honthu) {
          let newhonthu = new invSchema({
            memberid: message.author.id,
            name: "<:ThuHon:991633698300624956>",
            quanlity: thuhon,
            type: "th",
            price: 0
          })
          await newhonthu.save()

        }
        else {
          honthu.quanlity += thuhon
          await honthu.save()
        }
        await message.channel.send(`<:vvv:921536318062862396> | **${message.author.username}**, bạn đã kill **${soluong}** ${sellname.name} và thu được **${parseInt(price * soluong).toLocaleString('En-Us')} hồn thú**`)
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
      let thuhon = 0
      const array = await animalSchema.find(
        { id: message.author.id, name: { $in: ids } }
      ).sort({ quanlity: -1 })
      if (!array[0]) return message.channel.send(`:x: | **${message.author.username}**, bạn làm gì có thú mà bán ?`)
      for (let a in array) {
        var o = array[a];
        i = o.quanlity
        if (o.type == `C`) {
          typeC += i
          thuhon += i * 1
        }
        else if (o.type == `U`) {
          typeU += i
          thuhon += i * 2
        }
        else if (o.type == `R`) {
          typeR += i
          thuhon += i * 3
        }
        else if (o.type == `SR`) {
          typeSR += i
          thuhon += i * 4
        }
        else if (o.type == `E`) {
          typeE += i
          thuhon += i * 5
        }
        else if (o.type == `P`) {
          typeP += i
          thuhon += i * 7
        }
        else if (o.type == `G`) {
          typeG += i
          thuhon += i * 6
        }
        else if (o.type == `D`) {
          typeD += i
          thuhon += i * 8
        }
        else if (o.type == `V`) {
          typeV += i
          thuhon += i * 9
        }
        o.quanlity = 0
        await o.save()
      }
      if (!honthu) {
        let newhonthu = new invSchema({
          memberid: message.author.id,
          name: "<:ThuHon:991633698300624956>",
          quanlity: thuhon,
          type: "th",
          price: 0
        })
        await newhonthu.save()

      }
      else {
        honthu.quanlity += thuhon
        await honthu.save()
      }
      await message.channel.send(`<:vvv:921536318062862396> | **${message.author.username}**, bạn đã kill ${typeC} C, ${typeU} U, ${typeR} R, ${typeSR} SR, ${typeE} E, ${typeP} P, ${typeG} G, ${typeD} D,${typeV} V và thu được **${parseInt(thuhon).toLocaleString('En-Us')} hồn thú**`)
    }

  }
}
function checkprice(c, u, r, s, e, p, g, d, v, thu) {
  let result = 0
  if (c.includes(thu)) result = 1
  if (u.includes(thu)) result = 2
  if (r.includes(thu)) result = 3
  if (s.includes(thu)) result = 4
  if (e.includes(thu)) result = 5
  if (p.includes(thu)) result = 7
  if (g.includes(thu)) result = 6
  if (d.includes(thu)) result = 8
  if (v.includes(thu)) result = 9
  return result
}

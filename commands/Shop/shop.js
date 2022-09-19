const invSchema = require('../../models/invSchema')
const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js')
module.exports = {
  name: 'shop',
  cooldown : 0,
  description: "SHOP ITEM CỦA YULAND, chuyên buôn bán các mặt hàng nhu yếu phẩm <3",
  aliases: ['mua'],
  usage: "[prefix]buy [item]",
  run: async (client, message, args) => {
    let hg1 = `<:Yu_ot:953103262318477342>`
    let hg2 = `<:Yu_lua:953059348777672705>`
    let hg3 = `<:Yu_DauTay:953375220935295047>`
    let hg4 = `<:Yu_ngo:953971194565124186>`
    let hg5 = `<:Yu_cachua:953059348794470420>`
    let hg6 = `<:Yu_Dao:953375136134877294>`
    let hg7 = `<:Yu_khoaimi:953059349637500968>`
    let hg8 = `<:Yu_mia:953103263476117584>`
    let hg9 = `<:Yu_khoaitay:953103263178305566>`
    let hg10 = `<:Yu_DuaGang:953375173225091133>`
    let hg11 = `<:Yu_carot:953103263895535626>`
    let hg12 = `<:Yu_caingot:953059348731543592>`
    let hg13 = `<:Yu_Mit:953237141440327700>`
    const BanSchema = require('../../models/BanSchema')
const ban = await BanSchema.findOne({ memberid: message.author.id })
    if (ban) {
      if (ban.memberid == message.author.id) return
    }
    let member = message.author
    let cash = await client.cash(member.id)
    
    let listshop = new MessageEmbed()
        .setAuthor({name: message.author.username, iconURL : message.author.avatarURL, url : `https://discord.gg/yuland`})
        .setTitle(`Tiệm Tạp Hóa Yubabe`)
        .setThumbnail(`https://cdn.discordapp.com/avatars/936872532932440065/59b3e7c9da97700f3e629fe73714f1b2.webp?size=1024`)
        .setDescription(`
**Xin chào ${message.author}, bạn muốn mua gì ?**.

** <:vngc_discord:917212352410177536> Chọn Mục Bạn Muốn Mua Bên Dưới**

**<:Yu_nhanvangkc:951586992897024060> \`:\` Shop Nhẫn**
**<:Yu_field:953050619558645820> \`:\` Shop Hạt Giống 1**
**<:Yu_field:953050619558645820> \`:\` Shop Hạt Giống 2**
**<:Yu_GaCon:953394343148920902> \`:\` Shop Vật Nuôi**
**<:Yu_camheo:953407482955436062> \`:\` Shop Thức Ăn Vật Nuôi**

[Mời Tôi Về Server Của Bạn!](${`https://discord.com/api/oauth2/authorize?client_id=936872532932440065&permissions=431174843457&scope=bot`})
 `)

        .setFooter({text : `Gõ <YBUY + ID> để mua`, iconURL : `https://cdn.discordapp.com/emojis/953322964764487690.png`})
        .setColor(`#303037`)
    const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('shopop')
                .setPlaceholder('❯ Tạp Hóa Yubabe!')
                .addOptions([
                {
                    label: 'Shop Nhẫn',
                    description: 'Xem nhẫn và mua để MARRY',
                    value: 'ringshop',
                    emoji: '<:Yu_nhanvangkc:951586992897024060>'
                },
                
                {
                    label: 'Shop Hạt Giống 1',
                    description: 'Mua hạt giống trồng cây!',
                    value: 'seedshop1',
                    emoji: "<:Yu_field:953050619558645820>"
                },
                {
                    label: 'Shop Hạt Giống 2',
                    description: 'Mua hạt giống trồng cây!',
                    value: 'seedshop2',
                    emoji: "<:Yu_field:953050619558645820>"
                },
                {
                    label:  'Shop Vật Nuôi',
                    description: 'Mua thú để nuôi lấy nông sản',
                    value: 'cattleshop',
                    emoji: "<:Yu_GaCon:953394343148920902>"
                },
                {
                    label: 'Shop Thức Ăn Vật Nuôi',
                    description: 'Mua thức ăn cho thú!',
                    value: 'cattlefoodshop',
                    emoji: "<:Yu_camheo:953407482955436062>"
                },
            ])
        )
    const shopmsg = await message.channel.send({ embeds: [listshop], components: [row] })
    client.on('interactionCreate', async shopinteraction => {
    if (!shopinteraction.isSelectMenu()) return;
    let options = shopinteraction.values;
    const shoptype = options[0]
  if(shoptype === 'ringshop') {
    const ringshop = new MessageEmbed()
    .setAuthor({name: `Tiệm Tạp Hóa Yubabe`, iconURL :  `https://discordapp.com/channels/896744428100804688/942015852310577162/984313077187108865`, url : `https://discord.gg/yuland`})         
    .setTitle(`SHOP NHẪN`)
    .setDescription(`\`Gõ <YBUY + ID> để mua\`
\`001\` <:Yu_nhanco:951133679546159214> : **__50.000__ Ycoin**
\`002\` <:Yu_nhanbac:941435162728730675> : **__1.000.000__ Ycoin**
\`003\` <:Yu_nhanvang:941435163181727824> : **__10.000.000__ Ycoin**
\`004\` <:Yu_nhankimcuong:941435160883265556> : **__20.000.000__ Ycoin**
\`005\` <:Yu_nhanvangkc:951586992897024060> : **__50.000.000__ Ycoin**
`)
    .setColor("#303037")
    .setFooter({ text : "Cảm ơn bạn đã chọn Yubabe", iconURL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif`})
    .setTimestamp()
        shopmsg.edit({ content: `<@${message.author.id}>`, embeds : [ringshop], components: [row]})
        
    }
  
  if(shoptype === 'seedshop1') {
    const hatgiongshop1 = new MessageEmbed()
    .setAuthor({name: `Tiệm Tạp Hóa Yubabe`, iconURL :  `https://discordapp.com/channels/896744428100804688/942015852310577162/984313077187108865`, url : `https://discord.gg/yuland`})         
    .setTitle(`SHOP HẠT GIỐNG 1`)
    .setDescription(`\`Gõ <YBUY + ID> để mua\`
\`1 - ot\` ${hg1} : **__500__ Ycoin**
=> Thu Hoạch : 30p = 4-5
\`2 - lua\` ${hg2} : **__500__ Ycoin**
=> Thu Hoạch : 30p = 4-5
\`3 - dautay\` ${hg3} : **__800__ Ycoin**
=> Thu Hoạch : 1h = 3-5
\`4 - ngo - bap\` ${hg4} : **__800__ Ycoin**
=> Thu Hoạch : 1h = 3-5
\`5 - cachua\` ${hg5} : **__1000__ Ycoin**
=> Thu Hoạch : 1h30p = 2-5
\`6 - dao\` ${hg6} : **__1000__ Ycoin**
=> Thu Hoạch : 1h30p = 2-5
`)
    .setColor("#303037")
    .setFooter({ text : "Cảm ơn bạn đã chọn Yubabe", iconURL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif`})
    .setTimestamp()
        shopmsg.edit({ content: `<@${message.author.id}>`, embeds : [hatgiongshop1], components: [row]})
        
    }
  if(shoptype === 'seedshop2') {
    const hatgiongshop2 = new MessageEmbed()
    .setAuthor({name: `Tiệm Tạp Hóa Yubabe`, iconURL :  `https://discordapp.com/channels/896744428100804688/942015852310577162/984313077187108865`, url : `https://discord.gg/yuland`})         
    .setTitle(`SHOP HẠT GIỐNG 2`)
    .setDescription(`\`Gõ <YBUY + ID> để mua\`
\`7 - khoaimi\` ${hg7} : **__1.500__ Ycoin**
=> Thu Hoạch : 2h = 2-5
\`8 - mia\` ${hg8} : **__1.500__ Ycoin**
=> Thu Hoạch : 2h = 2-5
\`9 - khoaitay\` ${hg9} : **__3.000__ Ycoin**
=> Thu Hoạch : 4h = 2-4
\`10 - duagang\` ${hg10} : **__3.000__ Ycoin**
=> Thu Hoạch : 4h = 2-4
\`11 - carot\` ${hg11} : **__5.000__ Ycoin**
=> Thu Hoạch : 8h = 2-4
\`12 - caingot\` ${hg12} : **__5.000__ Ycoin**
=> Thu Hoạch : 8h = 2-4
\`13 - mit\` ${hg13} : **__15.000__ Ycoin**
=> Thu Hoạch : 18h = 2-4
`)
    .setColor("#303037")
    .setFooter({ text : "Cảm ơn bạn đã chọn Yubabe", iconURL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif`})
    .setTimestamp()
        shopmsg.edit({ content: `<@${message.author.id}>`, embeds : [hatgiongshop2], components: [row]})
        
    }
  if(shoptype === 'cattleshop') {
    const giasuc = new MessageEmbed()
    .setAuthor({name: `Tiệm Tạp Hóa Yubabe`, iconURL :  `https://discordapp.com/channels/896744428100804688/942015852310577162/984313077187108865`, url : `https://discord.gg/yuland`})         
    .setTitle(`SHOP VẬT NUÔI`)
    .setDescription(`\`Gõ <YBUY + ID> để mua\`
\`ga\` <:Yu_GaCon:953394343148920902> : **__100.000__ Ycoin**
\`bo\` <:Yu_BoCon:953394492503908362> : **__200.000__ Ycoin**
\`heo\` <:Yu_HeoCon:953396171181817997> : **__400.000__ Ycoin** 
`)
    .setColor("#303037")
    .setFooter({ text : "Cảm ơn bạn đã chọn Yubabe", iconURL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif`})
    .setTimestamp()
        shopmsg.edit({ content: `<@${message.author.id}>`, embeds : [giasuc], components: [row]})
        
    }
  if(shoptype === 'cattlefoodshop') {
    const thucangiasuc = new MessageEmbed()
    .setAuthor({name: `Tiệm Tạp Hóa Yubabe`, iconURL :  `https://discordapp.com/channels/896744428100804688/942015852310577162/984313077187108865`, url : `https://discord.gg/yuland`})         
    .setTitle(`SHOP THỨC ĂN VẬT NUÔI`)
    .setDescription(`\`Gõ <YBUY + ID> để mua\`
\`thoc\` <:Yu_thoc:953407482884161566> : **__2.000__ Ycoin**
\`co\` <:Yu_co:953408530474475520> : **__6.000__ Ycoin**
\`camheo\` <:Yu_camheo:953407482955436062> : **__12.000__ Ycoin**
`)
    .setColor("#303037")
    .setFooter({ text : "Cảm ơn bạn đã chọn Yubabe", iconURL: `https://media.discordapp.net/attachments/978011752610557972/983700981961343026/919967569287446568.gif`})
    .setTimestamp()
        shopmsg.edit({ content: `<@${message.author.id}>`, embeds : [thucangiasuc], components: [row]})
        
    }
    })
   
    
    
  }
}
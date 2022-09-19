// Đây là file hỗ trợ thu gọn cách các Schema Hoạt Động!
const overrideWithinDay = false
const moneySchema = require('../models/moneySchema')
const praySchema = require('../models/praySchema')
const bankSchema = require('../models/bankSchema')
const vipSchema = require('../models/vipSchema')
const fishingbuff = require('../models/fishingbuff')
const powerfishing = require('../models/powerfishing')
const animalSchema = require('../models/animalSchema')
const cropSchema = require('../models/farmcrops')
const fishingSchema = require('../models/fishingSchema')
const fieldSchema = require('../models/fieldSchema')
const farmSchema = require('../models/../models/farmSchema')
const factorySchema = require('../models/factorySchema')
const growSchema = require('../models/growSchema')
const cattleSchema = require('../models/farmanimals')
const zoopointSchema = require('../models/zoopointSchema')
const gemSchema = require('../models/gemSchema')
const buffSchema = require('../models/buffSchema')
const BanSchema = require('../models/BanSchema')
const cooldownSchema = require('../models/cooldownSchema')
const userSchema = require('../models/userSchema')
const characterSchema = require('../models/characterSchema')
const badgeSchema = require('../models/../models/badgeSchema')
const CONFIG = require('../models/../config/config.json')
const DO = require('../models/../config/do.json')
const items = require('../models/../config/item.json')
const BJ = require('../models/../config/blackjack.json')
const expSchema = require('../models/ExpSchema')
const levelSchema = require('../models/ExplvSchema')
const teamSchema = require('../models/teamSchema')
const heroSchema = require('../models/heroSchema')
module.exports = (client) => {
  client.teamadd = async (id, name1, name2, name3) => {
    let hero1 = await heroSchema.findOne({ name: name1 })
    let hero2 = await heroSchema.findOne({ name: name2 })
    let hero3 = await heroSchema.findOne({ name: name3 })
    if (!hero1 || !hero2 || !hero3) return
    let team = await teamSchema.findOne({ id: id })
    if (!team
    ) {
      team = new teamSchema({
        id: id,
        hero1: {
          name: name1,
          nguhanh: hero1.nguhanh,
          hp: hero1.hp + (hero1.power * 2),
          mana: hero1.mana + (hero1.agility * 2),
          def: hero1.def + (hero1.power),
          mdef: hero1.mdef + hero1.agility,
          agility: hero1.agility,
          power: hero1.power,
          gender: hero1.gender,
          exp: 0,
          noitai: false,
          nhanhnhen: hero1.nhanhnhen,
          skill1: hero1.skill1,
          skill2: hero1.skill2,
          skill3: hero1.skill3,
          skill4: hero1.skill4
        },
        hero2: {
          name: name2,
          nguhanh: hero2.nguhanh,
          hp: hero2.hp + (hero2.power * 2),
          mana: hero2.mana + (hero2.agility * 2),
          def: hero2.def + (hero2.power),
          mdef: hero2.mdef + hero2.agility,
          agility: hero2.agility,
          power: hero2.power,
          gender: hero2.gender,
          exp: 0,
          noitai: false,
          nhanhnhen: hero2.nhanhnhen,
          skill1: hero2.skill1,
          skill2: hero2.skill2,
          skill3: hero2.skill3,
          skill4: hero2.skill4
        },
        hero3: {
          name: name3,
          nguhanh: hero3.nguhanh,
          hp: hero3.hp + (hero3.power * 2),
          mana: hero3.mana + (hero3.agility * 2),
          def: hero3.def + (hero3.power),
          mdef: hero3.mdef + hero3.agility,
          agility: hero3.agility,
          power: hero3.power,
          gender: hero3.gender,
          exp: 0,
          noitai: false,
          nhanhnhen: hero3.nhanhnhen,
          skill1: hero3.skill1,
          skill2: hero3.skill2,
          skill3: hero3.skill3,
          skill4: hero3.skill4
        }
      })
      await team.save()
    } else {
      await team.deleteOne({ id: id })
      let addteam = new teamSchema({
        id: id,
        hero1: {
          name: name1,
          nguhanh: hero1.nguhanh,
          hp: hero1.hp + (hero1.power * 2),
          mana: hero1.mana + (hero1.agility * 2),
          def: hero1.def + (hero1.power),
          mdef: hero1.mdef + hero1.agility,
          agility: hero1.agility,
          power: hero1.power,
          gender: hero1.gender,
          exp: 0,
          noitai: false,
          nhanhnhen: hero1.nhanhnhen,
          skill1: hero1.skill1,
          skill2: hero1.skill2,
          skill3: hero1.skill3,
          skill4: hero1.skill4
        },
        hero2: {
          name: name2,
          nguhanh: hero2.nguhanh,
          hp: hero2.hp + (hero2.power * 2),
          mana: hero2.mana + (hero2.agility * 2),
          def: hero2.def + (hero2.power),
          mdef: hero2.mdef + hero2.agility,
          agility: hero2.agility,
          power: hero2.power,
          gender: hero2.gender,
          exp: 0,
          noitai: false,
          nhanhnhen: hero2.nhanhnhen,
          skill1: hero2.skill1,
          skill2: hero2.skill2,
          skill3: hero2.skill3,
          skill4: hero2.skill4
        },
        hero3: {
          name: name3,
          nguhanh: hero3.nguhanh,
          hp: hero3.hp + (hero3.power * 2),
          mana: hero3.mana + (hero3.agility * 2),
          def: hero3.def + (hero3.power),
          mdef: hero3.mdef + hero3.agility,
          agility: hero3.agility,
          power: hero3.power,
          gender: hero3.gender,
          exp: 0,
          noitai: false,
          nhanhnhen: hero3.nhanhnhen,
          skill1: hero3.skill1,
          skill2: hero3.skill2,
          skill3: hero3.skill3,
          skill4: hero3.skill4
        }
      })
      await addteam.save()
    }

    function checkstat(names) {
      if (names == `<:Hoa_HocGia_3sao:997053798876987403>`) {
        return { nguhanh: `hoa`, hp: 150, mana: 100, def: 2, mdef: 2, agility: 5, power: 5, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 0, nhanhnhen: 1 }
      }
      else if (names == `<:Loi_DaoSy_3sao:997052886829772860>`) {
        return { nguhanh: `loi`, hp: 150, mana: 300, def: 3, mdef: 3, agility: 6, power: 3, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 0, nhanhnhen: 1 }
      }
      else if (names == `<:Phong_TieuMy_3sao:997052870660718672>`) {
        return { nguhanh: `phong`, hp: 150, mana: 150, def: 3, mdef: 3, agility: 3, power: 6, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 0, nhanhnhen: 1 }
      }
      else if (names == `<:Thuy_ThuanBinh_3sao:997052852545519686>`) {
        return { nguhanh: `thuy`, hp: 250, mana: 100, def: 4, mdef: 3, agility: 3, power: 4, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 0, nhanhnhen: 1 }
      }
      else if (names == `<:Thuy_CungBinh_2sao:997052999123881985>`) {
        return { nguhanh: `thuy`, hp: 200, mana: 50, def: 2, mdef: 2, agility: 1, power: 3, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 0, nhanhnhen: 1 }
      }
      else if (names == `<:Loi_ThichKhach_2sao:997053035689812049>`) {
        return { nguhanh: `loi`, hp: 150, mana: 100, def: 2, mdef: 2, agility: 1, power: 3, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 0, nhanhnhen: 1 }
      }
      else if (names == `<:Phong_TieuHan_2sao:997053017213902860>`) {
        return { nguhanh: `phong`, hp: 150, mana: 100, def: 2, mdef: 3, agility: 3, power: 2, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 0, nhanhnhen: 1 }
      }
      else if (names == `<:Hoa_NoTy_2sao:997052978685038653>`) {
        return { nguhanh: `hoa`, hp: 150, mana: 100, def: 2, mdef: 3, agility: 3, power: 2, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 0, nhanhnhen: 1 }

      }
      else if (names == `<:Hoa_ChucDung:992760936530182194>`) {
        return { nguhanh: `hoa`, hp: 500, mana: 100, def: 5, mdef: 5, agility: 5, power: 10, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 3 }

      }
      else if (names == `<:Hoa_VoHau:992760791285645323>`) {
        return { nguhanh: `hoa`, hp: 350, mana: 200, def: 4, mdef: 6, agility: 12, power: 3, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 3 }

      }
      else if (names == `<:Hoa_TieuViem:992760692140691559>`) {
        return { nguhanh: `hoa`, hp: 520, mana: 100, def: 7, mdef: 3, agility: 6, power: 15, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 3 }

      }
      else if (names == `<:Hoa_PhanThien:992759800754602074>`) {
        return { nguhanh: `hoa`, hp: 300, mana: 200, def: 5, mdef: 6, agility: 13, power: 6, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 3 }

      }
      else if (names == `<:Hoa_MyNuong:992760858398691408>`) {
        return { nguhanh: `hoa`, hp: 500, mana: 200, def: 4, mdef: 4, agility: 16, power: 6, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 3 }

      }
      else if (names == `<:Thuy_VanQuan:993522705632591993>`) {
        return { nguhanh: `thuy`, hp: 450, mana: 300, def: 5, mdef: 5, agility: 14, power: 7, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 2 }

      }
      else if (names == `<:Thuy_TieuHuan:993522906510397500>`) {
        return { nguhanh: `thuy`, hp: 450, mana: 300, def: 5, mdef: 5, agility: 14, power: 7, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 2 }

      }
      else if (names == `<:Thuy_LyMongHoa:993522865838235768>`) {
        return { nguhanh: `thuy`, hp: 450, mana: 300, def: 5, mdef: 5, agility: 16, power: 7, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 2 }

      }
      else if (names == `<:Thuy_TheDan:993522779372650526>`) {
        return { nguhanh: `thuy`, hp: 550, mana: 300, def: 5, mdef: 8, agility: 7, power: 15, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 2 }

      }
      else if (names == `<:Thuy_PhuongKy:993522759948832818>`) {
        return { nguhanh: `thuy`, hp: 450, mana: 300, def: 5, mdef: 5, agility: 17, power: 8, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 2 }

      }
      else if (names == `<:Phong_LyThuanPhong:995737059018948709>`) {
        return { nguhanh: `phong`, hp: 550, mana: 300, def: 7, mdef: 5, agility: 6, power: 14, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 5 }

      }
      else if (names == `<:Phong_TrinhGiaoKim:995737035308548196>`) {
        return { nguhanh: `phong`, hp: 700, mana: 200, def: 7, mdef: 7, agility: 3, power: 16, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 5 }

      }
      else if (names == `<:Phong_PhiYen:995737127046369320>`) {
        return { nguhanh: `phong`, hp: 500, mana: 200, def: 4, mdef: 6, agility: 13, power: 3, gender: `nu`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 5 }

      }
      else if (names == `<:Phong_BachKhoi:995737163700375653>`) {
        return { nguhanh: `phong`, hp: 700, mana: 200, def: 7, mdef: 7, agility: 12, power: 12, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 5 }

      }
      else if (names == `<:Phong_TrieuPhong:995737198919946351>`) {
        return { nguhanh: `phong`, hp: 500, mana: 200, def: 5, mdef: 5, agility: 3, power: 12, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 5 }

      }
      else if (names == `<:Loi_HuyenMinh:996015474078912522>`) {
        return { nguhanh: `loi`, hp: 500, mana: 400, def: 4, mdef: 7, agility: 18, power: 2, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 6 }
      }
      else if (names == `<:Loi_LoiChanTu:996015638231392256>`) {
        return { nguhanh: `loi`, hp: 700, mana: 300, def: 7, mdef: 7, agility: 9, power: 12, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 6 }
      }
      else if (names == `<:Loi_KeQuang:996015516915347536>`) {
        return { nguhanh: `loi`, hp: 600, mana: 300, def: 5, mdef: 6, agility: 16, power: 9, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 6 }
      }
      else if (names == `<:Loi_LoiChinh:996015575945969725>`) {
        return { nguhanh: `loi`, hp: 700, mana: 400, def: 7, mdef: 7, agility: 16, power: 14, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 6 }
      }
      else if (names == `<:Loi_GiaCatLuong:996015683844440144>`) {
        return { nguhanh: `loi`, hp: 500, mana: 500, def: 5, mdef: 5, agility: 20, power: 5, gender: `nam`, skill1: 1, skill2: 1, skill3: 0, skill4: 1, nhanhnhen: 6 }
      }
    }
  }
  client.hg = CONFIG.hatgiong
  client.emo = DO.lenh
  client.vukhi = items.vukhi
  client.daren = items.daren
  client.honkhi = items.honkhi
  client.item = items.tieuhao
  client.bat = DO.nv
  client.bj = BJ.bj
  client.activatepassport = (id, type) => {
    vipSchema.findOne({ memberid: id, type: type }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.used = Date.now();
      } else {
        data = new vipSchema({ memberid: id, type: type, used: Date.now() })
      }
      data.save();
    }
    );
  }
  client.datepassport = (id) => new Promise(async ful => {
    const data = await vipSchema.findOne({ memberid: `${id}` });
    if (!data) return ful(null);
    ful(data.used);
  })
  client.checkpassport = function(date) {
    let timeout = date + 2629743830;
    let temp = Math.trunc(((timeout - Date.now())) / 1000);
    let seconds = temp % 60;
    temp = Math.trunc(temp / 60);
    let minutes = temp % 60
    temp = Math.trunc(temp / 60);
    let hours = temp % 24;
    temp = Math.trunc(temp / 24);
    let days = temp;

    /* If there is no data */
    if (!date) return { after: true, s: seconds, m: minutes, h: hours, d: days };
    let diff = Date.now() - timeout
    /* Not past midnight */
    if (diff <= 0) return { after: false, diff: diff, s: seconds, m: minutes, h: hours, d: days };
    else return { after: true, diff: diff, withinDay: (overrideWithinDay || false), s: seconds, m: minutes, h: hours, d: days };
  }
  client.sonho = function toSmallNum(array, count, digits) {
    var result = '';
    var num = count;
    if (count < 0) count = 0;
    for (i = 0; i < digits; i++) {
      var digit = count % 10;
      count = Math.trunc(count / 10);
      result = array.numbers[digit] + result;
    }
    return result;
  }
  client.checktienhg = async function(array, hg) {
    if (hg == array[0]) return result = 500
    if (hg == array[1]) return result = 500
    if (hg == array[2]) return result = 800
    if (hg == array[3]) return result = 800
    if (hg == array[4]) return result = 1000
    if (hg == array[5]) return result = 1000
    if (hg == array[6]) return result = 1500
    if (hg == array[7]) return result = 1500
    if (hg == array[8]) return result = 3000
    if (hg == array[9]) return result = 3000
    if (hg == array[10]) return result = 5000
    if (hg == array[11]) return result = 5000
    if (hg == array[12]) return result = 15000
    if (hg == array[13]) return result = 10000
    if (hg == array[14]) return result = 15000
    if (hg == array[15]) return result = 18000
  }
  client.batdaunv = async function(id, name) {
    const data = await characterSchema.findOne({ memberid: id });
    if (!data) {
      let add = new characterSchema({
        memberid: id,
        name: name,
        hp: 100,
        mana: 100,
        def: 0,
        magicdef: 0,
        sucmanh: 0,
        nhanhnhen: 0,
        triluc: 0,
        maluc: 0,
        hapdan: 0,
        theluc: 0,
        exp: 0,
        level: 0,
      })
      await add.save()
      return {
        name: name,
        hp: 100,
        mana: 100,
        def: 0,
        magicdef: 0,
        sucmanh: 0,
        nhanhnhen: 0,
        triluc: 0,
        maluc: 0,
        hapdan: 0,
        theluc: 0,
        exp: 0,
        level: 0,
      }
    }
    else {
      return {
        name: data.name,
        hp: data.hp,
        mana: data.mana,
        def: data.def,
        magicdef: data.magicdef,
        sucmanh: data.sucmanh,
        nhanhnhen: data.nhanhnhen,
        triluc: data.triluc,
        maluc: data.maluc,
        hapdan: data.hapdan,
        theluc: data.theluc,
        exp: data.exp,
        level: data.level,
      }
    }
  }
  client.nv = async function(id) {
    const data = await characterSchema.findOne({ memberid: id });
    if (!data) {
      return result = false
    }
    else {
      return {
        name: data.name,
        hp: data.hp,
        mana: data.mana,
        def: data.def,
        magicdef: data.magicdef,
        sucmanh: data.sucmanh,
        nhanhnhen: data.nhanhnhen,
        triluc: data.triluc,
        maluc: data.maluc,
        hapdan: data.hapdan,
        theluc: data.theluc,
        exp: data.exp,
        level: data.level,
      }
    }
  }
  client.addcs = async function(id, name, loaichiso, soluong) {
    const data = await characterSchema.findOne({ memberid: id });
    if (loaichiso == `sucmanh`) {
      data.sucmanh += soluong
      await data.save()
    } else if (loaichiso == `nhanhnhen`) {
      data.nhanhnhen += soluong
      await data.save()
    } else if (loaichiso == `triluc`) {
      data.triluc += soluong
      await data.save()
    } else if (loaichiso == `maluc`) {
      data.maluc += soluong
      await data.save()
    } else if (loaichiso == `hapdan`) {
      data.hapdan += soluong
      await data.save()
    } else if (loaichiso == `theluc`) {
      data.theluc += soluong
      await data.save()
    } else if (loaichiso == `exp`) {
      data.exp += soluong
      await data.save()
    } else if (loaichiso == `level`) {
      data.level += soluong
      await data.save()
    } else if (loaichiso == `hp`) {
      data.hp += soluong
      await data.save()
    } else if (loaichiso == `mana`) {
      data.mana += soluong
      await data.save()
    } else if (loaichiso == `def`) {
      data.def += soluong
      await data.save()
    } else if (loaichiso == `magicdef`) {
      data.magicdef += soluong
      await data.save()
    }
    if (!data) {

      return result = false
    }
    return result = true

  }
  client.trucs = async function(id, name, loaichiso, soluong) {
    const data = await characterSchema.findOne({ memberid: id });
    if (loaichiso == `sucmanh`) {
      data.sucmanh -= soluong
      await data.save()
    } else if (loaichiso == `nhanhnhen`) {
      data.nhanhnhen -= soluong
      await data.save()
    } else if (loaichiso == `triluc`) {
      data.triluc -= soluong
      await data.save()
    } else if (loaichiso == `maluc`) {
      data.maluc -= soluong
      await data.save()
    } else if (loaichiso == `hapdan`) {
      data.hapdan -= soluong
      await data.save()
    } else if (loaichiso == `theluc`) {
      data.theluc -= soluong
      await data.save()
    } else if (loaichiso == `exp`) {
      data.exp -= soluong
      await data.save()
    } else if (loaichiso == `level`) {
      data.level -= soluong
      await data.save()
    } else if (loaichiso == `hp`) {
      data.hp -= soluong
      await data.save()
    } else if (loaichiso == `mana`) {
      data.mana -= soluong
      await data.save()
    } else if (loaichiso == `def`) {
      data.def -= soluong
      await data.save()
    } else if (loaichiso == `magicdef`) {
      data.magicdef -= soluong
      await data.save()
    }
    if (!data) {
      return result = false
    }
    return result = true

  }
  client.yuker = async function(id) {
    const data = await userSchema.findOne({ memberid: id });
    if (!data) {
      return { status: false, name: `Người Dùng Vô Danh`, vip: `Chưa Đăng Ký`, pro: `Chưa Đăng Ký`, about: `Không Có Danh Hiệu`, description: `Không Có Giới Thiệu` }
    }
    else {
      return { status: true, name: data.membername, vip: data.vip, pro: data.pro, about: data.about, description: data.description }
    }
  }
  client.adduser = async function(id, name) {
    const data = await userSchema.findOne({ memberid: id });
    if (!data) {
      const add = new userSchema({
        memberid: id,
        membername: name,
        vip: `Chưa Đăng Ký`,
        pro: `Chưa Đăng Ký`,
        avatar: ``,
        about: `Nông Dân Chăm Chỉ`,
        description: `Người Bạn Thân Thiện Của Yubabe`,
      })
      add.save()
      return result = true
    }
    else return result = false
  }
  client.sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
  client.timeout = (id, cmd) => {
    cooldownSchema.findOne({ key: `${id}.${cmd}` }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.cooldown = Date.now();
      } else {
        data = new cooldownSchema({ key: `${id}.${cmd}`, cooldown: Date.now() })
      }
      data.save();
    }
    );
  }
  client.cd = (id, cmd) => new Promise(async ful => {
    const data = await cooldownSchema.findOne({ key: `${id}.${cmd}` });
    if (!data) return ful(null);
    ful(data.cooldown);
  })
  client.checkcd = function(date, cd) {
    let timeout = date + cd;
    let temp = Math.trunc(((timeout - Date.now())) / 1000);
    let seconds = temp % 60;
    temp = Math.trunc(temp / 60);
    let minutes = temp % 60
    temp = Math.trunc(temp / 60);
    let hours = temp % 24;
    temp = Math.trunc(temp / 24);
    let days = temp;

    /* If there is no data */
    if (!date) return { after: true, s: seconds, m: minutes, h: hours, d: days };
    let diff = Date.now() - timeout
    /* Not past midnight */
    if (diff <= 0) return { after: false, diff: diff, s: seconds, m: minutes, h: hours, d: days };
    else return { after: true, diff: diff, withinDay: (overrideWithinDay || false), s: seconds, m: minutes, h: hours, d: days };
  }
  client.newday = async function(date) {
    let now = new Date(Date.now() + 25200000);
    let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(Date.now() + 25200000));

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

    let pDate = new Date(date + 25200000);
    let diff = midnight - pDate;

    /* Not past midnight */
    if (diff <= 0) return { after: false, diff: diff, seconds: seconds, minutes: minutes, hours: hours, days: days, now };

    /* Within 1 day */
    else if (diff <= 172810000) return { after: true, diff: diff, withinDay: true, seconds: seconds, minutes: minutes, hours: hours, days: days, now };

    /* Over 1 full day */
    else return { after: true, diff: diff, withinDay: (overrideWithinDay || false), seconds: seconds, minutes: minutes, hours: hours, days: days, now };
  }
  //xem ngọc
  client.gem = (memberid, typeS) => new Promise(async ful => {
    const data = await gemSchema.findOne({ memberid: memberid, typeS: typeS });
    if (!data) return ful(0);
    ful(data.quanlity);
  })
  //add ngọc
  client.addgem = (memberid, types, quanlity, type) => {
    gemSchema.findOne({ memberid: memberid, typeS: types }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.quanlity += quanlity;
        data.type = type
      } else {
        data = new gemSchema({ memberid: memberid, typeS: types, quanlity: quanlity, type: type })
      }
      data.save();
    }
    );
  }
  //trừ ngọc
  client.trugem = (memberid, type, quanlity) => {
    gemSchema.findOne({ memberid, typeS: type }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.quanlity -= quanlity;
      } else {
        return
      }
      data.save();
    }
    );
  }
  //xem buff
  client.buff = (memberid, type) => new Promise(async ful => {
    const data = await buffSchema.findOne({ memberid: memberid, type: type });
    if (!data) return ful(0);
    ful(data.quanlity);
  })
  //add buff
  client.addbuff = (memberid, type, quanlity, heso) => {
    buffSchema.findOne({ memberid, type }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.quanlity += quanlity;
        data.heso = heso
      } else {
        data = new buffSchema({ memberid: memberid, quanlity: quanlity, type: type, heso: heso })
      }
      data.save();
    }
    );
  }
  //trừ buff
  client.trubuff = (memberid, type, quanlity) => {
    buffSchema.findOne({ memberid, type }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.quanlity -= quanlity;
      } else {
        return
      }
      data.save();
    }
    );
  }
  // XEM nông sản
  client.grow = (id, name) => new Promise(async ful => {
    const data = await farmSchema.findOne({ memberid: id, name: name });
    if (!data) return ful(0);
    ful(data.quanlity);
  })
  //THÊM Nông sản KHI MUA HOẶC THU HOẠCH
  client.addgrow = (id, name, quanlity, type) => {
    farmSchema.findOne({ memberid: id, name: name }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.quanlity += quanlity;
      } else {
        data = new farmSchema({ memberid: id, name: name, quanlity: quanlity, type: type })
      }
      data.save();
    }
    );
  }
  //TRỪ nông sản
  client.trugrow = (id, name, quanlity, type) => {
    farmSchema.findOne({ memberid: id, name: name }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.quanlity -= quanlity;
      } else {
        return
      }
      data.save();
    }
    );
  }
  // cái này là hunt thú
  client.animal = (id, name, quanlity, type) => {
    animalSchema.findOne({ id, name }, async (err, animals) => {
      if (err) throw err
      if (animals) {
        animals.quanlity += quanlity;
        await animals.save()
      } else {
        const addanimals = new animalSchema({ id: id, name: name, quanlity: quanlity, type: type })
        await addanimals.save()
      }

    }
    );
  }
  // cái này là bán thú
  client.banthu = (name, quanlity) => {
    animalSchema.findOne({ name }, async (err, data) => {
      if (err) throw err
      if (data) {
        data.quanlity -= quanlity;
      } else {
        return
      }
      data.save();
    }
    );
  }
  //cái này là xem hạt giống

  // cái này là xem zoo
  client.zoo = (name) => new Promise(async ful => {
    const data = await animalSchema.findOne({ name });
    if (!data) return ful(0)
    ful(data.quanlity);
  })
  // check tiền
  client.cash = (id) => new Promise(async ful => {
    const data = await moneySchema.findOne({ id });
    if (!data) return ful(0);
    ful(data.coins);
  })
  // add tiền
  client.cong = (id, coins) => {
    moneySchema.findOne({ id }, async (err, data) => {
      if (err) throw err;
      if (data) {
        data.coins += coins;
      } else {
        data = new moneySchema({ id, coins })
      }
      data.save();
    })
  }
  // trừ tiền
  client.tru = (id, coins) => {
    moneySchema.findOne({ id }, async (err, data) => {
      if (err) throw err;
      if (data) {
        data.coins -= coins;
      } else {
        data = new moneySchema({ id, coins: -coins })
      }
      data.save();
    })
  }
  // gửi tiền
  client.tietkiem = (id, coins) => {
    bankSchema.findOne({ id }, async (err, data) => {
      if (err) throw err;
      if (data) {
        data.coins += coins;
      } else {
        data = new bankSchema({ id, coins: +coins })
      }
      data.save();
    })
  }
  // rút tiền
  client.ruttien = (id, coins) => {
    bankSchema.findOne({ id }, async (err, data) => {
      if (err) throw err;
      if (data) {
        data.coins -= coins;
      } else {
        data = new bankSchema({ id, coins: -coins })
      }
      data.save();
    })
  }
  // check bank
  client.bank = (id) => new Promise(async ful => {
    const data = await bankSchema.findOne({ id });
    if (!data) return ful(0);
    ful(data.coins);
  })
  // số pray
  client.prayed = (id) => new Promise(async ful => {
    const data = await praySchema.findOne({ id });
    if (!data) return ful(0);
    ful(data.prays);
  })
  // cộng pray
  client.pray = (id) => {
    praySchema.findOne({ id }, async (err, data) => {
      if (err) throw err;
      if (data) {
        data.prays += 1;
      } else {
        data = new praySchema({ id, prays: 1 })
      }
      data.save();
    })
  }
  client.curse = (id) => {
    praySchema.findOne({ id }, async (err, data) => {
      if (err) throw err;
      if (data) {
        data.prays -= 1;
      }
      else {
        data = new praySchema({ id, prays: -1 })
      }
      data.save();
    })

  }
  //cộng point zoo
  client.addpoint = (zooid, quanlity) => {
    zoopointSchema.findOne({ zooid }, async (err, zoopoint) => {
      if (err) throw err
      if (zoopoint) {
        zoopoint.quanlity += quanlity;
      } else {
        zoopoint = new zoopointSchema({ zooid: zooid, quanlity: quanlity })
      }
      zoopoint.save();
    }
    );
  }
  //xem point zoo
  client.zoopoint = (zooid) => new Promise(async ful => {
    const data = await zoopointSchema.findOne({ zooid });
    if (!data) return ful(0);
    ful(data.quanlity);
  })

  client.chuyentrang1 = async function swap_pages1(client, message, embeds, seconds) {
    let currentPage = 0;
    const { MessageButton, MessageActionRow } = require("discord-buttons");
    let button1 = new MessageButton()
      .setStyle('green')
      .setLabel('First')
      .setID('first');
    let button2 = new MessageButton()
      .setStyle('blurple')
      .setLabel('Back')
      .setID('back');
    let button3 = new MessageButton()
      .setStyle('gray')
      .setLabel('Cancel')
      .setID('home');
    let button4 = new MessageButton()
      .setStyle('blurple')
      .setLabel('Next')
      .setID('next');
    let button5 = new MessageButton()
      .setStyle('green')
      .setLabel('Last')
      .setID('last');

    let buttonrow = new MessageActionRow()
      .addComponent(button1)
      .addComponent(button2)
      .addComponent(button3)
      .addComponent(button4)
      .addComponent(button5)

    if (embeds.length === 1) return message.channel.send({ embeds: [embeds[0]] })
    const queueEmbed = await message.channel.send(
      {
        content: `**Current Page - ${currentPage + 1}/${embeds.length}**`,
        component: buttonrow,
        embeds: [embeds[currentPage]]
      }
    );

    const collector = queueEmbed.createButtonCollector((button) => button.clicker.user.id === message.author.id, { time: seconds * 1000 })

    collector.on("collect", async (b) => {
      try {
        b.defer();
        if (b.id == "next") {
          if (currentPage < embeds.length - 1) {
            currentPage++;
            queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], component: buttonrow });
          } else {
            currentPage = 0
            queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], component: buttonrow });
          }
        } else if (b.id == "back") {
          if (currentPage !== 0) {
            --currentPage;
            queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], component: buttonrow });
          } else {
            currentPage = embeds.length - 1
            queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], component: buttonrow });
          }
        } else if (b.id == "first") {
          currentPage = 0;
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], component: buttonrow });
        } else if (b.id == "last") {
          currentPage = embeds.length - 1;
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], component: buttonrow });
        }
        else {
          button1 = new MessageButton()
            .setStyle('green')
            .setDisabled()
            .setLabel('First')
            .setID('first');
          button2 = new MessageButton()
            .setStyle('blurple')
            .setDisabled()
            .setLabel('Back')
            .setID('back');
          button3 = new MessageButton()
            .setStyle('gray')
            .setDisabled()
            .setLabel('Cancel')
            .setID('home');
          button4 = new MessageButton()
            .setStyle('blurple')
            .setLabel('Next')
            .setDisabled()
            .setID('next');
          button5 = new MessageButton()
            .setStyle('green')
            .setLabel('Last')
            .setDisabled()
            .setID('last');

          buttonrow = new MessageActionRow()
            .addComponent(button1)
            .addComponent(button2)
            .addComponent(button3)
            .addComponent(button4)
            .addComponent(button5)

          currentPage = 0
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], component: buttonrow });
        }
      } catch { }
    });
  }
  client.chuyentrang2 = async function swap_pages3(client, message, embeds) {
    let currentPage = 0;
    const { MessageButton, MessageActionRow } = require("discord.js");

    let buttonrow1 = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('⏪')
          .setCustomId('first'),
        new MessageButton()
          .setStyle('SECONDARY')
          .setLabel('⬅️')
          .setCustomId('back'),
        new MessageButton()
          .setStyle('SUCCESS')
          .setLabel('❌')
          .setCustomId('home'),

        new MessageButton()
          .setStyle('SECONDARY')
          .setLabel('➡️')
          .setCustomId('next'),
        new MessageButton()
          .setStyle('PRIMARY')
          .setLabel('⏩')
          .setCustomId('last')
      );




    if (embeds.length === 1) return interaction.reply({ embeds: [embeds[0]] })
    const queueEmbed = await message.reply(
      {
        content: `**Current Page - ${currentPage + 1}/${embeds.length}**`,
        components: [buttonrow1],
        embeds: [embeds[currentPage]]
      }
    );



    const collector = queueEmbed.createMessageComponentCollector({
      filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
    })

    collector.on("collect", (interaction) => {





      if (interaction.customId == "next") {
        if (currentPage < embeds.length - 1) {
          currentPage++;
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        } else {
          currentPage = 0
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        }
      } else if (interaction.customId == "back") {

        if (currentPage !== 0) {
          --currentPage;
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        } else {
          currentPage = embeds.length - 1
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        }
      } else if (interaction.customId == "first") {

        currentPage = 0;
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });

      } else if (interaction.customId == "last") {

        currentPage = embeds.length - 1;
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });

      } else if (interaction.customId == "home") {

        interaction.message.delete()
      }


    })



  }
  client.chuyentrang3 = async function swap_pages2(client, message, embeds) {
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
    )
    var collector = queueEmbed.createMessageComponentCollector({
      filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
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
  client.chuyentrangfull = async function chuyen_trang(client, message, author, embeds, home, menu) {
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

    if (embeds.length === 1) return message.edit({ embeds: [embeds[0]] })
    const queueEmbed = await message.edit(
      {
        content: `**Current Page - ${currentPage + 1}/${embeds.length}**`,
        components: [buttonrow1],
        embeds: [embeds[currentPage]]
      }
    )
    var collector = queueEmbed.createMessageComponentCollector({
      filter: interaction => (interaction.isButton() || interaction.isSelectMenu()) && interaction.message.author.id == client.user.id,
    })
    collector.on("collect", (interaction) => {
      if (interaction.user.id !== author.id) return interaction.reply({ content: "Không phải nút dành cho bạn!", ephemeral: true })
      if (interaction.customId == "next-page") {
        if (currentPage < embeds.length - 1) {
          currentPage++;
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        }
        else {
          currentPage = 0
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        }
      }
      else if (interaction.customId == "back-page") {
        if (currentPage !== 0) {
          --currentPage;
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        } else {
          currentPage = embeds.length - 1
          queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        }
      }
      else if (interaction.customId == "skip-page1") {
        currentPage = 0;
        // queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        // queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      }
      else if (interaction.customId == "skip-page2") {
        currentPage = embeds.length - 1;
        queueEmbed.edit({ content: `**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds: [embeds[currentPage]], components: [buttonrow1] });
      }
      else if (interaction.customId == "home-page") {
        interaction.message.edit({ embeds: [home], components: [menu] })
      }
    })
  }
  client.expchat = async function expchat(client, memberid, message) {
    let a = await client.cd(memberid, `expchat`)
    let data = await client.newday(a)
    let after = data.after
    let exp = await expSchema.findOne({ memberid })
    let lv = await levelSchema.findOne({ memberid })
    let quanlity = await expSchema.findOne({ memberid: `${memberid}.limitday` })
    if (!quanlity) {
      quanlity = new expSchema({ memberid: `${memberid}.limitday`, exp: 20 })
      await quanlity.save()
    }
    let limit = 20
    if (quanlity) limit = quanlity.exp
    if (limit > 0) {
      let plus = Math.floor(Math.random() * 99)
      if (!exp) {
        exp = new expSchema({ memberid, exp: plus })
        await exp.save()
      }
      else {
        exp.exp += plus
        await exp.save()
      }
      quanlity.exp -= 1
      await quanlity.save()

    }
    else if (after && limit <= 0) {
      let plus = Math.floor(Math.random() * 99)
      if (!exp) {
        exp = new expSchema({ memberid, exp: plus })
        await exp.save()
      }
      else {
        exp.exp += plus
        await exp.save()
      }
      quanlity.exp += 19
      await quanlity.save()
      await client.timeout(memberid, `expchat1`)

    }
    else {
      await client.timeout(memberid, `expchat1`)
    }

    let level
    if (!lv) {
      lv = new levelSchema({ memberid, level: 1 })
      await lv.save()
      level = 1
    }
    else {
      level = lv.level
    }
    let e = await client.exp(memberid, 'find', 0)
    let expes = e.exp
    let lvl = e.lv
    if (expes >= (lvl * lvl * 1000)) {
      lv.level += 1
      await lv.save()
      await client.cong(memberid, lvl + 1 * 1000)
      await message.channel.send(`<a:Yu_sao01:944346751505145896> | **${message.author.id}**, bạn đã lên **__${lvl + 1}__** và được thưởng **${((lvl + 1) * 1000).toLocaleString('en-us')}** Ycoin`)
    }

    console.log(after + message.author.username)
  }
  client.exp = async function exp(memberid, method, quanlity) {
    let experience = 1
    let level = 1
    let exp = await expSchema.findOne({ memberid })
    if (exp) experience = exp.exp
    let lv = await levelSchema.findOne({ memberid })
    if (lv) level = lv.level
    if (method == `add`) {
      if (!exp) {
        exp = new expSchema({ memberid, exp: quanlity })
        await exp.save()
      } else {
        exp.exp += quanlity
        await exp.save()
      }
    }
    else if (method == `tru`) {
      if (!exp) {
        exp = new expSchema({ memberid, exp: 0 })
      } else {
        exp.exp -= quanlity
      }
      await exp.save()
    }
    else if (method == `find`) {
      if (!exp) experience = 0
      else experience = exp.exp
      if (!lv) {
        lv = new levelSchema({ memberid, level: 1 })
        level = 1
      }
      else {
        level = lv.level
        let bypass = level * level * 1000
        console.log(bypass + `+` + experience)
        if (experience >= bypass) {
          lv.level += 1
          await lv.save()
          level += 1
        }
      }
    }

    return { exp: experience, lv: level }
  }
}

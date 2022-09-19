const mongoose = require('mongoose');
// Sức Mạnh, Nhanh Nhẹn, Trí Lực, Ma Lực, Hấp Dẫn và Thể Lực
const skillSchema = new mongoose.Schema({
  id: String,
  name: String,
  skill1: {
    level1: {
      active: Boolean,
      name: String,
      stc: Number,
      dmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
    level2: {
      active: Boolean,
      name: String,
      stc: Number,
      dmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
    level3: {
      active: Boolean,
      name: String,
      stc: Number,
      dmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    }
  },
  skillpassive1: {
    level1: {
      active: Boolean,
      name: String,
      stc: Number,
      bonusdmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
    level2: {
      active: Boolean,
      name: String,
      stc: Number,
      bonusdmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
    level3: {
      active: Boolean,
      name: String,
      stc: Number,
      bonusdmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
  },
  skillpassive2: {
    level1: {
      active: Boolean,
      name: String,
      stc: Number,
      bonusdmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
    level2: {
      active: Boolean,
      name: String,
      stc: Number,
      bonusdmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
    level3: {
      active: Boolean,
      name: String,
      stc: Number,
      bonusdmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
  },
  ulti: {
    level1: {
      active: Boolean,
      name: String,
      stc: Number,
      dmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
    level2: {
      active: Boolean,
      name: String,
      stc: Number,
      dmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    },
    level3: {
      active: Boolean,
      name: String,
      stc: Number,
      dmg: Number,
      rateeffect: Number,
      effect: String,
      effectdmg: Number,
      cooldown: Number,
      stun: Boolean,
      effectturn: Number,
      bonuspow: Number,
      bonusagi: Number,
      bonusatk: Number,
      bonusdef: Number,
      bonusmdef: Number
    }
  },
})

module.exports = mongoose.model('skillSchema', skillSchema);
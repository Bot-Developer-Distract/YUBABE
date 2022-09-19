const { Collection } = require('discord.js')
const {
  readdirSync
} = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Slash Commands");
table.setHeading("Lệnh Slash", "Trạng Thái");
module.exports = (client) => {
  client.slashcommands = new Collection()
  try {
    readdirSync("./slashcommands/").forEach((dir) => {
      const slashcommands = readdirSync(`./slashcommands/${dir}/`).filter((file) => file.endsWith(".js"));
      for (let file of slashcommands) {
        let pull = require(`../slashcommands/${dir}/${file}`);
        if (pull.data.name) {
          client.slashcommands.set(pull.data.name, pull);
          table.addRow(file, "✅");
        } else {
          table.addRow(file, `❌`);
          continue;
        }
      }
    });
    console.log(table.toString().rainbow);
  } 
  catch (e) {
    console.log(String(e.stack).bgRed)
  }
};

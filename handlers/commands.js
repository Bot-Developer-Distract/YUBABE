 const {
  readdirSync
} = require("fs");
const ascii = require("ascii-table");
let table = new ascii("Commands");
table.setHeading("Lệnh", "Trạng Thái");
const { Collection } = require('discord.js')
module.exports = (client) => {
  client.commands = new Collection();
  client.aliases = new Collection();
  try {
    readdirSync("./commands/").forEach((dir) => {
      const commands = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
      for (let file of commands) {
        let pull = require(`../commands/${dir}/${file}`);

        if (pull.name) {
          client.commands.set(pull.name, pull);
          table.addRow(file, "✅");
        } else {
          table.addRow(file, `❌`);
          continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
      }
    });
    console.log(table.toString().rainbow);
  } 
  catch (e) {
    console.log(String(e.stack).bgRed)
  }
  module.exports = client
}


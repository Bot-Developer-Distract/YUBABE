const { Client, Intents, Collection, Options, MessageEmbed, Partials } = require('discord.js');
require('colors')
const token = process.env.token
let client = new Client({
  partials: ["CHANNEL"],
  makeCache: Options.cacheWithLimits({
    MessageManager: 200, // This is default
    PresenceManager: 0,
    InteractionManager: 200,
    // Add more class names here
  }),
  intents: new Intents(32509),
  allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
})
module.exports = client;

const ascii = require("ascii-table");
let table = new ascii("HANDLERS");
table.setHeading("Trợ Năng", "Trạng Thái");
const fs = require('node:fs');
const path = require('node:path');
client.categories = fs.readdirSync(path.resolve('handlers'));
["commands", "events", "slashcommands", "functions"].forEach(handlers => {
  table.addRow(handlers, `✅`);
  require(path.resolve(`handlers/${handlers}`))(client);
});

console.log(table.toString().bold.brightGreen);


client.login(token);

//forever start nodemon ./index.js localhost 8080
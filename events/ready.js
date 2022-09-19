const colors = require('colors')
const mongoose = require('mongoose')
require('dotenv').config();
module.exports  = {
	name: 'ready',
	once: true,
	execute(client) {
    const a = client.guilds.cache.reduce(
        (a, b) => a + b.memberCount,
        0
      );
    const mongo_url = process.env.mongo_url;
    
    console.log("Địa chỉ MongoDB đã xác thực!".bold.brightMagenta);
    mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(console.log(`Đã kết nối tới MONGODB`));
    client.user.setActivity(`với ${a.toLocaleString('En-us')} member !`, {type: "PLAYING", url: "https://www.twitch.tv/nocopyrightsounds"})
	},
};
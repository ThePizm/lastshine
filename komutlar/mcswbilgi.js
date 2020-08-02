const Discord = require("discord.js");
const Gamedig = require('gamedig');
exports.run = async (client, message, args) => {
  
  Gamedig.query({
    type: 'minecraft',
    host: 'play.craftrise.tc'
}).then((state) => {
    message.channel.send(state)
    const embed = new Discord.RichEmbed()
    .setAuthor('Minecraft Sunucu Bilgi')
    .setDescription(`**Sunucu Adı:** ${state.name}\n**Kullanıcı Sayısı: ** ${state.players.length}\n**Max Kullanıcı: ** ${state.maxplayers}`)
    message.channel.send(embed)
}).catch((error) => {
    message.channel.send("<:kirmizi:731953479098171524> ``Sunucu aktif değil!``")
    console.log("Server is offline");
});
  
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcbilgi', 'swii'],
  permLevel: 0
};

exports.help = {
  name: "mcsunucubilgi",
  description: "Bot i",
  usage: "istatistik"
};
   
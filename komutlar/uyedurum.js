const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(`Toplam Kişi`, üyesayi, true)
  .addField(`Toplam Kullanıcı`, kullanıcılar, true)
  .addField(`Botlar`, botlar, true)
  .addField(`Aktif Üyeler`, `${message.guild.members.filter(o => o.presence.status === 'online').size} - :white_check_mark: `, true)
  .addField(`Boşta Üyeler`, `${message.guild.members.filter(i => i.presence.status === 'idle').size} - :crescent_moon: `, true)
  .addField(`Rahatsız Modda Üyeler`, `${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size} - :no_entry:`, true)
  .addField(`İnaktif Üyeler`, `${message.guild.members.filter(off => off.presence.status === 'offline').size} - :small_red_triangle_down: `, true)
  
  
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['uyedurum', 'üyedurum', 'dcdurum'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "üye-durum",
  description: "üye-durum",
  usage: "üye-durum"
};
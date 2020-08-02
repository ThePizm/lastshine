const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(' ');

  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setThumbnail(message.guild.iconURL)
  .setTitle('Sunucu;')
  .addField('Kısaltması:', message.guild.nameAcronym, true)
  .addField('Kimliği:', message.guild.id, true)
  .addField('Bölgesi:', message.guild.region, true)
  .addField('Sahibi:', message.guild.owner, true)
  .addField('Doğrulama seviyesi:', message.guild.verificationLevel, true)
  .addField('Emojiler:', emojiList || 'Yok', true)
  .addField('Üyeler:', `${message.guild.members.filter(member => member.user.bot).size} bot / ${message.guild.memberCount} üye`, true)
  .addField("Kullanıcı Sayısı", message.guild.memberCount, true)
  .addField('Kanal Sayısı:', message.guild.channels.size, true)
  .addField('AFK kanalı:', message.guild.afkChannel || 'Yok', true)
  .addField('AFK zaman aşımı:', message.guild.afkTimeout + ' saniye', true)
  .addField('Oluşturma tarihi:', message.guild.createdAt.toLocaleDateString(), true)
  .setFooter('Sunucu Bilgi', client.user.avatarURL)
  .setTimestamp()
  message.channel.send(embed);
};

exports.conf = {
  aliases: ['dcdurum', 'sbilgi', 'dc', 'dcbilgi'],
  enabled: true,
  guildOnly: true,
  permLevel: 0
};

exports.help = {
  name: 'sbilgi',
  description: 'Sunucu hakkında bilgi almaya yarar.',
  usage: 'sunucubilgi'
};
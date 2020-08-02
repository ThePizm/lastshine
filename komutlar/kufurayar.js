const Discord = require('discord.js')
const db = require('quick.db')
 
exports.run = async (client ,message, args) =>{
if(args[0] === 'aktif') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send('<a:ayar:731903831134175242> Başarılı Şekilde `Aktif` Edildi.')
  return
}
if (args[0] === 'deaktif') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send('<a:ayar:731903831134175242> Başarılı Şekilde `Deaktif` Edildi')
return
}
  message.channel.send('Lütfen `Aktif` yada `Deaktif` Yazın!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};
 
exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};
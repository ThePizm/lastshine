const Discord = require('discord.js');

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`LastShine`, client.user.avatarURL)
      .addField(`IP;`, `play.LastShine.net`)
      .setDescription("Yardım menüsü <a:ayar:731903831134175242> \n\n**Ping**: " + client.ping + "ms!\n\n")
      .setThumbnail(client.user.avatarURL)
      .addField(`LastShine - Yardım`, `:white_small_square: | **ls!yardım**: Yazarsanız bu mesajı görürsünüz!\n:white_small_square: | **ls!talep**: Yazarak destek bildirimi açabilirsin. \n:white_small_square: | **ls!corona**: Güncel korona bilgilerini görebilirsin. \n:white_small_square: | **ls!profil**: Kendi bilgilerini görüntülersin. \n:white_small_square: | **ls!tavsite**: Sunucuya eklenmesini istediğinizi bu komut ile iletebilirsiniz. \n:white_small_square: | **ls!swii**: Minecraft sunucumuzun istatistiklerini görüntülersin. \n:white_small_square: | **ls!destek**: Destek talebi oluşturursun. \n:white_small_square: | **ls!botist**: Botun istatistiklerini görüntülersin. \n:white_small_square: | **ls!sbilgi**: Discord sunucumuzun istatistiklerini görüntülersin. \n\nOluşturucu; ThePizm#1222`)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };

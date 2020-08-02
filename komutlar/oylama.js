const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`<a:uyari:731904747178557470> Oylama yapacağın soruyu girmedin! <a:uyari:731904747178557470>`)).then(m => m.delete(5000));
     console.log("ls!oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("RANDOM")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('LastShine', client.user.avatarURL)
       .addField(`Seçenekler »`, `Evet; ❤️ Hayır; 💔 seçeneklerini kullanın. `, true)
       .addField(`__Oylama__`, `**${question}**`)).then(function(message) {

         message.react('❤️');

         message.react('💔');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: '/oylama <oylamaismi>'
};

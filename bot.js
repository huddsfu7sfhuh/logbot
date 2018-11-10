const Discord = require('discord.js');
const client = new Discord.Client();


  var prefix = "~"
 
 
  client.on('message', message => {
     if(!message.channel.guild) return;
 if(message.content.startsWith(prefix = "~")) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let BcList = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setAuthor(`محتوى الرساله ${args}`)
  .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست\nيمكنك اضافة اسم السيرفر في البرودكاست عن طريق كتابة <server>\nيمكنك اضافة اسم المرسل في البرودكاست عن طريق كتاية <by>\nيمكنك منشنة العضو في الرساله عن طريق كتابة <user>`)
  if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
  msg.react('📝')
  .then(() => msg.react('✏'))
  .then(() =>msg.react('📝'))
   
  let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
  let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
 
  let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
  let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
 
 
  EmbedBc.on("collect", r => {
 
 
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  let EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
  var bc = new
  Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(EmbedRep)
  .setThumbnail(message.author.avatarURL)
  m.send({ embed: bc })
  msg.delete();
  })
  })
  NormalBc.on("collect", r => {
    message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  let NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
  m.send(NormalRep);
  msg.delete();
  })
  })
  })
  }
  });
 
 
 
 
 
 
  client.on('ready',async () => {
    sendReady('your id', `**__ تـم تـشـغـيـل الـبـوت بـنـجـاح , Brodcast Bot | Owner Bot : SoM # 1100__**`);
     
    function sendReady(channel, message) {
      client.channels.get(channel).send(message);
      console.log(message);
    }
  });
 
 
          client.on('ready', () => {
              client.user.setActivity("Taino .",{type: 'playing'});
         
         });

 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
     '‏كت تويت | هل تفضل الافلام ولا المسلسلات ؟',
     '‏كت تويت | وش افضل قناة تتابعها في اليوتيوب ؟',
     '‏كت تويت | وش افضل لعبة ممكن تلعبها  ؟',
     '‏كت تويت | وش تتباع اكثر افلام اجنبي ام عربي ؟',
     '‏كت تويت | مو لاقي سؤال اسئله لك :joy:',
]
 
 client.on('message', message => {
   if (message.content.startsWith("$كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
client.login(process.env.BOT_TOKEN); 

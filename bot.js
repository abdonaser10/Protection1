const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const Canvas = require('canvas');

const convert = require("hh-mm-ss");

const dateFormat = require('dateformat');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const ytdl = require('ytdl-core');

const fs = require('fs');

const moment = require('moment');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "$";


client.on('ready', () => {

    client.user.setActivity("$help | Premium Beta V.0.2",{type: 'Streaming'})

});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {

    var prefix = "$";
          if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "SkyBot.";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new
   Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Broadcast')
   .addField('سيرفر', message.guild.name)
   .addField('المرسل', message.author.username)
   .addField('الرسالة', args)
   .setThumbnail(message.author.avatarURL)
   .setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

client.on("message", message => {
    var prefix = "$";// البرفكس
if(message.content.startsWith(prefix + "setwlc")) {
    let args = message.mentions.channels.first();
        if(!args) message.channel.send("** منشن روم . :x:**").then(m => {    
m.delete(1500);
})
            if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . :x:**");
                    message.channel.send(`**${args}. لقد تم شغل الروم هذا للترحيب.**`);
                client.on("guildMemberAdd", (member) => {
                        if(member.user.bot) return;
                     var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('New Member')
.setDescription(`Welcome To Server : [ ${message.guild.name} ]`)
.addField("**اسم العضو** :", `${message.author.tag}`, true)
.addField('**ايدي العضو** :',"" +  member.user.id, true)
.addField('**تاج العضو** :', member.user.discriminator, true)
.addField('**صنع الحساب منذ** :',member.user.createdAt, true)
.addField('**انت العضو رقم**',`**[ ${member.guild.memberCount} ]**`,true)
.setColor('GREEN')
.setFooter(member.guild.name, member.guild.iconURL, true)
                     
args.send({embed : embed});
                });
}
});

client.on("message", message => {
    var prefix = "$";//البرفكس
if(message.content.startsWith(prefix + "setout")) {
    let args = message.mentions.channels.first();
        if(!args) message.channel.send("** منشن روم . :x:**");
            if(!message.guild.member(message.author.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("**ليس لديك صلاحيات . :x:**");
                    message.channel.send(`**${args}. لقد تم شغل الروم هذا للترحيب.**`);
                client.on("guildMemberRemove", (member) => {
                        if(member.user.bot) return;
                     var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('Out Member')
.setDescription(`GoodBye From Server : [ ${message.guild.name} ]`)
.addField("**اسم العضو** :", `${message.author.username}#${message.author.discriminator}`, true)
.addField('**ايدي العضو** :',"" +  member.user.id, true)
.addField('**تاج العضو** :', member.user.discriminator, true)
.addField('**صنع الحساب منذ** :',member.user.createdAt, true)
.addField('**انت العضو رقم**',`**[ ${member.guild.memberCount} ]**`,true)
.setColor('RED')
.setFooter(member.guild.name, member.guild.iconURL, true)
                     
args.send({embed : embed});
                });
}
});


client.on('message', function(msg) {
    if(msg.content.startsWith ('$server')) {
      if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

  client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '$'; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

client.on("message", msg => {
  if(msg.content === '$' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});


client.on('message', async message =>{
    if (message.author.boss) return;
      var prefix = "$";
  
  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "mute") {
          if (!message.channel.guild) return;
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
  ${message.author.tag} تمت معاقبتك بواسطة
  [ ${reason} ] : السبب
  اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
  `)
          .setFooter(`في سيرفر : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });

  client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


 


client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#9c9c9c",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("ميوت بسبب نشر")
            .addField(`**لقد تم إعطائك ميوت كتابي **` , `**السبب: نشر رابط سيرفر في الديسكورد**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**`لقد تم إعطاء ميوت بسبب النشر إذا كان عن طريق الخطا فتكلم مع الإدارة`**');

              
              
              
              }
})


 client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "$";
               if(message.content.startsWith(prefix + 'allbots')) {

   
   if (message.author.bot) return;
   let i = 1;
       const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
         const embed = new Discord.RichEmbed()
         .setAuthor(message.author.tag, message.author.avatarURL)
         .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', message => {
	var prefix = "$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

client.on('message', message => {
    var prefix = "$";
          if(message.content === prefix + "hchannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: false
     })
                  message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
     }
    });
    
    
    client.on('message', message => {
    var prefix = "$";
          if(message.content === prefix + "schannel") {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
                 message.channel.overwritePermissions(message.guild.id, {
                 READ_MESSAGES: true
     })
                  message.channel.send('Done  ')
     }
    });
    
    client.on("message", message => {
        const prefix = "$"
                  
              if(!message.channel.guild) return;
       if(message.author.bot) return;
          if(message.content === prefix + "savatar"){ 
              const embed = new Discord.RichEmbed()
      
          .setTitle(`${message.guild.name}.png`)
      .setAuthor(message.author.username, message.guild.iconrURL)
        .setColor(0x164fe3)
        .setImage(message.guild.iconURL)
        .setURL(message.guild.iconrURL)
                        .setTimestamp()
    
       message.channel.send({embed});
          }
      });
    
      client.on('message',function(message) {
        if (message.author.bot) return;
      var prefix = "$";
                        if(!message.channel.guild) return;
      
                          if (message.content === prefix + "fm") {
       const embed = new Discord.RichEmbed()
      
          .setDescription(`**Members info :sparkles:
      :green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
      :heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
      :yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
      :diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
      :bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
               message.channel.send({embed});
      
          }
            });  

     client.on('message', message => {
                    var prefix = "$";
                           if(message.content === prefix + "mutechannel") {
                                               if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
                       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                                  message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: false
                    
                                  }).then(() => {
                                      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                                  });
                                    }
                    //FIRE BOT
                        if(message.content === prefix + "unmutechannel") {
                                            if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
                       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                                  message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: true
                    
                                  }).then(() => {
                                      message.reply("**__تم فتح الشات__:white_check_mark:**")
                                  });
                        }
                           
                    });   

                    client.on('message', omar => {
                        var prefix = "$";
                        if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
                        omar.guild.channels.forEach(m => {
                        m.delete();
                        });
                        }
                        if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        omar.guild.roles.forEach(m => {
                        m.delete();
                        });
                        omar.reply("`تم حذف جميع الرتب بنجاح`")
                        }
                        });
                        
                        client.on('message', message => {
                            var prefix = "$";
                           if(!message.channel.guild) return;
                        if(message.content.startsWith(prefix + 'clear')) {
                        if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
                        if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
                        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                        let request = `Requested By ${message.author.username}`;
                        message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
                        msg.react('✅')
                        .then(() => msg.react('❌'))
                        .then(() =>msg.react('✅'))
                        
                        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
                        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
                        
                        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
                        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
                        reaction1.on("collect", r => {
                        message.channel.send(`Chat will delete`).then(m => m.delete(5000));
                        var msg;
                                msg = parseInt();
                        
                              message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
                              message.channel.sendMessage("", {embed: {
                                title: "`` Chat Deleted ``",
                                color: 0x06DF00,
                                footer: {
                        
                                }
                              }}).then(msg => {msg.delete(3000)});
                        
                        })
                        reaction2.on("collect", r => {
                        message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
                        msg.delete();
                        })
                        })
                        }
                        });
                        
                        client.on("message", (message) => {
                        if (message.content.startsWith("$ct")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'text');
                        message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
                        
                        }
                        });
                        
                        
                        client.on("message", (message) => {
                        if (message.content.startsWith("$cv")) {
                                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                                let args = message.content.split(" ").slice(1);
                            message.guild.createChannel(args.join(' '), 'voice');
                            message.channel.sendMessage('تـم إنـشاء روم صـوتي')
                            
                        }
                        });
                        
                        
                        client.on("message", (message) => {
                            if (message.content.startsWith('$delete')) {
                                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                        
                                let args = message.content.split(' ').slice(1);
                                let channel = message.client.channels.find('name', args.join(' '));
                                if (!channel) return message.reply('**تم مسح الروم**').catch(console.error);
                                channel.delete()
                            }
                        });  

                         
var temp = {
 
}
 
client.on("message",(message) => {
    if (message.channel.type !== "text") return;
    if (!message.content.startsWith(prefix)) return;
        if(message.content.startsWith(prefix + "temp on")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
            temp[message.guild.id] = {
                work : true,
                channel : "Not Yet"
            };
            message.guild.createChannel("اضغط لصنع روم مؤقت", 'voice').then(c => {
                c.setPosition(1);
                temp[message.guild.id].channel = c.id
                message.channel.send("** Done.**");
            });
        if(message.content.startsWith(prefix + "temp off")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
        message.guild.channels.get(temp[message.guild.id]).delete();
            temp[message.guild.id] = {
                work : false,
                channel : "Not Yet"
            };
        message.channel.send("** Done.**");
    };
}})
client.on("voiceStateUpdate", (o,n) => {
    if (!temp[n.guild.id]) return;
    if (temp[n.guild.id].work == false) return;
    if (n.voiceChannelID == temp[n.guild.id].channel) {
        n.guild.createChannel(n.user.username, 'voice').then(c => {
            n.setVoiceChannel(c);
            c.overwritePermissions(n.user.id, {
                CONNECT:true,
                SPEAK:true,
                MANAGE_CHANNEL:true,
                MUTE_MEMBERS:true,
                DEAFEN_MEMBERS:true,
                MOVE_MEMBERS:true,
                VIEW_CHANNEL:true  
            });
        })
    };
    if (!o.voiceChannel) return;
    if (o.voiceChannel.name == o.user.username) {
        o.voiceChannel.delete();
    };
});


client.on('message', msg => {
    if(msg.content.startsWith('$invitebot')) {
    if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
    }
});


client.on('message',function(message) {
    let prefix = "$";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); // محطوط # عشان محد يستخدم البوت لتبنيد / طرد احد من السيرفر
}
});


client.on("message", (message) => {
    /// ALPHA CODES
   if (message.content.startsWith("$ticket")) {     /// ALPHA CODES
        const reason = message.content.split(" ").slice(1).join(" ");     /// ALPHA CODES
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبه اسمه Support Team`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **تم إنشاء تذكرتك ، #${c.name}.**`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`مرحباّ ${message.author.username}!`, `يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم لدينا قريبا للمساعدة.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
        message.channel.send(`هل أنت متأكد؟ بعد التأكيد ، لا يمكنك عكس هذا الإجراء!\n للتأكيد ، اكتب\`$confirm\`. سيؤدي ذلك إلى مهلة زمنية في غضون 10 ثوانٍ وإلغائها`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '$confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })    
                    .then((collected) => {
                        message.channel.delete();
                    })   
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
 
});

 
client.on('message', message => { //By |.iiMostafaYT#1001
    if (message.content.startsWith("$bot")) { //By |.iiMostafaYT#1001
    message.channel.send({ //By |.iiMostafaYT#1001
        embed: new Discord.RichEmbed() //By |.iiMostafaYT#1001
            .setAuthor(client.user.username,client.user.avatarURL) //By |.iiMostafaYT#1001
            .setThumbnail(client.user.avatarURL) //By |.iiMostafaYT#1001
            .setColor('RANDOM') //By |.iiMostafaYT#1001
            .setTitle('Info SkyBot.') //By |.iiMostafaYT#1001
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) //By |.iiMostafaYT#1001
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) //By |.iiMostafaYT#1001
            .addField('**Servers**', [client.guilds.size], true) //By |.iiMostafaYT#1001
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) //By |.iiMostafaYT#1001
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) //By |.iiMostafaYT#1001
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) //By |.iiMostafaYT#1001
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) //By |.iiMostafaYT#1001
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) //By |.iiMostafaYT#1001
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) //By |.iiMostafaYT#1001
            .addField('**Arch**' , `[ ${process.arch} ]` , true) //By |.iiMostafaYT#1001
            .addField('**Platform**' , `[ ${process.platform} ]` , true) //By |.iiMostafaYT#1001
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) //By |.iiMostafaYT#1001
                  .addField('**My Language**' , `[ Java Script ]` , true) //By |.iiMostafaYT#1001
                  .setFooter('By | .iiMosTaFaYT#1001') //By |.iiMostafaYT#1001
    }) //By |.iiMostafaYT#1001
} //By |.iiMostafaYT#1001
}); //By |.iiMostafaYT#1001


 
 

client.on("message", message => {
    let roleembed1 = new Discord.RichEmbed()
    .setDescription(`
    أمثله على الأوامر :
    $role @mention rolename : لسحب رتبة لعضو معين
    $role all rolename : لسحب رتبة للجميع
    $role humans rolename : لسحب رتبة للاشخاص فقط
    $role bots rolename : لسحب رتبة لجميع البوتات`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
      var args = message.content.split(' ').slice(1);
      var msg = message.content.toLowerCase();
      if( !message.guild ) return;
      if( !msg.startsWith( prefix + 'role' ) ) return;
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
      if( msg.toLowerCase().startsWith( prefix + 'role' ) ){
          if( !args[0] ) return message.channel.sendEmbed(roleembed1)
          if( !args[1] ) return message.channel.sendEmbed(roleembed1)
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().removeRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.removeRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
          }  
      } else {
          if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
          if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
          }
      }
  });
   
  client.on("message", message => {
        let roleembed = new Discord.RichEmbed()
    .setDescription(`
    أمثله على الأوامر :
    $role @mention rolename : لأعطاء رتبة لعضو معين
    $role all rolename : لأعطاء رتبة للجميع
    $role humans rolename : لأعطاء رتبة للاشخاص فقط
    $role bots rolename : لأعطاء رتبة لجميع البوتات`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
      var args = message.content.split(' ').slice(1);
      var msg = message.content.toLowerCase();
      if( !message.guild ) return;
      if( !msg.startsWith( prefix + 'role' ) ) return;
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
      if( msg.toLowerCase().startsWith( prefix + 'roleembed' ) ){
          if( !args[0] ) return message.channel.sendEmbed(roleembed)
          if( !args[1] ) return message.channel.sendEmbed(roleembed)
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء الى **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البشريين رتبة**');
          }  
      } else {
          if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
          if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
          var role = msg.split(' ').slice(2).join(" ").toLowerCase();
          var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
          if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
              message.mentions.members.first().addRole( role1 );
              return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
          }
          if( args[0].toLowerCase() == "all" ){
              message.guild.members.forEach(m=>m.addRole( role1 ))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
          } else if( args[0].toLowerCase() == "bots" ){
              message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
          } else if( args[0].toLowerCase() == "humans" ){
              message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
              return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
          }
      }
  });


  const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
	  var prefix = "-";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("$عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('Speed BOT' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});

client.on('message', ra3d => {
var prefix = "$";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on('message', message => {
var prefix = "$";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('$مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});


client.on("message", function(message) {
	var prefix = "$";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});


client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='$count')
var IzRo = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle(':tulip:| Members info')
.addBlankField(true)
.addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
message.channel.send(IzRo);
});


client.on("message", async message => {
    if(!message.channel.guild) return;
    var prefix = "$";
if(message.content.startsWith(prefix + 'invites')) {
var nul = 0
var guild = message.guild
await guild.fetchInvites()
    .then(invites => {
     invites.forEach(invite => {
        if (invite.inviter === message.author) {
             nul+=invite.uses
            }
        });
    });
  if (nul > 0) {
      console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
      var embed = new Discord.RichEmbed()
          .setColor("#000000")
            .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                  message.channel.send({ embed: embed });
              return;
            } else {
               var embed = new Discord.RichEmbed()
                .setColor("#000000")
                .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

               message.channel.send({ embed: embed });
                return;
            }
}
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});



client.on('message', message => {
	var prefix = "$";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});


 
 


client.on('message', message => {
    if (message.content == "$quas") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});

client.on('message', message => { 
let prefix = '$'
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
        guild.owner.send(embed)
  });


  var fkk =[
    {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
    {f:"فكك باص",k:"ب ا ص"},
    {f:"فكك عربة ",k:"ع ر ب ة"},
    {f:"فكك سيارة",k:"س ي ا ر ة"},
    {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
    {f:"فكك العنود ",k:"ا ل ع ن و د"},
    {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
    {f:"فكك دحوم",k:"د ح و م"},
    {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
    {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
    {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
    {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
    {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
    {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
    {f:"فكك زنديق  ",k:"ز ن د ي ق"},
    {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
    {f:"فكك سوريا ",k:"س و ر ي ا"},
    {f:"فكك الاردن ",k:"ا ل ا ر د ن"},
    {f:"فكك طماطم ",k:"ط م ا ط م"},
    {f:"فكك سارة ",k:"س ا ر ة"},
    {f:"فكك دراجون ",k:"د ر ا ج و ن"},
    {f:"فكك سيرفر ",k:"س ي ر ف ر"},
    {n:"فكك الجبل",m:"ا ل ج ب ل"},
    {n:"فكك هضبة",m:"ه ض ب ة"},
    {n:"فكك خواطر",m:"خ و ا ط ر"},
    {n:"فكك ارحبو",m:"ا ر ح ب و"},
    {n:"فكك اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
    {n:"فكك احبك",m:"ا ح ب ك"},
    {n:"فكك سبرايز",m:"س ب ر ا ي ز"},
    {n:"فكك ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
    {n:"فكك الو محد",m:"ا ل و م ح م د"},


];


client.on("message", async message => {
   var prefix = "$";
if(message.content == prefix+"فكك"){
    if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
    UserBlocked.add(message.guild.id)
    var ask = fkk[Math.floor(Math.random() * fkk.length)];
    let embed = new Discord.RichEmbed()
    .setTitle('لعبة فكك')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setDescription(ask.f);
    message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
    const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
        UserBlocked.delete(message.guild.id)
    msgs.forEach(result => {
       if(result.author.id == client.user.id) return;
       if(result.content == "فكك") return
       if(result.content == ask.k){

         let embeds = new Discord.RichEmbed()
         .setTitle(':white_check_mark: اجابة صحيحة')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة صحيحة`);
            message.channel.sendEmbed(embeds);                return;
       } else {

                           var embedx = new Discord.RichEmbed()
         .setTitle(':x:خطاء')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة خاطئة`);

            message.channel.sendEmbed(embedx);
       }
 });
}
});





client.on("message", async message => {
var prefix = "$";
var aoasm =[
{q:"ما عاصمة **المغرب**",a:"الرباط"},
{q:"ما عاصمة **افغانستان**",a:"كبل"},
{q:"ما عاصمة ** البانيا**",a:"تيران"},
{q:"ما عاصمة **الجزائر **",a:"الجزائر"},
{q:"ما عاصمة ** **",a:"الجزائر"},
{q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
{q:"ما عاصمة **انجولا**",a:"لواندا"},
{q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
{q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
{q:"ما عاصمة **ارمينيا**",a:"يريفان"},
{q:"ما عاصمة ** مصر**",a:"القاهرة"},
{q:"ما عاصمة ** استراليا**",a:"كانبرا"},
{q:"ما عاصمة **النمسا**",a:"فيينا"},
{q:"ما عاصمة ** اذربيجان**",a:"باكو"},
{q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
{q:"ما عاصمة **البحرين**",a:"المنامة"},
{q:"ما عاصمة ** بنجلاد��ش**",a:"دكـا"},
{q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
{q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
{q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
{q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
{q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
{q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
{q:"ما عاصمة **بوليفيا **",a:"لاباز"},
{q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
{q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
{q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
{q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
{q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
{q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
{q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
{q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
{q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
{q:"ما عاصمة ** كندا**",a:"اوتاوا"},
{q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
{q:"ما عاصمة **تشاد **",a:"نجامينا"},
{q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
{q:"ما عاصمة **الصين **",a:"بكين"},
{q:"ما عاصمة ** **",a:"مورونى"},
{q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
{q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
{q:"ما عاصمة **كرواتيا **",a:"زغرب"},
{q:"ما عاصمة ** كوبا**",a:"هافانا"},
{q:"ما عاصمة ** قبرص**",a:" "},
{q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
{q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
{q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
{q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
{q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
{q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
{q:"ما عاصمة **قطر  **",a:"الدوحة"},
{q:"ما عاصمة **السعودية  **",a:"الرياض"},
{q:"ما عاصمة **سوريا  **",a:"دمشق"},
{q:"ما عاصمة **تركيا  **",a:"انقرة"},
{q:"ما عاصمة **العراق  **",a:"بغداد"},
{q:"ما عاصمة **البنان  **",a:"بيروت"},
{q:"ما عاصمة **فلسطين  **",a:"القدس"},
{q:"ما عاصمة **امريكا  **",a:"واشنطن"},
{q:"ما عاصمة **الاردن  **",a:"عمان"},    
{q:"ما عاصمة **السودان  **",a:"خرطوم"},
{q:"ما عاصمة **الما��يا  **",a:"برلين"},
{q:"ما عاصمة **كندا  **",a:"اوتاوا"},
{q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
];
if(message.content == prefix+"عواصم"){
    if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
    UserBlocked.add(message.guild.id)
    var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
    let embed = new Discord.RichEmbed()
    .setTitle('سؤال عواصم')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setDescription(ask.q);
    message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
    const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
        UserBlocked.delete(message.guild.id)
    msgs.forEach(result => {
       if(result.author.id == client.user.id) return;
       if(result.content == "عاصمة") return
       if(result.content == ask.a){
         let embeds = new Discord.RichEmbed()
         .setTitle(':white_check_mark: اجابة صحيحة')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة صحيحة`);
            message.channel.sendEmbed(embeds);                return;
       } else {

                              var embedx = new Discord.RichEmbed()
            .setTitle(':x:خطاء')
            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor("RANDOM")
            .setDescription(`**${result.author.username}** الإجابة خاطئة`);
            message.channel.sendEmbed(embedx);
       }
 });
}
});




                                 client.on('message' , message => {
                                    var prefix = "$"
                                    
                                    if (message.author.bot) return;
                                    if (message.content.startsWith(prefix + "contact")) {
                                    if (!message.channel.guild) return;
                                    
                                    
                                    
                                    let args = message.content.split(" ").slice(1).join(" ");
                                    
                                    
                                    
                                    client.users.get("467777208732352512","492552276326481930").send(
                                        "\n" + "**" + "● السيرفر :" + "**" +
                                        "\n" + "**" + "» " + message.guild.name + "**" +
                                        "\n" + "**" + " ● المرسل : " + "**" +
                                        "\n" + "**" + "» " + message.author.tag + "**" +
                                        "\n" + "**" + " ● الرسالة : " + "**" +
                                        "\n" + "**" + args + "**")
                                    
                                    let embed = new Discord.RichEmbed()
                                         .setAuthor(message.author.username, message.author.avatarURL)
                                         .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
                                         .setThumbnail(message.author.avatarURL)
                                         .setFooter("By : .iiMosTaFaYT#1001")
                                                                                    
                                    
                                    message.channel.send(embed);
                                    
                                    
                                    }
                                        
                                    });    
                                    
                                    
                                    client.on('message', message => { 
                                        var prefix ="$";
                                               if (message.content.startsWith(prefix + "user")) {
                                         var args = message.content.split(" ").slice(1);
                                         let user = message.mentions.users.first();
                                         var men = message.mentions.users.first();
                                            var heg;
                                            if(men) {
                                                heg = men
                                            } else {
                                                heg = message.author
                                            }
                                          var mentionned = message.mentions.members.first();
                                             var h;
                                            if(mentionned) {
                                                h = mentionned
                                            } else {
                                                h = message.member
                                            }
                                                   moment.locale('ar-TN');
                                          var id = new  Discord.RichEmbed()
                                          .setAuthor(message.author.username, message.author.avatarURL) 
                                        .setColor("#707070")
                                        .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
                                        .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
                                        .setFooter(`SkyBot.`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
                                        .setThumbnail(heg.avatarURL);
                                        message.channel.send(id)
                                    }       });
                                    
                                    
                                    client.on('message', message => {
                                        if (message.content.startsWith("$bans")) {
                                            message.guild.fetchBans()
                                            .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
                                      .catch(console.error);
                                    }
                                    });
                                    
                                    
                                         

                                       client.on('message', message => {
                                        if (message.content === "$support") {
                                        let embed = new Discord.RichEmbed()
                                     .setAuthor(message.author.username)
                                     .setColor("#9B59B6")
                                     .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/kKxzjMz**")
                                        
                                        
                                     message.channel.sendEmbed(embed);
                                       }
                                   });


                                   client.on('message', message => {
                                    var prefix = "$";
                            if (message.author.bot) return;
                            if (!message.content.startsWith(prefix)) return;
                        
                            let command = message.content.split(" ")[0];
                            command = command.slice(prefix.length);
                        
                            let args = message.content.split(" ").slice(1);
                        
                            if (command == "embed") {
                                if (!message.channel.guild) return message.reply('** This command only for servers **');
                                let say = new Discord.RichEmbed()
                                    .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
                                    .setDescription(args.join("  "))
                                    .setColor(0x23b2d6)
                                message.channel.sendEmbed(say);
                                message.delete();
                            }
                        });


                        client.on("message", message => {
                            var prefix = "$"
                            if (!message.content.startsWith(prefix)) return;
                              let command = message.content.split(" ")[0];
                              command = command.slice(prefix.length);
                                if(command === "mcskin") {
                                        const args = message.content.split(" ").slice(1).join(" ")
                                if (!args) return message.channel.send("** Type your skin name **");
                                const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
                            message.channel.send(image)
                                }
                            });       
                       client.on("message", message => {
                                    var prefix = "$";
                                 if (message.content === "$help") {
                                     message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      وصف عن البوت
                                      :gem: البوت فيه كثير ميزات حلوة و جميلة
                                      
                                       :rocket: البوت يعمل 24 ساعه
                                      
                                       :up: خدمة سبورت 24/7
                                      
                                       :free: البوت مجاني %100
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 
                                
                                
                                   client.on("message", message => {
                                    var prefix = "$";
                                 if (message.content === "$help") {
                                     message.channel.send(' ');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**Administrative Commands**__
                                    **  『$move @user / لسحب الشخص الى روومك』
                                      『$bc / رسالة جماعية الى كل اعضاء السيرفر』
                                      『$hchannel / اخفاء الشات』
                                      『$schannel / اضهار الشات المخفية』
                                      『$clear / مسح الشات』
                                      『$mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』
                                      『$unmute @user / لفك الميوت عن الشخص 』
                                      『$kick @user <reason> / طرد الشخص من السيرفر』
                                      『$ban @user <reason> / حضر الشخص من السيرفر』
                                      『$mutechannel / تقفيل الشات』
                                      『$unmutechannel / فتح الشات』
                                      『$ct <name> / انشاء شات』
                                      『$cv <name> / انشاء رووم فويس』**
                                      
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 
                                
                                
                                   
                                   client.on("message", message => {
                                    var prefix = "$";
                                 if (message.content === "$help") {
                                     message.channel.send('');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**General Commands**__
                                      **『$server / يعرض لك معلومات عن السيرفر』
                                      『$bot / يعرض لك كل معلومات البوت』
                                      『$fm / عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
                                      『$id /  معلومات عنك』
                                      『$allbots /  لعرض جميع البوتات الي بالسيرفر』
                                      『$savatar / صورة السيرفر』
                                      『$avatar / صورتك او صورة الي تمنشنة』
                                      『$inv / لدعوة البوت الى سيرفرك』
                                      『$support / سيرفر الدعم』
                                      『$contact / ارسال اقتراح او لمراسلة صاحب البوت』**
                                      
                                      
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 
                                
                                
                                   client.on("message", message => {
                                    var prefix = "$";
                                 if (message.content === "$help") {
                                     message.channel.send('');
                                  const embed = new Discord.RichEmbed() 
                                      .setColor("RANDOM")
                                      .setDescription(`
                                      __**Music Commands**__
                                    **『$play / لتشغيل اغنية』
                                      『$skip / تخطي الأغنية』
                                      『$join / دخول رومك الصوتي』
                                      『$stop / الخروج من رومك الصوتي』
                                      『$pause / ايقاف الاغنية مؤقتا』
                                      『$np / اظهار الاغنية اللي انت مشغلها حاليا』
                                      『$resume / تكملة الاغنية』
                                      『$queue  / اظهار قائمة التشغيل』**
                                `)
                                   message.author.sendEmbed(embed)
                                    
                                   }
                                   }); 


                                   const config = {
    token : "NTEyNTY1MzYyMDUxNjQ1NDYw.Ds7aKA.R4Fzfx-K6JPNWFD2dFgRMzrFfq4",
    prefix : "!",
    owner : ['492552276326481930'],
};
//By Request of [ function ]
var color = new Discord.RichEmbed().setColor('#000000').setColor('#36393e')
function e(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	.setFooter(`By Request of ${message.author.username}`);
	message.channel.sendEmbed(embed);
};
//Errors [ function ]
function err(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Feedbin-Icon-error.svg/1000px-Feedbin-Icon-error.svg.png")
	message.channel.sendEmbed(embed);
};
//Requested by [ function ]
function ee(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args)
	.setFooter(`Requested by ${message.author.username}`);
	message.channel.sendEmbed(embed);
};
//Left the voice channel [ function ] ,-,
function L(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	.setFooter(`By Request of ${message.author.username}`);
	message.channel.sendEmbed(embed);
}
//Current volume [ function ]
function V(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args, "https://www.iconsdb.com/icons/preview/red/volume-up-4-xxl.png")
	message.channel.sendEmbed(embed);
}
// For the skip command
function S(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	message.channel.sendEmbed(embed);
};
function VS(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setDescription(args)
	.setFooter("Requires Another Vote.")
	message.channel.sendEmbed(embed);
};
function Vs(message, args) {
	var embed = new Discord.RichEmbed()
	.setColor(color.color)
	.setAuthor(args, "https://www.iconsdb.com/icons/preview/red/volume-up-4-xxl.png")
	message.channel.sendEmbed(embed);
};
const queue = new Map();
var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
client.on('message', async message => { 
	if (message.author.bot) return undefined;
	if (!message.content.startsWith(prefix)) return undefined;
	const args = message.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const voiceChannel = message.member.voiceChannel;
	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)
	if (message.channel.type !== 'text') return;
	const serverQueue = queue.get(message.guild.id);
	message.guild.setRegion("eu-central")//
	if (command === 'play' || command === 'p' || command === 'search' || command === "ply") {
		if (!voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		if (message.guild.members.get(client.user.id).voiceChannel) {
			if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`);
        };
		if (!args[1]) return err(message, `You should To insert A song name or YouTube URL.`)
		const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
		const validate = await ytdl.validateURL(args[1]);
		if (regexp.test(args[1]) && !validate && !url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return err(message, `You should insert A valid URL.`);
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, message, voiceChannel, true); 
            }
			e(message,`**${playlist.title}**, has been added to the queue`)
		}else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 31);
					if (!videos[0]) return err(message, `Cannot find Any Results.`);
					var index = 0;
					var pages = 1;
					var msgg = "";
					var takoota = new Discord.RichEmbed()
					.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
					.setColor(color.color)
					.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
					.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(0,10).join('\n')}`)
					.setFooter("Page 1 of 3");
					message.channel.send({embed : takoota}).then(async msg1 => {
						msgg=msg1.id
						await msg1.react('◀');
						await msg1.react('▶');
						let e = msg1.createReactionCollector((reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id, { time: 60000 });
						let t = msg1.createReactionCollector((reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id, { time: 60000 });
						t.on("collect",async () => { 
							if (pages == 1) {
								pages+=1
							index = 0;
							var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color) 
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(10,20).join('\n')}`)
							.setFooter("Page 2 of 3");
							msg1.edit({embed : takoota});
							} else if (pages == 2) {
								pages+=1
								var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color) 
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${index++ - 30}. **${video2.title}**\n`).slice(20,30.5).join('\n')}`)
							.setFooter("Page 3 of 3");
							msg1.edit({embed : takoota});
							};
						});
						e.on("collect", async () => {
							index = 0;
							if (pages == 2) {
								pages-=1
							var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color)
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(0,10).join('\n')}`)
							.setFooter("Page 1 of 3");
							msg1.edit({embed : takoota})
							} else if (pages == 3) {
								pages-=1
								var takoota = new Discord.RichEmbed()
							.setAuthor("Search results..", 'https://cdn.discordapp.com/attachments/480852478196187138/483165667877453834/20180826_094749.png')
							.setColor(color.color) 
							.setThumbnail("https://www.denverlibrary.org/sites/dplorg/files/2018/02/youtube-344105_640.png")
							.setDescription(`${videos.map(video2 => `${++index}. **${video2.title}**\n`).slice(10,20).join('\n')}`)
							.setFooter("Page 2 of 3");
							msg1.edit({embed : takoota});
							}
						})
						
					});
					try {
						var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 31 && msg2.author.id == message.author.id, {
							maxMatches: 1,
							time: 60000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return;
					}
					response.first().delete();
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
					var msg1 = message.channel.messages.get(msgg);
					if (!msg1) return;
					msg1.delete();
				} catch (err) {
					console.error(err);
					return;
				}
			}}
				const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
			loop : false,
			vote : []
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0], message);
		} catch (error) {
			console.error(`${error}`);
			queue.delete(message.guild.id);
			return;
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return;
		await e(message, `**${song.title}**, has been added to the queue`)
	};
	
	return undefined;
	async function handleVideo(video, message,voiceChannel){
						const serverQueue = queue.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
			loop : false
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0], message);
		} catch (error) {
			console.error(`${error}`);
			queue.delete(message.guild.id);
			return;
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return;
		await e(message, `**${song.title}**, has been added to the queue`)
	};
	return undefined;
	}
	} else if (command === 'skip' || command === 's' || command === 'ski' || command === 'sk') {
		if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`);
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue.songs.length == 1) return err(message, "Only 1 song is Queued.")
		if (serverQueue.vote.includes(message.author.id)) return err(message, `You Already Voted To skip.`);
		serverQueue.vote.push(message.author.id)
		var allusers = message.guild.members.filter(m => m.voiceChannel).size;
		var required = allusers/2
		if (required<=serverQueue.vote.length) {
			if (serverQueue.loop == true)await serverQueue.songs.shift();
			await serverQueue.connection.dispatcher.end('Skip command has been used!');
			await S(message, `**${serverQueue.songs[0].title}**, has been skipped`);
		} else {
			VS(message, `**${message.author.username}**, has been voted to skip`)
		}
		return undefined;
	} else if (command === 'stop' || command === 'st' || command === 'sto') {
	if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);

	if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To use This Command.`);		
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		e(message, `Okey, Music has been stopped`);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === "leave" || command === 'disconnect' || command === 'l') {
		if (!message.guild.members.get(client.user.id).voiceChannel) return;
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`);
		if (serverQueue) serverQueue.songs = [];
		if (serverQueue) serverQueue.connection.dispatcher.end('leave command has been used!');
		message.member.voiceChannel.join();
		message.member.voiceChannel.leave();
		L(message, `:door: I have disconnected from ${message.guild.members.get(client.user.id).voiceChannel.name}`);

	} else if (command === 'volume' || command === 'vol' || command === 'v') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!args[1]) return V(message,`The current volume is ${serverQueue.volume}%`);
		args[1] = parseInt(args[1]);
		if (args[1] > 200 || args[1]<2) return err(message, `Only allowed from 2 - 200`)
		if (isNaN(args[1])) return err(message, `Only numbers are allowed.`)
		if (args[1] == serverQueue.volume) return err(message, `My Volume is already ${serverQueue.volume}%`)
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 250);
		return Vs(message, `Volume Successfully Changed to ${args[1]}%`);
	} else if (command === 'queue' || command === 'q' || command === "qu" || command === 'que') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		else if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
		else if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		else {
		var y = 0;
		var embed = new Discord.RichEmbed()
		embed.setColor(color.color);
		embed.setAuthor(`Now playing 🎶 ${serverQueue.songs[0].title}`)
		embed.setURL(serverQueue.songs[0].url)
        if (serverQueue.songs.length <=1) return message.channel.send({embed :embed});
        var str = `${serverQueue.songs.map(song => `${y++}. [${song.title}](${song.url})\n`).slice(1,11).join("\n")}\n\n`;
        var embed = new Discord.RichEmbed()
        .setColor(color.color)
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setThumbnail("https://media.discordapp.net/attachments/492975144147615744/493028296699936777/1537617500423.png")
        .setDescription(str);
        if ((serverQueue.songs.length-10) > 0) embed.setFooter(`And ${serverQueue.songs.length-10} More..`);
        message.channel.send({embed : embed});
		}
	} else if (command === 'pause' || command === 'pa' || command === 'pau' || command === 'paus') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue && serverQueue.playing) {
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!message.member.voiceChannel) return ee(message,`You Should Be in A Voice Channel To Use This Command.`);
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			e(message, `**${serverQueue.songs[0].title}**, has been paused`);
			return;
		}
	} else if (command === 'resume' || command === 'r' || command === 'continue' || command === "res") {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue && !serverQueue.playing) {
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			e(message, `**${serverQueue.songs[0].title}**, has been resumed`);
			return;
	};
	} else if (command === 'repeat' || command === 'rpt') {
		if (!serverQueue) return err(message,`You Should Play Something To Use This Command.`);
		if (serverQueue) {
		if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
		if (!message.member.voiceChannel) return ee(message,`You Should Be in A Voice Channel To Use This Command.`);
			serverQueue.songs.splice(1, 0, serverQueue.songs[0])
			e(message, `**${serverQueue.songs[0].title}**, Will be repeated`);
			return undefined;
		}
	} else if (command === 'loop' || command === 'lo') {
			if (!serverQueue) return err(message, `You Should Play Something To Use This Command.`);
			if (serverQueue && serverQueue.playing) {
				if (!message.member.voiceChannel) return err(message,`You Should Be in A Voice Channel To Use This Command.`);
				if (message.guild.members.get(message.member.id).voiceChannel.id !== message.guild.members.get(client.user.id).voiceChannel.id) return err(message , `You Should Be in My Voice Channel To Use My Commands.`)
				if (serverQueue.loop == false) {
					serverQueue.loop = true;
					e(message, `**${serverQueue.songs[0].title}**, will be looped`)
				} else if (serverQueue.loop == true) {
					serverQueue.loop = false;
					e(message, `**${serverQueue.songs[0].title}**, will not be looped again`)
				};
			}
		}
});


function play(guild, song, message) {
	setTimeout(function(){
		const serverQueue = queue.get(guild.id);
		if (!song) {
			serverQueue.voiceChannel.leave();
			serverQueue.voiceChannel.join();
			queue.delete(guild.id);
			var embed = new Discord.RichEmbed()
			embed.setColor(color.color)
			embed.setDescription(`:checkered_flag: **${message.guild.name}** Queue has been finished.`)
			serverQueue.textChannel.send(embed)
			return;
		};
		if (!serverQueue.songs[0]){
			serverQueue.voiceChannel.leave();
			serverQueue.voiceChannel.join();
			queue.delete(guild.id);
			return;
		};
		console.log(serverQueue.songs);
		serverQueue.vote = [];
		const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			if (serverQueue.loop == true) {
				play(guild, serverQueue.songs[0], message);
				return undefined;
			};
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0], message);
		})
		.on('error', error => console.error(error));
		dispatcher.setVolumeLogarithmic(serverQueue.volume / 250);
		var embed = new Discord.RichEmbed()
		embed.setColor(color.color);
		embed.setAuthor(`Now playing 🎶 ${serverQueue.songs[0].title}`)
		embed.setURL(serverQueue.songs[0].url)
		serverQueue.textChannel.send(embed)
	},10);
}

 

client.on('message', message => {
    if (message.content === '$help-music') {
        let helpEmbed = new Discord.RichEmbed()
        .setTitle('**أوامر الميوزك**')
        .setDescription('** ( $ ) برفكس البوت**')
        .addField('Play أوامر', '1.play    2.p    3.search    4.ply')
        .addField('Skip أوامر', '1.Skip    2.ski    3.s    4.sk')
        .addField('Stop أوامر', '1.Stop    2.st    3.sto')
        .addField('Leave أوامر', '1.leave    2.disconnect    3.l')
        .addField('Volume أوامر', '1.volume    2.vol    3.v')
        .addField('Queue أوامر', '1.queue    2.q    2.qu    4.que')
        .addField('Pause أوامر', '1.pause    2.pa    3.pau    4.paus')
        .addField('Resume أوامر', '1.resume    2.r    3.continue    4.res')
        .addField('Repeat أوامر', '1.repeat    2.rpt')
		.addField('Loop أوامر', '1.loop    2.lo')
      message.channel.send(helpEmbed);
    }
});

let ar = JSON.parse(fs.readFileSync(`./SkyBot-Premium.json`, `utf8`))
client.on('guildMemberAdd', member => {
if(!ar[member.guild.id]) ar[member.guild.id] = {
onoff: 'Off',
role: 'Member'
}
if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})
client.on('message', message => {
if(!message.guild) return
if(!ar[message.guild.id]) ar[message.guild.id] = {
onoff: 'Off',
role: 'Member'
}
if(message.content.startsWith(prefix + `autorole`)) {
let perms = message.member.hasPermission(`MANAGE_ROLES`)
if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
let args = message.content.split(" ").slice(1)
if(!args.join(" ")) return message.reply(`${prefix}autorle toggle/setrole [ROLE NAME]`)
let state = args[0]
if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`)
if(state.trim().toLowerCase() == 'toggle') {
if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
}
if(state.trim().toLowerCase() == 'set') {
let newRole = message.content.split(" ").slice(2).join(" ")
if(!newRole) return message.reply(`${prefix}autorole set[ROLE NAME]`)
if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
ar[message.guild.id].role = newRole
message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
}
  }
if(message.content === prefix + 'info') {
let perms = message.member.hasPermission(`MANAGE_GUILD`)
if(!perms) return message.reply(`You don't have permissions.`)
var embed = new Discord.RichEmbed()
.addField(`Autorole : :sparkles:  `, `
State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)
.setColor(`BLUE`)
message.channel.send({embed})
}
fs.writeFile("./SkyBot-Premium.json", JSON.stringify(ar), (err) => {
if (err) console.error(err)
});
})

client.on('message',async message => {
  if(message.content.startsWith("$setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});

client.on('guildCreate', guild => {
   
  client.channels.get("513020768859455488")
const embed = new Discord.RichEmbed()
   .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Member Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .addField("New Server!")
         .setFooter('SkyBot Premium' , client.user.avatarURL)
           client.channels.get("513020768859455488").send({embed}); //Sup
}
 
);

client.on('guildDelete', guild => {
  client.channels.get("513020768859455488")
const embed = new Discord.RichEmbed()
   .setAuthor(`SkyBot Premium left a server ❎`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Members Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .setFooter('SkyBot Premium' , client.user.avatarURL)
           client.channels.get("513020768859455488").send({embed});
}
 
);
     
client.on("message", async message => { //حقوق سوبريم
    const args = message.content.slice(prefix.length).trim().split(/ +/g); //حقوق سوبريم
    const command = args.shift().toLowerCase();  //حقوق سوبريم
    if(message.author.bot) return;  //حقوق سوبريم
    if(message.content.indexOf(prefix) !== 0) return; //حقوق سوبريم
 
    if (command == "leave") { //حقوق سوبريم
       
 
        if(message.author.id != "492552276326481930") return message.reply("**Sorry, you don't have permission to use this!**");  //حقوق سوبريم
 
       
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`); //حقوق سوبريم
        let definedGuild = client.guilds.get(args[0]) //حقوق سوبريم
        if(!definedGuild) return message.reply(`** 404 : invalid guild id or this guild delted**`); //حقوق سوبريم
        client.guilds.get(args[0]).leave() //حقوق سوبريم
        .catch(error => { return message.reply(error.message) }) //حقوق سوبريم
    }    
})

client.on('message', message => {
    
if(message.content.split(' ')[0] == '$profile') {
if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

       let defineduser = '';
       if (!args[1]) { 
           defineduser = message.author;
       } else { // Run this if they did define someone...
           let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned;
       }

       const w = ['./id5.png','./id6.png'];
       var Canvas = require('canvas')
var jimp = require('jimp')

        const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
         dateFormat(now, 'dddd, mmmm dS, yyyy');
             let time = `${dateFormat(defineduser.createdAt)}`
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
            var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
       let Image = Canvas.Image,
           canvas = new Canvas(300, 300),
           ctx = canvas.getContext('2d');
       ctx.patternQuality = 'bilinear';
       ctx.filter = 'bilinear';
       ctx.antialias = 'subpixel';
 
       fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
           if (err) return console.log(err);
           let BG = Canvas.Image;
           let ground = new Image;
           ground.src = Background;
           ctx.drawImage(ground, 0, 0, 300, 300);

})
  var mentionned = message.mentions.users.first();

   var client;
     if(mentionned){
         var client = mentionned;
     } else {
         var client = message.author;
         
     }

var men = message.mentions.users.first();
           var heg;
           if(men) {
               heg = men
           } else {
               heg = message.author
           }
               let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                   if (err) return console.log(err);
                   ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                       if (err) return console.log(err);

                       let Avatar = Canvas.Image;
                       let ava = new Avatar;
                       ava.src = buf;
                       ctx.drawImage(ava, 112 , 40, 75, 75);
                       
                       
                       
                       
                       var status;
   if (defineduser.presence.status === 'online') {
       status = 'ONLINE';
ctx.fillStyle = `#2ce032`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
 
   } else if (defineduser.presence.status === 'dnd') {
       status = 'DND';
       ctx.fillStyle = `#ff0000`;
ctx.beginPath();
ctx.arc(179, 107, 8, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'idle') {
       status = 'IDLE';
       ctx.fillStyle = `#f4d32e`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'offline') {
       status = 'INVISIABLE';
       ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   }
                       
                       
                                             var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }  
                          
   
                       ctx.font = 'Bold 15px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(status, 70 , 108 );
                       
                        ctx.font = 'Bold 13px Arial';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );

                      
                       ctx.font = 'Bold 20px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${defineduser.username}`, 150.50 , 140);


                       ctx.font = 'Bold 15px Arial';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);

                       var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }

                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
                       
                       
    
          
                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
                       
message.channel.sendFile(canvas.toBuffer())


       })
   })




}

})

client.on('message', message => {
    if(message.content.startsWith('$quran')) {
		message.delete();
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.reply(`**You Must be in Voice Channel**`);

	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setFooter("Quran Command", 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiqVT5PZAfcy8qZxlr3SQv3mmCw9zPiu2YBLIQ4bBePL2jLm7h')
      .setDescription(` 
     🕋 Quran Commands 🕋
	 
🇦 القرآن كاملاً ماهر المعيقلي
🇧 سورة البقرة كاملة للشيخ مشاري العفاسي
🇨 سورة الكهف كاملة بصوت ماهر المعيلقي
⏹ لإيقاف القرآن الكريم
🇩 القرآن كاملاً عبدالباسط عبدالصمد
🇪 القرآن كاملاً ياسر الدوسري
🇫 سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي`)
	
	message.channel.sendEmbed(embed).then(msg => {
			msg.react('🇦')
		.then(() => msg.react('🇧'))
		.then(() => msg.react('🇨'))
		.then(() => msg.react('⏹'))
		.then(() => msg.react('🇩'))
		.then(() => msg.react('🇪'))
		.then(() => msg.react('🇫'))

// Filters		
	let filter1 = (reaction, user) => reaction.emoji.name === '🇦' && user.id === message.author.id;
	let filter2 = (reaction, user) => reaction.emoji.name === '🇧' && user.id === message.author.id;
	let filter3 = (reaction, user) => reaction.emoji.name === '🇨' && user.id === message.author.id;
	let filter4 = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
	let filter5 = (reaction, user) => reaction.emoji.name === '🇩' && user.id === message.author.id;
	let filter6 = (reaction, user) => reaction.emoji.name === '🇪' && user.id === message.author.id;
	let filter7 = (reaction, user) => reaction.emoji.name === '🇫' && user.id === message.author.id;

// Collectors
	let collector1 = msg.createReactionCollector(filter1, { time: 120000 });
	let collector2 = msg.createReactionCollector(filter2, { time: 120000 });
	let collector3 = msg.createReactionCollector(filter3, { time: 120000 });
	let collector4 = msg.createReactionCollector(filter4, { time: 120000 });
	let collector5 = msg.createReactionCollector(filter5, { time: 120000 });
	let collector6 = msg.createReactionCollector(filter6, { time: 120000 });
	let collector7 = msg.createReactionCollector(filter7, { time: 120000 });
	
// Events
collector1.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=Ktync4j_nmA", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
   });
});
collector2.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=ZWV2kuxQHtw", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`); //Hi
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector3.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=4mzp4j-XDUw", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector4.on('collect', r => {
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now Off**`);
		msg.edit(embed).then(msg.delete(5000));
});
collector5.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqXLGtZcUm8", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector6.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=WYT0pQne-7w", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
collector7.on('collect', r => {
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=LTRcg-gR78o", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => voiceChannel.leave());
		collector1.stop();
		collector2.stop();
		collector3.stop();
		collector4.stop();
		collector5.stop();
		collector6.stop();
		collector7.stop();
		embed.setDescription(`<@${message.author.id}> **Quran is Now On**`);
		msg.edit(embed).then(msg.delete(5000));
      });
});
})
}
});

                    


client.on('guildMemberAdd', member => {

     const welcomer =  member.guild.channels.find('name', 'welcome');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
    



const w = ['./img/w1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`welcome to ${member.guild.name}`, 300, 130);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer())



      
      
                    }  )  
      
                    

})
      });                    
 }
});

var dat = JSON.parse(fs.readFileSync('./invite.json', 'utf8'));
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) })
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("502824698145669135")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        })
    })
})
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', "welcome");
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.get("502824698145669135")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
 channel.send(`${member} Joined By ${Invite.inviter}`)
 }
            dat[Inv] = Invite.uses;
        })
    })
});

client.login(process.env.BOT_TOKEN);

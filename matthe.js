const { Client, MessageEmbed, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const { readdir } = require("fs");
const config = require("./config.json");
const db = require("quick.db");
const moment = require('moment');
const ms = require("ms");
require("moment-duration-format");
const buttons = require('discord-buttons');
buttons(client)
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
client.cooldown = new Map();
client.commandblocked = [];

require("./src/helpers/function")(client);

readdir("./src/commands/", (err, files) => {
    if (err) console.error(err)
    files.forEach(f => {
        readdir("./src/commands/" + f, (err2, files2) => {
            if (err2) console.log(err2)
            files2.forEach(file => {
                let prop = require(`./src/commands/${f}/` + file);
                console.log(`[MATTHE-COMMAND] ${prop.name} yüklendi!`);
                commands.set(prop.name, prop);
                prop.aliases.forEach(alias => {
                    aliases.set(alias, prop.name);
                });
            });
        });
    });
});

client.on("guildMemberAdd", member => {
if(member.user.username.includes("")){
member.roles.add("937698195809652844")
setTimeout(function() {
member.roles.remove("937698195855773722")
}, 10000);
member.send(`${member.guild.name} adlı sunucuda yasaklı tag kullandığınız için cezalı rolu aldınız!`)
}
})

client.on("guildMemberAdd", member => {
if(member.user.username.includes("")){
member.roles.add("937698195809652844")
setTimeout(function() {
member.roles.remove("937698195855773722")
}, 10000);
member.send(`${member.guild.name} adlı sunucuda yasaklı tag kullandığınız için cezalı rolu aldınız!`)
}
})

client.on("guildMemberAdd", member => {
if(member.user.username.includes("")){
member.roles.add("937698195809652844")
setTimeout(function() {
member.roles.remove("937698195855773722")
}, 10000);
member.send(`${member.guild.name} adlı sunucuda yasaklı tag kullandığınız için cezalı rolu aldınız!`)
}
})

readdir("./src/events", (err, files) => {
    if (err) return console.error(err);
    files.filter((file) => file.endsWith(".js")).forEach((file) => {
        let prop = require(`./src/events/${file}`);
        if (!prop.conf) return;
        client.on(prop.conf.name, prop)
        console.log(`[MATTHE-EVENT] ${prop.conf.name} yüklendi!`);
    });
});

client.on("message", msg => {
    if (msg.content.toLowerCase() === ".ilgiver") {
    msg.reply("vre bna ilgi");
    }
    });

client.on("message", async message => {
    if (message.content === "!buton-rol" && message.author.id === config.bot.owner) {
        const Giveaway = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("🎁 Çekiliş Katılımcısı")
            .setID("Giveaway");
        const Activity = new buttons.MessageButton()
            .setStyle("red")
            .setLabel("🎉 Etkinlik Katılımcısı")
            .setID("Activity");

        message.channel.send(`Merhaba Liberté ailesi!
 
Çekiliş Katılımcısı alarak **Nitro, Spotify, Netflix** ve benzeri çekilişlere katılıp ödül sahibi** olabilirsiniz.

Aşağıda bulunan butonlardan **Etkinlik Katılımcısı alarak konserlerimizden, oyunlarımızdan, ve etkinliklerimizden** faydalanabilirsiniz.

\`NOT:\` Kayıtlı, kayıtsız olarak hepiniz bu kanalı görebilmektesiniz. Sunucumuzda everyone veya here atılmayacağından dolayı kesinlikle rollerinizi almayı unutmayın.
`,
            {
                buttons: [Giveaway, Activity]
            });
    }

    if (message.content === "!buton-bilgi" && message.author.id === config.bot.owner) {

        const one = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("I")
            .setID("one");

        const two = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("II")
            .setID("two");

        const three = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("III")
            .setID("three");

        const four = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("IV")
            .setID("four");

        const five = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("V")
            .setID("five");
        message.channel.send("**Merhaba!** \n\n Aşşağıdaki butonlarla etkileşime girerek **sunucumuzdaki durumunuz hakkında bilgi edinebilirsiniz.** \n\n **1 -** `Sunucumuza daha önceden hangi isimlerle kayıt olduğunuzu kontrol edersiniz.` \n **2 -** `Sunucumuza daha önceden kayıt olup olmadığınızı kontrol edersiniz.` \n **3 -** `Sunucumuzda daha önceden ceza alıp almadığınızı kontrol edersiniz.` \n **4 -** `Sunucumuzdaki rollerinizi kontrol edersiniz.` \n **5 -** `Sunucumuza ne zaman katıldığınızı kontrol edersiniz.`", { buttons: [one, two, three, four, five] })
    }
});

client.login("OTM3NzA3OTk5ODk0NjAxNzU4.YffqoA.IgVk2DddaolpZvGaRiXCbsciAXc").then(x => console.log(`Bot ${client.user.username} olarak giriş yaptı!`)).catch(err => console.log(`Bot Giriş yapamadı sebep: ${err}`));

client.on('message', async message => {
if (message.content === 'matthe!fakekatıl') { 
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});
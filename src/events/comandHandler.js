const client = global.client;
const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");
const db = require("quick.db");
const ms = require('ms');

const iltifatlar = [
    'Lyrra seni cok sevio canim.',
    'Mavi gözlerin, gökyüzü oldu dünyamın.',
    'Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.',
    'Huzur kokuyor geçtiğin her yer.',
    'Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.',
    'Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.',
    'Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.',
    'Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.',
    'Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.',
    'Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.',
    'Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.',
    'Aynı zaman diliminde yaşamak benim için büyük ödüldür.',
    'Etrafımda olduğunda başka bir şeye ihtiyacım olmuyor.',
    'İğrenç insansın!',
    'Kalbime giden yolu aydınlatıyor gözlerin.  Sadece sen görebilirsin kalbimi. Ve sadece ben hissedebilirim bana karşı olan hislerini.',
    'Onu Bunu Boşver de bize gel 2 bira içelim.',
    "Gülüşün ne güzel öyle- cumhuriyetin gelişi gibi...",
    "Dur beynimi çıkarayım, eşit şartlarda konuşalım",
    "Azrail bile ayağıma geliyor ne bu tripler?",
    "Sevgilim var yazma?",
    "Halk pazarı gibisin canım sana olan tek ilgim ucuzluğundan",
    "O kadar pubg oynadım böyle vurulmadım",
    'Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.',
    "Öpüyorum gökyüzü gibi bakan gözlerinden. 3. Güneşi olmayan kalbe gökkuşağı açtırdın güzel insan.",
    "Sonra mucize diye bir şeyden bahsettiler. Gözlerin geldi aklıma…",
    "Bazen öyle güzel gülüyorsun ki, bütün dünya kör olsun istiyorum.",
    "Senin gülüşün benim en sevdiğim mevsim.",
    "Güneşi olmayan kalbe gökkuşağı açtırdın güzel insan.",
    "Sabahları görmek istediğim ilk şey sensin.",
    "Sevgilim geldi ben AFK'yım.",
    "Seni hakedecek ne yaptım bilmiyorum. Nasıl bu kadar şanslı olabilirim?",
    "Sen olmadan nasıl var olacağımı bilmiyorum.",
    "Güneşe gerek yok, gözlerindeki sıcaklık içimi ısıtıyor.",
    "Gözlerimi senden alamıyorum, benim tüm dünyam sensin.",
    "O kadar iyi bir arkadaşsın ki, tanıştığın herkes için mükemmel bir hediye gibisin.",
    "Bir şeyler ters gittiğinde, aramak istediğim ilk kişi sensin.",
    "Kusursuz tavırların var. Korkunç kararlar verdiğimde beni yargılamadığın için sana minnettarım.",
    "Baharda açan çiçeklerinden bile daha güzelsin. Eğer bir şair olsaydım, güzelliğine adanacak yüzlerce şiir yazabilirdim.",
    "O kadar güzelsin ki, bu dünyanın yaşamaya değer olduğuna beni inandırıyorsun.",
    "Dünyayı hiç kimsenin göremediği şekilde görmeme sebep olacak kadar güzelsin.",
    "Ruh ikizim su gibi duru güzelliğini düşünmekten vazgeçemiyorum.",
    "Baharı anımsatan kokunu içime çektiğimde, her şey mümkün görünüyor.",
    "Bu kadar güzel bakma, başka biri daha sana aşık olur diye ödüm kopuyor.",
    "Bu dünyaya yakışmayan bir güzelliğin var. Acaba hangi periler ülkesinden geldin.",
    "Güzel yüzünü göremediğim için geceleri hiç sevmiyorum.",
    "Ben bir botum. Ne bekliyorsun? Seninle konuşmamı mı?",
];
var iltifatSayi = 0;

module.exports = async (message) => {
    if (!message.guild || message.author.bot) return
      const owner = client.users.cache.get("796263552771817472");
    if ([".tag", "!tag", "tag"].some(x => message.content === x)) {
        message.channel.send(`\`${config.registration.GuilDTag}\``)
    }
    if (message.channel.id === config.channels.chat) {
        iltifatSayi++
        if (iltifatSayi >= config.bot.iltifatsize) {
            iltifatSayi = 0;
            message.reply(`**${(iltifatlar)[Math.floor(Math.random() * ((iltifatlar).length - 1) + 1)]}**`);
        }
    }
      const ownerr = client.users.cache.get("796263552771817472");
    const afkembed = new MessageEmbed()
        .setColor(message.member.displayHexColor)
        .setAuthor(message.member.displayName)
        .setFooter("LYRRA ❤️ ZELSA")
        .setTimestamp()
    const etiket = message.mentions.users.first()
    const uye = db.fetch(`user_${message.author.id}_${message.guild.id}`)
    const nickk = db.fetch(`nick_${message.author.id}_${message.guild.id}`)
    if (etiket) {
        const reason = db.fetch(`sebep_${etiket.id}_${message.guild.id}`)
        const uye2 = db.fetch(`user_${etiket.id}_${message.guild.id}`)
        if (message.content.includes(uye2)) {
            const time = db.fetch(`afktime_${message.guild.id}`);
            const timeObj = ms(Date.now() - time);
            message.channel.send(afkembed.setDescription(`${etiket} üyesi **${reason}** sebebiyle \`${timeObj}\` boyunca afk.`).setColor("RANDOM"))
        }
    }
    if (message.author.id === uye) {
        message.member.setNickname(nickk).catch(err => console.log(" "))
        db.delete(`sebep_${message.author.id}_${message.guild.id}`)
        db.delete(`user_${message.author.id}_${message.guild.id}`)
        db.delete(`nick_${message.author.id}_${message.guild.id}`)
        db.delete(`user_${message.author.id}_${message.guild.id}`);
        db.delete(`afktime_${message.guild.id}`)
        message.channel.send(afkembed.setDescription(`Başarıyla afk modundan çıkış yaptın.`))
    }
    if (!message.content.startsWith(config.bot.prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    const author = message.author
    const channel = message.channel
    const guild = message.guild
    const embed = new MessageEmbed()
        .setColor(message.member.displayHexColor)
        .setAuthor(message.member.displayName, author.avatarURL({ dynamic: true, size: 2048 }))
        .setFooter("LYRRA ❤️ ZELSA")
    if (cmd) {
        if (cmd.owner && config.bot.owner !== author.id) return
        if (cmd.guildowner && config.bot.owner !== author.id && guild.owner.id !== author.id) return
        if (client.cooldown.has(author.id) === config.bot.cooldown) {
            client.commandblocked.push(author.id)
            channel.send(embed.setDescription(`${author} Komutları kötüye kullandığın için engellendin.`))
        }
        if (client.commandblocked.includes(message.author.id)) return
        cmd.execute(client, message, args, embed, author, channel, guild);
        if (config.bot.owner !== author.id && guild.owner.id !== author.id) {
            if (!client.cooldown.has(author.id)) client.cooldown.set(author.id, 1);
            else client.cooldown.set(author.id, client.cooldown.get(author.id) + 1);
        }
        setTimeout(() => {
            if (client.cooldown.has(author.id)) {
                client.cooldown.delete(author.id)
            }
        }, 1000 * 60 * 5);
    }
}

module.exports.conf = {
    name: "message"
}
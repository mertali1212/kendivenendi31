const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Bir Kullanıcı Seçin.");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Bir Miktar Girin.");
    let data = client.eco.setMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Para Güncellendi`)
        .addField(`Kullanıcı`, `<@${data.user}>`)
        .addField(`Toplam Para`, data.after)
        .setColor("RED")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "paradüzenle",
    aliases: ["setbal"],
    usage: `paradüzenle @user <amount>`
}

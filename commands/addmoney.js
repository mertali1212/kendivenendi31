const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    if (!client.config.admins.includes(message.author.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Lütfen Bir Kişiyi Seçiniz!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Lütfen Bir Miktar Girin");
    let data = client.eco.addMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Para Eklendi!`)
        .addField(`Kullanıcı`, `<@${data.user}>`)
        .addField(`Verilen Bakiye`, `${data.amount} 💸`)
        .addField(`Toplam Para`, data.after)
        .setColor("BLACK")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "paraekle",
    aliases: ["addbal"],
    usage: `paraekle @user <amount>`
}

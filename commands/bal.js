const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let userBalance = client.eco.fetchMoney(user.id);
    const embed = new MessageEmbed()
        .setTitle(`Banka`)
        .addField(`Kullanıcı`, `<@${userBalance.user}>`)
        .addField(`Para`, `${userBalance.amount} 💸`)
        .setColor("BLACK")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

exports.help = {
    name: "hesabım",
    aliases: ["money", "credits", "balance"],
    usage: `hesabım`
}

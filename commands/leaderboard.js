const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
   
    let leaderboard = client.eco.leaderboard({ limit: 15, raw: false });
    if (!leaderboard || leaderboard.length < 1) return message.channel.send("❌ | Lider Taplosu Boş");
    const embed = new MessageEmbed()
        .setAuthor(`Lider Taplosu ${message.guild.name}!`, message.guild.iconURL)
        .setColor("WHİTE")
        .setThumbnail(client.users.cache.get(leaderboard[0].id) ? client.users.cache.get(leaderboard[0].id).displayAvatarURL : "https://cdn.discordapp.com/avatars/603948445362946084/a_f61398e073d78ae104e32b0517c891c3.gif")
        .setTimestamp();
    leaderboard.forEach(u => {
        embed.addField(`${u.position}. ${client.users.cache.get(u.id) ? client.users.cache.get(u.id).tag : "?"}`, `${u.money} 💸`);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "top",
    aliases: ["leaderboard"],
    usage: `top`
}

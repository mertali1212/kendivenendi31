const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let items = Object.keys(client.shop);
  let content = "";
  
  for (var i in items) {
    content += `${items[i]} - :dollar: ${client.shop[items[i]].cost}\n`
  }
  
  let embed = new MessageEmbed()
  .setTitle("Market")
  .setDescription(content)
  .setColor("BLURPLE")
  .setFooter("İtemi Satın Almak İçin :vc!satınal <item> Yapın.")
  return message.channel.send(embed);
};

exports.help = {
  name: "market",
  aliases: [],
  usage: `market`
};

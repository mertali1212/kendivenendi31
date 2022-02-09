const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  let userBalance = client.eco.fetchMoney(message.author.id);
  if (userBalance.amount < 1) return message.channel.send("Yeterli Paran Bulunmuyor.");
  let item = args[0];
  if (!item) return message.channel.send("Almak İstediğin Eşyayı Yazmalısın");
  let hasItem = client.shop[item];
  if (!hasItem || hasItem == undefined) return message.reply("Öyle Bir İtem Bulunmuyor");
  let isBalanceEnough = (userBalance.amount >= hasItem.cost);
  if (!isBalanceEnough) return message.reply("Bakiyeniz yetersiz. Bu öğeyi satın almak için :dollar: "+hasItem.cost+" gerekir.");
  let buy = client.eco.removeMoney(message.author.id, hasItem.cost);
  
  let itemStruct = {
    name: item.toLowerCase(),
    prize: hasItem.cost
  };
  
  client.db.push(`items_${message.author.id}`, itemStruct);
  return message.channel.send(`**${item} satın aldınız**`);
};

exports.help = {
  name: "satınal",
  aliases: [],
  usage: `satınal <item>`
};

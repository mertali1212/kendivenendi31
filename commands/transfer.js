exports.execute = async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
  let authordata = client.eco.fetchMoney(message.author.id) 
  if (!member) return message.channel.send('Lütfen kişiden bahsedin.') 
  let amount = args[1]
  if (!amount || isNaN(amount)) return message.channel.send('Lütfen Yollayacağınız Para Miktarını Seçiniz.') 
  if(authordata.amount < amount) return message.channel.send('Okadar Paranız Bulunmuyor!') 
  await client.eco.transfer(message.author.id, member.id, amount) 
  return message.channel.send(`Başarıyla Kişiye Para Yolladınız. 💸**${amount}** ** ${member.user.tag}**.`)
}
exports.help = {
  name: "parayolla",
  aliases: ['give', 'share'],
  usage: `parayolla <member> <amount>`
};

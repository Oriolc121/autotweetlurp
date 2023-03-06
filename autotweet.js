const Twit = require('twit');
const Discord = require('discord.js');
const client = new Discord.Client();
const twitterClient = new Twit({
  consumer_key: 'TU_CONSUMER_KEY',
  consumer_secret: 'TU_CONSUMER_SECRET',
  access_token: 'TU_ACCESS_TOKEN',
  access_token_secret: 'TU_ACCESS_TOKEN_SECRET',
});

const channelId = '941725610869391360'; // ID del canal twitter del discord de lurp. 

client.on('ready', () => {
  console.log(`Conectado como ${client.user.tag}`);
});

const stream = twitterClient.stream('statuses/filter', { follow: '211753938' }); // ID de la cuenta de Twitter de lurp. 

stream.on('tweet', tweet => {
  console.log(`Nuevo tweet de lurp: ${tweet.text}`);
  const embed = new Discord.MessageEmbed()
    .setColor('#1DA1F2')
    .setAuthor(tweet.user.name, tweet.user.profile_image_url_https, `https://twitter.com/${tweet.user.screen_name}`)
    .setDescription(tweet.text)
    .setTimestamp(tweet.created_at)
    .setFooter('Publicado en Twitter')
  
  client.channels.cache.get(channelId).send(embed);
});

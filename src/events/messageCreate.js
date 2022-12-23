const { owner, prefix } = require('../../config.js');
module.exports = {
    name: 'messageCreate',
    execute: async (message) => {
        let client = message.client;
        if (message.author.bot || message.channel.type === 'dm') return;

        //Selamın Aleyküm, Aleyküm Selam. Örnektir.
        if (message.content.split(" ").include("sa")) {
            message.reply("Aleyküm selam.")
        }
        //Bitiş
    }
};
module.exports = {
    name: 'messageCreate',
    execute: async (message) => {
        let client = message.client;
        if (message.author.bot || message.channel.type === 'dm') return;

        //#region Example
        if (["hi", "hello"].includes(message.content)) {
            message.reply("Hi, how are you today?");
        }
        //#endregion
    }
};
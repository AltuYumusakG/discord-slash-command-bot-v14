const { ActivityType } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        let activities = [`${client.user.username}`, `${client.guilds.cache.size.toString()} Server(s))`], i = 0;
        setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Listening }), 30 * 1000);
    }
};
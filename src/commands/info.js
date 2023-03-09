const discord = require("discord.js");
const os = require("os");
const moment = require("moment");
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { owner } = require("../../config.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("info")
        .setDescription("Gives info about bot."),
    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ size: 1024 }) })
            .setDescription(`Information about the bot.`)
            .addFields(
                { name: "Bot's Owner", value: `${owner.name} | ${owner.id}`, inline: true },
                { name: "Memory Usage", value: `${(process.memoryUsage().heapUsed / 262144).toFixed(2)} MB`, inline: true },
                { name: "Processor", value: `${os.cpus().map(cpu => `${cpu.model}`)[0]}`, inline: true },
                { name: "Uptime Duration", value: `${Math.floor(moment.duration(client.uptime).asMinutes())} Minute(s)`, inline: true },
                { name: "Node.js Version", value: `${process.version}`, inline: true },
                { name: "Discord.js Version", value: `${discord.version}`, inline: true },
                { name: "OS", value: `${os.platform()}`, inline: true },
                { name: "OS Byte", value: `${os.arch()}`, inline: true },
                { name: "User Count", value: `${client.users.cache.size.toString()}`, inline: true },
                { name: "Guild Count", value: `${client.guilds.cache.size.toString()}`, inline: true },
                { name: "Ping", value: `${client.ws.ping}`, inline: true },
            )
            .setTimestamp()
        interaction.reply({ embeds: [embed] });
    }
};
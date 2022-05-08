const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const id = '!';

const fs = require('fs'); // Подключаем родной модуль файловой системы node.js
let comms = require('./all/discordCommands/ping.js')
const botconfig = require("./config.json"); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс
client.once('ready', () => {
    console.log('Ready!');
});
client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'beep') {
        await interaction.reply('Boop!');
    }
});
client.login(config.token);
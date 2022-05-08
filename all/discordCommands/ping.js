const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const userMessageDict = {};
const prefix = '!';
module.exports = {
    name: 'ping',
    description: "Command ini digunakan untuk Ping",
    execute(message, args) {
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`);
    }

};
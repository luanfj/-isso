require('dotenv').config();

const Client = require("./src/struct/Client");

new Client().login(process.env.DISCORD_TOKEN);

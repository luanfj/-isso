require('dotenv').config();

const Client = require("./src/struct/BaseClient");

new Client().login(process.env.DISCORD_TOKEN);

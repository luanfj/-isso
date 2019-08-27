import Client from './struct/BaseClient';
import config from 'config';

new Client().login(config.get('discord.client_token'));

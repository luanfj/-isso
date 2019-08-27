import { Client } from 'discord.js';
import Loader from './Loader';
import { join } from 'path';

class BaseClient extends Client {
  constructor() {
    super();
    
    this.commands = [];
  }

  async login(token) {
    const loader = await new Loader(this);
    loader.Load(join(__dirname, '..', 'commands'));
    loader.Load(join(__dirname, '..', 'events'));
    
    return super.login(token);
  }
}

export default BaseClient;

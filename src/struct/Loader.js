import { walk } from 'walk';
import { resolve, sep } from 'path';
import { readdirSync, statSync, existsSync } from 'fs';

class Loader {
  constructor(client) {
    this.client = client;
  }

  Load(path) {
    if (!path) return;

    readdirSync(path).forEach(async result => {
      try {
        let rPath = path + sep + result;

        if (result.endsWith('.js')) {
          const Loading = require(rPath);
          
          new Loading.default().register(this.client)
          
          console.log('[Loaded] ' + result);
        } else if (statSync(rPath).isDirectory) {
          this.Load(rPath);
        }
      } catch (e) {}
    });
  }
}

export default Loader;

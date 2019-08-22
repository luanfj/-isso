const { walk } = require("walk");
const { resolve, sep } = require("path");

class Loader {
  constructor(client) {
    this.client = client;
  }
  
  Load(path) {
    if(!path) return;
    
    walk(path).on("file", (root, stats, next) => {
      if(!stats.name.endsWith(".js")) return;
      
      const Loading = new (require(resolve(root) + sep + stats.name));
      Loading.register(this.client);
      
      console.log("[Loaded] " + stats.name);
      
      next();
    });
  }
}

module.exports = Loader;

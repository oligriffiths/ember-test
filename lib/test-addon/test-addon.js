const Plugin = require("broccoli-plugin");

class MyPlugin extends Plugin {
  build() {
    throw new Error("AHHH");
  }
}

module.exports = MyPlugin;
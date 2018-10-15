/* eslint-env node */
'use strict';

const TestAddon = require('./test-addon');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeFor(name) {
    let tree = this._super(name);
    
    if (name === 'app') {
      tree = new TestAddon([tree]);
    }
    
    return tree;
  }
};

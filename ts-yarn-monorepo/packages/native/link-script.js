console.warn("This may need to be Run as Administrator on Windows")
const findRoot = require('find-root');
const fs = require('fs');
const path = require('path');

const link = (name, fromBase, toBase) => {
  const from = path.join(fromBase, 'node_modules', name);
  const to = path.join(toBase, 'node_modules', name);

  if (fs.existsSync(to)) {
    fs.unlinkSync(to);
  }

  fs.symlinkSync(from, to, 'dir');
};

module.exports = function makeSymlinks(from) {
  const root = findRoot(from, dir => {
    const pkg = path.join(dir, 'package.json');
    return fs.existsSync(pkg) && 'workspaces' in require(pkg);
  });

  link('react-native', root, from);
};

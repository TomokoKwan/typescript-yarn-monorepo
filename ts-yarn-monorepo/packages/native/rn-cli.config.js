const blacklist = require("metro/src/blacklist");
var path = require("path");
const findRoot = require('find-root');
const flatten = require('flatten');
const fs = require('fs');
const glob = require('glob');

function getWorkspaces(from) {
  const root = findRoot(from, dir => {
    const pkg = path.join(dir, 'package.json');
    return fs.existsSync(pkg) && 'workspaces' in require(pkg);
  });
  const {workspaces} = require(path.join(root, 'package.json'));
  return flatten(workspaces.packages.map(name => glob.sync(path.join(root, name))));
};

var config = {
    getProjectRoots() {
        const workspaces = getWorkspaces(__dirname);
        return [path.resolve(__dirname, "../..")].concat(workspaces);
    },
    getBlacklistRE() {
        // blacklist root react-native
        const rootPath = path.resolve(__dirname, "..");
        const parentName = path
            .dirname(rootPath)
            .split(path.sep)
            .pop();
        console.log(parentName);
        return blacklist([
            new RegExp(parentName + "[\\/]node_modules[\\/]react-native[\\/].*")
        ]);
    }
};
module.exports = config;

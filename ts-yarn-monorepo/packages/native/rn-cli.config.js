const blacklist = require("metro/src/blacklist");
const getWorkspaces = require("get-yarn-workspaces");
var path = require("path");
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

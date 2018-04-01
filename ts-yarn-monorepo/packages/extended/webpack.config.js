function buildConfig() {
    let isProd = (process.env.NODE_ENV === 'production');
    let configFile = `./webpack.config.${isProd ? 'prod' : 'dev'}.js`;
    console.log(`using webpack config: ${configFile}`);
    return require(configFile);
}

module.exports = buildConfig;

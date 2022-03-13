const webpackmerge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.prod.config");

module.exports = (env, argv) => {
  let config = argv.mode === "development" ? devConfig : proConfig;
  return webpackmerge.merge(baseConfig, config);
};

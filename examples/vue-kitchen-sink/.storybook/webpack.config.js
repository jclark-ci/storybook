const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post',
  });
  config.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/source-loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });
  return config;
};

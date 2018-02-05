const path = require('path');
const merge = require('webpack-merge');
const plugins = require('./webpack/plugins');

module.exports = (params) => {
  const config = {
    environment: (params && params.environment) ? params.environment : 'development',
    theme: (params && params.theme) ? params.theme : 'default',
    analysis: (params && params.analysis) ? params.analysis : false,
  };

  console.info('*** Environment', config.environment);
  console.info('*** Analysis', config.analysis);
  console.info('*** Theme', config.theme);

  return merge({
    context: path.resolve('src'),

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(jpe?g|png|svg|gif|ico|ttf|woff|woff2|eot)$/,
          use: [
            {
              loader: 'url-loader',
              options: {},
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.json', '.css', '.scss'],
      modules: [path.resolve('src'), 'node_modules'],
      alias: {
        components: path.resolve('src/components'),
        modules: path.resolve('src/modules'),
        libs: path.resolve('src/libs'),
        assets: path.resolve('src/assets'),
      },
    },

    plugins: [
      plugins.CommonsChunkPlugin,
      plugins.ModuleConcatenationPlugin,
      plugins.HtmlWebpackPlugin,
    ],
  }, require('./webpack/' + config.environment)(config));
};

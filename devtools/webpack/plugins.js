const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTemplate = require('html-webpack-template');
const WebpackChunkHash = require('webpack-chunk-hash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  CommonsChunkPlugin:
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),

  HtmlWebpackPlugin:
    new HtmlWebpackPlugin({
      title: 'Hazard Smart Assistant',
      appMountId: 'root',
      inlineManifestWebpackName: 'webpackManifest',
      template: HtmlWebpackTemplate,
      favicon: path.resolve('src/favicon.ico'),
      minify: { collapseWhitespace: true },
      inject: false,
    }),

  HashedModuleIdsPlugin:
    new webpack.HashedModuleIdsPlugin(),

  WebpackChunkHash:
    new WebpackChunkHash(),

  ExtractTextPlugin:
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true,
    }),

  NamedModulesPlugin:
    new webpack.NamedModulesPlugin(),

  HotModuleReplacementPlugin:
    new webpack.HotModuleReplacementPlugin(),

  BundleAnalyzerPlugin:
    new BundleAnalyzerPlugin(),
};

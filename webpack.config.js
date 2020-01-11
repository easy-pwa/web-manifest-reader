const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    'index': './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.d.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};

const moduleConfig = Object.assign({}, config);

const commonConfig = Object.assign({}, config, {
  output: {
    filename: 'lib.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'WebManifestReader',
    libraryExport: 'default',
  }
});

module.exports = [moduleConfig, commonConfig];

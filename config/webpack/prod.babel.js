import { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import config from './common/config.babel';
import htmlConfig from './common/html.config.babel';

config.devtool = '#source-map';

config.plugins = [
  ...config.plugins,
  new HtmlWebpackPlugin(htmlConfig),
  new DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    },
  }),
];

export default config;
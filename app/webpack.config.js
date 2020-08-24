const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
  mode: process.env.SLOWCH_MODE || 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'app.js',
    publicPath: '/dist/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              {
                targets: 'defaults',
              }
            ]
          }
        }
      },
      {
        test: /.jsx$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /.tsx$/,
        use: 'ts-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: getThemeVariables({
                  dark: true,
                  compact: true,
                }),
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
          }
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    modules: ['src', 'node_modules'],
    extensions: [
      '.json', '.svg', 
      '.gif', '.png', '.jpg',
      '.tsx', '.jsx', '.js',
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
}

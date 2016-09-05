const webpack = require('webpack');

module.exports = {

  entry: __dirname + '/src/app.js',

  output: {
    path: __dirname + '/app/',
    filename: 'app.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${process.env.NODE_ENV}"`
      }
    })
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-runtime'],
        babelrc: false
      }
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

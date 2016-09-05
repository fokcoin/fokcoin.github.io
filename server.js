const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const server = new WebpackDevServer(webpack(config), {
  contentBase: __dirname + '/app',
  noInfo: true,
  hot: true
});


server.listen(8080, (err, result) => {
  if (err) throw new Error(err);

  console.log('Flipcoin dev server running on http://localhost:8080');
});

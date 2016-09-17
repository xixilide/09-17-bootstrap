/* webpack.config.js */
var path = require('path');
var webpack= require('webpack');
module.exports = {
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath:"./build/"
  },

  devServer: {

    stats: { colors: true },
    port: 8080,
    inline: true,
    hot:true,
    historyApiFallback: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve:{
    extensions:["",".js",".jsx"]
  },
  module: {
  loaders: [
      {
       test: /\.js$/,
       exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css/,
        loader: 'style!css!autoprefixer'
      },
      {
        test: /\.(jpe?g|png)$/,
        loader: 'file-loader'
      },
    {  test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000"
}
    ]
},
  devtool: 'cheap-module-source-map'
  //将build删除了之后，与-d作用相同
};

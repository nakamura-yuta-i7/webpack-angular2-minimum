var webpack = require('webpack')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var ExtractTextPlugin = require("extract-text-webpack-plugin")
// global.Promise = require("bluebird") // for angular2, nodejs v0.12.7

module.exports = {
	// entry内で定義したentoryポイントとなる各.jsファイルの保存パス
	context: __dirname + "/src/web",
	// entry内で指定されているキーがoutputで指定されたディレクトリにそれぞれのキー名.jsとして出力される
	entry: {
		'main': './main.js',
		'angular2/main': './angular2/main.ts'
	},
	// entryで設定されたキー毎にファイルが生成される
	output: {
		path: __dirname + "/public/dist",
		filename: '[name].js'
	},
	resolve: {
		// module: で設定された拡張子のファイルはrequireで読み込めるが、require("~~.jade")のように
		// 拡張子も含めないで読み込みたいなら以下に設定する
		// Default: ["", ".webpack.js", ".web.js", ".js"]
		extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
	},
	devtool: 'inline-source-map',
	// entryとなる各.jsファイルからrequire("~~")で読み込める拡張子を設定する
	module: {
		loaders: [
			// css3 & postcss
			{ test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
			{ test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192', },
			{ test: /\.ts?$/,
				loader: 'ts-loader?compiler=ntypescript' },
		]
	},
	postcss: function () {
		var autoprefixer = require('autoprefixer');
		var precss       = require('precss');
		return [autoprefixer, precss];
	},
	plugins: [
		// entryで設定された各生成後のファイルで共通化できるコードはこのファイルにまとめて外出しできる
		// なので必ずhtml側では init.js は常に script src="init.js" で読み込むこと
		new CommonsChunkPlugin('init.js'),
		// requireしたCSSは、entryで指定された各entryポイントとなるjsファイルの名前毎にcssファイルが生成される
		new ExtractTextPlugin("[name].css"),
		// 生成されるすべてのファイルが圧縮されたものにしたいなら以下の設定を行う
		// new uglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	}
		// }),
	],
	// 指定のモジュールを予めグローバル変数にできるらしい
	// ここの使い方はまだよくわかっていない
	// 参考URL: http://qiita.com/shn/items/7bd544a39ee7ac858669
	// html側で CDN などでライブラリを読み込むならここでの指定は不要という程度の理解
	externals: {
		// 'React': 'React',
		// 'ReactDOM': 'ReactDOM',
		// 'jquery': '$',
	},
}

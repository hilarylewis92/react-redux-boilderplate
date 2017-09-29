module.exports = {
	entry: './app/index.js',
	output: {
		path: __dirname + './build/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
		]
	},
	devServer: {
		contentBase: './build',
		inline: true
	},
	resolve: {
		extensions: ['.js', '.json', '.jsx', '.css', '.scss']
	},
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true,
	}
}
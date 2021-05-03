var BundleTracker = require('webpack-bundle-tracker')
var WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
	publicPath: "/",
	runtimeCompiler: true,
	devServer: {
		proxy: 'https://salty-temple-72490.herokuapp.com/'
	}
}
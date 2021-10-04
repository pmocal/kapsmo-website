var BundleTracker = require('webpack-bundle-tracker')
var WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = {
	publicPath: "/",
	runtimeCompiler: true,
	devServer: {
		proxy: 'http://localhost:3000/'
	}
}
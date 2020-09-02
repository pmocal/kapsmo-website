module.exports = {
	publicPath: "/",
	runtimeCompiler: true,
	devServer: {
	    proxy: 'https://salty-temple-72490.herokuapp.com/',
	}
}
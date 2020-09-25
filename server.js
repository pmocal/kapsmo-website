var history = require('connect-history-api-fallback');

// optional: allow environment to specify port
const port = process.env.PORT || 8080
const path = require('path');

// wire up the module
const express = require('express')

// create server instance
const app = express()
app.use(history({
	disableDotRule: true,
}));

// bind the request to an absolute path or relative to the CWD
app.use(express.static('dist'))
// start the server
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port);
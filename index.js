var express = require('express');
var path    = require("path");
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+ '/public/views/index.html'));
});

app.listen(app.get('port'), () => {
	console.log('Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate');
});

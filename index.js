var express = require('express');
var path    = require("path");
var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+ '/public/views/index.html'));
});

function notFound404(req, res) {
	res.status(404);
	res.render('404.html');
}

function internalServerError500(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500.html');
}

//app.use(notFound404);
//app.use(internalServerError500);

app.listen(app.get('port'), () => {
	console.log('Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate');
});

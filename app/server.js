const express = require('express'),
	request = require('request'),
	cors = require('cors'),
	client_id = '8c5b28bf383947b59ef6dfea70c1b635',
	client_secret = '99d72f00c78f46e497038c27cd40d2f5',
	app = express(),
	bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
let token = '';

app.get('/get_token', function (req, res) {

	const authOptions = {
		url: 'https://accounts.spotify.com/api/token',
		headers: {'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))},
		form: {
			grant_type: 'client_credentials'
		},
		json: true
	};

	request.post(authOptions, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			let access_token = body.access_token;
			token = body.access_token;
			res.send({
				'access_token': access_token
			});
		}
	});
});

app.post('/search', function (req, res) {

	let search = req.body.search,
		type = req.body.type;

	const authOptions = {
		url: 'https://api.spotify.com/v1/search?q=' + search + '&type=' + type,
		headers: {'Authorization': 'Bearer ' + token},
		json: true
	};

	request.get(authOptions, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			res.send(body);
		}
	}, function (error) {
		console.log(error);
	});
});

app.listen(8888);
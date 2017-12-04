'use strict';

import express from 'express';
import path from 'path';
import request from 'request';
import cors from 'cors';
import bodyParser from 'body-parser';
import _ from 'lodash';

const app = express();

const port = 3000;
const client_id = '8c5b28bf383947b59ef6dfea70c1b635';
const client_secret = '99d72f00c78f46e497038c27cd40d2f5';
let token = '';

app.use('/', express.static('dist'));
app.use(cors());
app.use(bodyParser.json());

app.get('/api/get_token', handleLoginApi);
app.post('/api/search', handleSearch);
app.get('/api/artist/:id', handleAlbums);
app.get('*', handleDefault);

function handleLoginApi(req, res) {
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
}

function handleSearch(req, res) {
	let search = req.body.search,
		type = req.body.type;

	const authOptions = {
		url: 'https://api.spotify.com/v1/search?q=' + search + '&type=' + type,
		headers: {'Authorization': 'Bearer ' + token},
		json: true
	};

	request.get(authOptions, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			res.send(body);
		}
	}, (error) => {
		console.log(error);
	});
}

function handleAlbums(req, res) {
	const authOptions = {
		url: 'https://api.spotify.com/v1/artists/' + req.params.id + '/albums?market=CA&album_type=album',
		headers: {'Authorization': 'Bearer ' + token},
		json: true
	};

	request.get(authOptions, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			let albumsIds = body.items.map((album) => {
				return album.id;
			});

			let queryParam = [...albumsIds].join(',');
			const authOptions = {
				url: 'https://api.spotify.com/v1/albums?market=CA&ids=' + queryParam,
				headers: {'Authorization': 'Bearer ' + token},
				json: true
			};

			return request.get(authOptions, (error, response, body) => {
				if (!error && response.statusCode === 200) {
					let albumsWithoutDuplicates = _.uniqBy(body.albums, 'name').sort((a, b) => {
						return (a.release_date < b.release_date) ? 1 : -1;
					});

					res.send({albums: albumsWithoutDuplicates});
				}
			}, (error) => {
				console.log(error);
			});
		}
	}, (error) => {
		console.log(error);
	});
}

function handleDefault(req, res) {
	//res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
	res.redirect('/');
}

app.listen(port, function () {
	console.log(`Server Started at port ${port}`);
});
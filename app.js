const express = require('express')
const request = require('request')
const cors = require('cors');
const compression = require('compression')
const app = express()
let port = 3000

app.use(express.json())
app.use(cors())
app.use(compression())

if (process.argv.length > 2) {
	port = process.argv[2];
}

app.get('/fetch', (req, res) => {
	if (!req.query.url) {
		return res.status(422).json({ 'error': 'url param is mandatory' })
	}

	request(req.query.url, { json: true }, (err, response, body) => {
		if (err) { return console.log(err) }
		return res.status(response.statusCode.toString()).json(body)
	});
})

app.post('/fetch', (req, res) => {
	if (!req.query.url) {
		return res.status(422).json({ 'error': 'url param is mandatory' })
	}

	request.post({
		headers: req.headers,
		url: req.query.url,
		body: JSON.stringify(req.body)
	}, function (err, response, body) {
		if (err) { return console.log(err) }
		return res.status(response.statusCode.toString()).json(JSON.parse(body))
	});
});

app.listen(port, () => {
	console.log(`Server running at port: ${port}`)
	console.log(`Hit Ctrl+c to shutdown server`)
})

// Imports
const express = require('express');
const mongoose = require('mongoose');
const Message = require('./models/Message');
require('dotenv').config();

// App config
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Db connection
const mongoConn = process.env.MONGODB_CONNECTION;

mongoose
	.connect(mongoConn, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('MongoDB Connected!');
	})
	.catch((err) => {
		console.log(err);
	});

// ??

// API routes
app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/api/v1/messages/sync', (req, res) => {
	Message.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.post('/api/v1/messages/new', (req, res) => {
	const dbMessage = req.body;

	Message.create(dbMessage, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

// App listening
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

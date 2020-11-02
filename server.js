// Imports
const express = require('express');
const mongoose = require('mongoose');
const Pusher = require('pusher');
const Message = require('./models/Message');
require('dotenv').config();

// App config
const app = express();
const port = process.env.PORT || 5000;

const pusher = new Pusher({
	appId: process.env.PUSHER_APPID,
	key: process.env.PUSHER_KEY,
	secret: process.env.PUSHER_SECRET,
	cluster: 'us2',
	useTLS: true
});

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
		const db = mongoose.connection;
		const msgCollection = db.collection('savedmessages');
		const changeStream = msgCollection.watch();

		changeStream.on('change', (change) => {
			console.log(change);

			if (change.operationType === 'insert') {
				const messageDetails = change.fullDocument;
				pusher.trigger('messages', 'inserted', {
					name: messageDetails.name,
					message: messageDetails.message
				});
			} else {
				console.log('An error occurred when triggering Pusher');
			}
		});
	})
	.catch((err) => {
		console.log(err);
	});

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

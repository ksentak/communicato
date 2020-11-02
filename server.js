// Imports
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// App config
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Db connection
const mongoConn = process.env.MONGODB_CONNECTION;

mongoose
	.connect(mongoConn, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected!'))
	.catch((err) => console.log(err));

// ??

// API routes
app.get('/', (req, res) => {
	res.send('Hello World');
});

// App listening
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

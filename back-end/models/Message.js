const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
	message: String,
	name: String,
	timestamp: String,
	received: Boolean
});

const Message = mongoose.model('savedmessages', messageSchema);

module.exports = Message;

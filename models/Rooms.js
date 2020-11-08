const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
	name: String
});

const Rooms = mongoose.model('rooms', roomSchema);

module.exports = Rooms;

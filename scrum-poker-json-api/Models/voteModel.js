const mongoose = require('mongoose');
const User 	   = require('./userModel.js');


const VoteSchema = new mongoose.Schema({
	voter: User.schema,
	choice: {type: Number, enum: [0, .5, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]}
});


module.exports = mongoose.model('Vote', VoteSchema);


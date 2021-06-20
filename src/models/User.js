const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('User', UserSchema);

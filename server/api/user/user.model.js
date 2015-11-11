var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roles = ['student', 'teacher'];
var UserSchema = new Schema({
  name: String,
  role: {
    type: String,
    enum: roles
  },
  clan: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Clan"
  }
});


module.exports = mongoose.model('User', UserSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClanSchema = new Schema({
  name: String,
  chief: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});


module.exports = mongoose.model('Clan', ClanSchema);
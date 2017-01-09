const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../../01-users/models/user');


const courseSchema = new mongoose.Schema({
  title:   {
    type:     String,
    required: true
  },
  imagePath:         {
    type:     String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  accessGroup: {
    type: String,
    required: true
  },

  lessons:  {
    type: String,
    required: true
  },
  students: [ {type: Schema.Types.ObjectId, ref: User} ]
});


module.exports = mongoose.model('Course', courseSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    creationDate: Date,
    userId:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    location: String,
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Sensor', userSchema);
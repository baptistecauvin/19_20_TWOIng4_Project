const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
  {
    location:{ 
      type: String,
      required: true,
    },
    personsInHouse: Number,
    houseSize: String
  },

  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
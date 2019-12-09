const mongoose = require('mongoose');



const userSchema = new mongoose.Schema(
  {
  	//Pas besoin de rcupérer l'id ?
  	//id: String,
    location: String,
    personsInHouse: Number,
    houseSize: String
  },

  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', userSchema);
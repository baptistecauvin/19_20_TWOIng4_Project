const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    type: String,
    creationDate: String,
    value : Number,
    sensorId:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sensor'
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Measure', userSchema);
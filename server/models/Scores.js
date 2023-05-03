const { Schema, model } = require("mongoose");

const scoreSchema = new Schema({
  points: {
    type: Number,
    required: true,
    unique: true,
  },
  player: {
    type: String,
    required: true,
    trim: true,
  }
});

const Scores = model('Scores', scoreSchema);

module.exports = Scores;

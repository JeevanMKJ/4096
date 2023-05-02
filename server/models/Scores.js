const { Schema, model } = require("mongoose");

const scoreSchema = new Schema({
  score: {
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

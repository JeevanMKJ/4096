const { Schema, model } = require("mongoose");

const scoreSchema = new Schema({
  points: {
    type: Number,
    required: true,
  },
  player: {
    type: String
  }
});

const Scores = model('Scores', scoreSchema);

module.exports = Scores;

const { Schema, model } = require("mongoose");

const scoreSchema = new Schema({
  score: {
    type: Number,
    required: true,
    unique: true,
  },
});


module.exports = scoreSchema;

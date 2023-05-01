const { Schema, model } = require("mongoose");

const undefined2Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const undefined2 = model("undefined2", undefined2Schema);

module.exports = undefined2;

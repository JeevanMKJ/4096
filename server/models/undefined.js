const { Schema, model } = require("mongoose");

const undefinedShema = new Schema({});

const undefined = model("undefined", undefinedSchema);

module.exports = undefined;

const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["admin","member"], default: "member" }
});

module.exports = mongoose.model("User", schema);

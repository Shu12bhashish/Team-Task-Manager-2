const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum:["todo","in-progress","done"], default:"todo" },
  deadline: Date
});

module.exports = mongoose.model("Task", schema);

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: [true, "must fillup"], trim: true },
  Completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);

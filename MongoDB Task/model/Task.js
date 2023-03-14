const mongoose = require('mongoose');
const validator = require('validator');

// Model
const taskSchema = mongoose.Schema({
  description: String,
  isCompleted: Boolean,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

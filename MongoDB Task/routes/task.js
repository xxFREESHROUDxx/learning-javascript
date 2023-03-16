const express = require('express');
const router = express.Router();

const Task = require('../model/Task');

// /task POST method
router.post('/task', async (req, res) => {
  try {
    console.log(req.body);
    const task = new Task(req.body);
    console.log(task);
    await task.save();

    return res.status(201).json({ success: true, task });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
});

// /task GET method
router.get('/task', async (req, res) => {
  try {
    console.log(req.body);
    const task = await Task.find();
    return res.json({ success: true, task });
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
});

// /task/:id GET method for specific task data
router.get('/task/:id', async (req, res) => {
  try {
    console.log(req.body);
    const task = await Task.findById(req.params.id);
    return res.json({ success: true, task });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

// /task/:id PATCH method for specific Task Data
router.patch('/task/:id', async (req, res) => {
  try {
    console.log(req.body);
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found!',
      });
    }
    return res.json({ success: true, task });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// /task/:id DELETE method for deleting specific task data
router.delete('/task/:id', async (req, res) => {
  try {
    console.log(req.body);
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found!',
      });
    }
    return res.json({ success: true, task });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();

// accessing task controller
const {
  storeTask,
  fetchAllTask,
  getSpecificTask,
  updateSpecificTask,
  deleteSpecificTask,
} = require('../controller/taskController');

// /task POST method
router.post('/task', storeTask);

// /task GET method
router.get('/task', fetchAllTask);

// /task/:id GET method for specific task data
router.get('/task/:id', getSpecificTask);

// /task/:id PATCH method for specific Task Data
router.patch('/task/:id', updateSpecificTask);

// /task/:id DELETE method for deleting specific task data
router.delete('/task/:id', deleteSpecificTask);

module.exports = router;

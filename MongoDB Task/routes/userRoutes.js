const express = require('express');
const router = express.Router();

// accessing user controller
const {
  storeUser,
  fetchAllUser,
  getSpecificUser,
  updateSpecificUser,
  deleteSpecificUser,
} = require('../controller/userController');

// /user POST method
router.post('/user', storeUser);

// /user GET method
router.get('/user', fetchAllUser);

// /user/:id GET method for specific user data
router.get('/user/:id', getSpecificUser);

// /user/:id PATCH method for specific User Data
router.patch('/user/:id', updateSpecificUser);

// /user/:id DELETE method for deleteing specific user data
router.delete('/user/:id', deleteSpecificUser);

module.exports = router;

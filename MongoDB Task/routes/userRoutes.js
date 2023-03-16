const express = require('express');
const router = express.Router();

// accessing user controller
const {
  storeUser,
  fetchAllUser,
  getSpecificUser,
  updateSpecificUser,
  deleteSpecificUser,
  login,
} = require('../controller/userController');

router.post('/user', storeUser);
router.post('/user/login', login);
router.get('/user', fetchAllUser);
router.get('/user/:id', getSpecificUser);
router.patch('/user/:id', updateSpecificUser);
router.delete('/user/:id', deleteSpecificUser);

module.exports = router;

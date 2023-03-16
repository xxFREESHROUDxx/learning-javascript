const express = require('express');
const router = express.Router();

const User = require('../model/User');

// /user POST method
router.post('/user', async (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    console.log(user);
    await user.save();

    return res.status(201).json({ success: true, user });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
});

// /user GET method
router.get('/user', async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.find();
    return res.json({ success: true, user });
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
});

// /user/:id GET method for specific user data
router.get('/user/:id', async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findById(req.params.id);
    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

// /user/:id PATCH method for specific User Data
router.patch('/user/:id', async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found!',
      });
    }
    return res.json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

// /user/:id DELETE method for deleteing specific user data
router.delete('/user/:id', async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found!',
      });
    }
    return res.json({ success: true, user });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;

const User = require('../model/User');
const bcrypt = require('bcryptjs');

exports.storeUser = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    console.log(req.body);
    const user = new User(req.body);
    console.log(user);
    await user.save();

    return res.status(201).json({ success: true, user });
  } catch (e) {
    return res.status(400).json({ success: false, message: e.message });
  }
};

exports.fetchAllUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.find();
    return res.json({ success: true, user });
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
};

exports.getSpecificUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findById(req.params.id);
    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

exports.updateSpecificUser = async (req, res) => {
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
};

exports.deleteSpecificUser = async (req, res) => {
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
};

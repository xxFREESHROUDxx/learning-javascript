const User = require('../model/User');

exports.storeUser = async (req, res) => {
  try {
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
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found!',
      });
    }

    const keys = Object.keys(req.body);

    for (let key of keys) {
      user[key] = req.body[key];
    }
    await user.save();

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

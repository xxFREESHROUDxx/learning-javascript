const User = require('../model/User');
const bcrypt = require('bcryptjs');

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

exports.login = async (req, res) => {
  // accessing email and password from the database
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: 'Invalid email or password!' });
  }

  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email/password',
    });
  }

  return res.status(200).json({
    success: true,
    user,
  });
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

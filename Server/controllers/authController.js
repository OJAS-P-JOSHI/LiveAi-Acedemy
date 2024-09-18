const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { verifyGoogleToken } = require('../config/googleAuth');
const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
  
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = new User({
    fullName,
    email,
    password: hashedPassword,
  });

  await user.save();
  res.status(201).json({ _id: user._id, fullName: user.fullName, email: user.email, token: generateToken(user._id) });
});

const googleLogin = asyncHandler(async (req, res) => {
  const { tokenId } = req.body;
  const payload = await verifyGoogleToken(tokenId);

  if (!payload) {
    res.status(401).json({ message: 'Invalid Google token' });
    return;
  }

  const { sub, email, name, picture } = payload;
  let user = await User.findOne({ googleId: sub });

  if (!user) {
    user = new User({
      googleId: sub,
      email,
      fullName: name,
      profileImage: picture,
    });
    await user.save();
  }

  res.json({ _id: user._id, fullName: user.fullName, email: user.email, token: generateToken(user._id) });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { registerUser, googleLogin };

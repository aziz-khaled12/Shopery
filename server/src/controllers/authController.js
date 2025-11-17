const jwt = require('jsonwebtoken');
const User = require('../models/User');
const BillingInfo = require('../models/BillingInfo');
const Role = require('../models/Role');
const { validationResult } = require('express-validator');

// Helper function to generate JWT token
const generateToken = (userId, role) => {
  return jwt.sign(
    { userId, role },
    process.env.JWT_SECRET,
    { expiresIn: '2h' }
  );
};

// Signup Controller
exports.signup = async (req, res) => {
  const errors = validationResult(req);
  console.log("Validation errors: ", errors);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  console.log("Signup request body: ", req.body);


  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists with email: ", email);
      return res.status(400).json({ message: 'Email already exists' });
    }

    

    // Find customer role
    const customerRole = await Role.findOne({ name: 'customer' });
    if (!customerRole) {
      console.error("Customer role not found in the database");
      return res.status(500).json({ message: 'Customer role not configured' });
    }

    console.log("customerRole: ", customerRole)
    console.log("req.body: ", req.body )

    // Create new user
    const newUser = new User({
      email,
      password,
      role: customerRole._id,
      firstName: req.body.firstName || '',
      lastName: req.body.lastName || ''
    });

    console.log("newUser before save: ", newUser)

    await newUser.save();

    const billingInfo = new BillingInfo({
      userId: newUser._id
    })

    console.log("billingInfo before save: ", billingInfo)

    await billingInfo.save()
    await User.findByIdAndUpdate(newUser._id, {billingAddress: billingInfo._id})

    // Generate token
    const token = generateToken(newUser._id, 'customer');

    res.status(201).json({
      userId: newUser._id,
      email: newUser.email,
      role: 'customer',
      token,
      tokenExpiration: '2h'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email }).populate('role');
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user._id, user.role.name);

    res.json({
      userId: user._id,
      email: user.email,
      role: user.role.name,
      token,
      tokenExpiration: '7d'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


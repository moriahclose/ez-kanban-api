const express = require("express");
const router = express.Router();

const User = require("../models/user");

// Create a User
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a User
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});

// Update a User
router.patch('/:id', getUser, async (req, res) => {
  Object.keys(req.body).map((key) => res.user[key] = req.body[key]);
  try {
    const newUser = await res.user.save();
    res.json(newUser);
  } catch (err) {
    res.status(400).json({ err: err.message})
  }
});

// Delete a user
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted user." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;

  try {
    user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.'});
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
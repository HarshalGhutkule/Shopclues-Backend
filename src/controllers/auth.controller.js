require("dotenv").config();

const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

const {validationResult} = require("express-validator");

const createToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    if (user)
      return res.status(400).send({ message: "Please try another mail" });

    user = await User.create(req.body);

    const token = createToken(user);

    let status = "ok";

    return res.status(200).send({ user, token, status });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const login = async (req, res) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {
    let user = await User.findOne({ username: req.body.username });

    if (!user)
      return res
        .status(400)
        .send({ message: "Please try another username & password" });

    const match = user.checkPassword(req.body.password);

    if (!match)
      return res
        .status(400)
        .send({ message: "Please try another username & password" });

    const token = createToken(user);

    let status = "ok";

    return res.status(200).send({ user, token , status});
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};


module.exports = { register, login };

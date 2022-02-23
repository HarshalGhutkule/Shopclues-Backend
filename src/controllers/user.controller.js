const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

const userController = require("../controllers/crud.controller");

// router.get("", userController(User).get);

router.post("", userController(User).post);

router.get("/:id", userController(User).getOne);

router.get("", async (req, res) => {
    try {
      const items = await User.findOne({username:req.query.username}).lean().exec();
      return res.status(200).send(items);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });

router.patch("/:id", userController(User).patch);

router.delete("/:id", userController(User).delete);

module.exports = router;

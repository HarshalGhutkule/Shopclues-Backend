const express = require("express");

const router = express.Router();

const Post = require("../models/post.model");

const postController = require("../controllers/crud.controller");

const authenticate = require("../middleware/authenticate");

const {authorise,authoriseId} = require("../middleware/authorise");

router.get("", postController(Post).get);

router.post(
  "",
  authenticate,
  authorise(["seller", "admin"]),
  async (req, res) => {
    try {
      const user_id = req.user._id;
      const post = await Post.create({
        title: req.body.title,
        body: req.body.body,
        user_id: user_id,
      });

      return res.status(201).send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

router.patch("/:id", authenticate, authoriseId(), async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(201).send(post);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", authenticate, authoriseId(), async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      return res.status(201).send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

module.exports = router;

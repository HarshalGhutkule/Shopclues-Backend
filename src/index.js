const express = require("express");

const cors = require("cors");

const connect = require("./configs/db");

const { body } = require("express-validator");

const { register, login } = require("./controllers/auth.controller");

const app = express();

app.use(cors());
app.use(express.json());

app.post(
  "/register",
  body("username")
    .isString()
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Username should be atleast of 3 character"),
  body("number")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile number should be 10 digit"),
  body("email").custom(async (value) => {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (pattern.test(value)) {
      return true;
    }
    throw new Error("You have entered an invalid email address!");
  }),
  body("password")
    .isString()
    .custom(async (value) => {
      let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (pattern.test(value)) {
        return true;
      }
      throw new Error("Password is not strong");
    }),
  register
);
app.post("/login", login);

const userController = require("./controllers/user.controller");

app.use("/users", userController);

app.listen(2349, async () => {
  try {
    await connect();
    console.log("listning to port 2349");
  } catch (err) {
    console.log(err);
  }
});

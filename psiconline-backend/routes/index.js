const express = require("express");
const router = express.Router();
const blogRouter = require("./blog");
const usersRouter = require("./users");

/* GET home page. */

router.use("/blog", blogRouter);
router.use("/users", usersRouter);

module.exports = router;

const express = require("express");
const router = express.Router();
const blogRouter = require("./blog");

/* GET home page. */

router.use("/blog", blogRouter);

module.exports = router;

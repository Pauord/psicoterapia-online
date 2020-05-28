const express = require("express");
const router = express.Router();
const blogRouter = require("./blog");
const usersRouter = require("./users");
const blogArticleRouter = require("./blogArticle");

/* GET home page. */

router.use("/blog", blogRouter);
router.use("/users", usersRouter);
router.use("/blogArticle", blogArticleRouter);

module.exports = router;

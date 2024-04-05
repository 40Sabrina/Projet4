const express = require("express");

const router = express.Router();

const {
  getAll,
  getOne,
  createOne,
  deleteOne,
  updateArticleStock,
} = require("../controller/articleController");
// http://localhost:3310/api/article/
router.get("/", getAll);
// http://localhost:3310/api/article/1
router.get("/:id", getOne);
// http://localhost:3310/api/article/
router.post("/", createOne);
// http://localhost:3310/api/article/1
router.put("/:id", updateArticleStock);
// http://localhost:3310/api/article/1
router.delete("/:id", deleteOne);

module.exports = router;

const express = require("express");

const { login } = require("../controller/authController");

const router = express.Router();
// http://localhost:3310/api/auth/login
router.get("/login", login);

module.exports = router;

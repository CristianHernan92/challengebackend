const express = require("express")
const router = express.Router()

const post = require ("./post")

router.use("/posts", post )

module.exports = router;
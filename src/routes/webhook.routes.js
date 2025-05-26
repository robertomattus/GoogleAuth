const express = require("express");
const { handleClerkWebhook } = require("../controllers/webhook.controller");

const router = express.Router();

router.post("/", handleClerkWebhook);

module.exports = router;

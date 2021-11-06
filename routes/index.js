var express = require("express");
var router = express.Router();

const chatbotController = require("../controllers/chatbotController");

/* GET home page. */
router.get("/webhook", chatbotController.getWebHook);
router.post("/webhook", chatbotController.postWebHook);

module.exports = router;

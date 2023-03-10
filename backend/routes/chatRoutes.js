const express = require("express");
const accessChat = require("../controllers/chatContollers");
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

router.route("/").post(protect, accessChat)
router.route("/group").post(protect, accessChat.createGroupChat)
router.route("/").get(protect, accessChat.fetchChats)
router.route("/rename").put(protect, accessChat.renameGroup)
router.route("/groupremove").put(protect, accessChat.removeFromGroup)
router.route("/groupadd").put(protect, accessChat.addToGroup)

module.exports = router
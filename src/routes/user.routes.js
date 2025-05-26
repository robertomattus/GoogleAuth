const express = require("express");
const { updateUserRole } = require("../controllers/user.controller");
const router = express.Router();

//* this route should be protected by admin middleware later
// Update user role
router.put("/role/:userId", updateUserRole);

module.exports = router;

const express = require("express");
const { getResponseById, createResponse, getResponse, getAllResponse } = require("../controllers/response");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);
router.param("ResponseId", getResponseById);

router.get("/response/:requestId", getResponse);
router.post("/response/:userId", createResponse);
router.get("/responses", getAllResponse);

module.exports = router;
const express = require("express");
const router = express.Router();

const { getUserById, getUser, getAllUsers, updateUser, signup } = require("../controllers/user");

router.param("userId", getUserById);

router.post("/signup", signup);
router.get("/user/:userId", getUser);
router.put("/user/:userId", updateUser);
router.get("/users", getAllUsers);


module.exports = router;
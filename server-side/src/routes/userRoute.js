import express from "express";
import { createUser,  loginUser, updateUser, deleteUser } from "../controllers/userHandlers.js";
import getBusinessId from "../middleware/authenticateUser.js";



const router = express.Router();

router.post("/sign_up", createUser);
router.post("/sign_in", loginUser);
router.put("/update", getBusinessId, updateUser);
router.delete("/delete", deleteUser);

export default router;
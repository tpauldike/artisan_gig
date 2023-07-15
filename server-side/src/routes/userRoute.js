import express from "express";
import { createUser, deleteUser, loginUser } from "../controllers/userHandlers.js";

const router = express.Router();

router.post("/sign_up", createUser);
router.post("/sign_in", loginUser);
router.delete("/delete", deleteUser);

export default router;
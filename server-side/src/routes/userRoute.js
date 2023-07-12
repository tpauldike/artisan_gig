import express from "express";
import { createUser, loginUser } from "../controllers/userHandlers.js";

const router = express.Router();

router.post("/sign_up", createUser);
router.post("/sign_in", loginUser);


export default router;
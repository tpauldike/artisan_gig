import express from "express";
import { createUser } from "../controllers/userHandlers.js";

const router = express.Router();

router.post("/sign_up", createUser);
// router.post("/sign_in", handler);


export default router;
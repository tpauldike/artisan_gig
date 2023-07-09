import express from "express";
import connection from "./src/database/db.js";
import dotenv from "dotenv";
import userRouter from "./src/routes/userRoute.js";
dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/test_route", (req, res) => {
    return res.json({message: "e dey work!"})
})

connection

app.use("/user", userRouter);

app.listen(port, () => (
    console.log(`Server listening on http://127.0.0.1:${port}`)
));
import express from "express";
import connection from "./src/database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./src/routes/userRoute.js";
// import artworkRouter from "./src/routes/artworkRoute.js"
dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({message: "Howdy! You are now connected to ArtisanGig API"})
})

connection

app.use("/user", userRouter);
// app.use("/artwork", artworkRouter);

app.listen(port, () => (
    console.log(`Server listening on http://127.0.0.1:${port}`)
));
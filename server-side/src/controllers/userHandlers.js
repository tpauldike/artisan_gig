import db from "../database/db.js";
import * as uuid from "uuid";
import webToken from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.HIDDEN_STRING;

export const createUser = async(req, res) => {
    try {
        const { firstname, lastname, othername, sex, email, phone, password, role, address } = req.body;

        const user_id = uuid.v4();
        const hashedPassword = await bcrypt.hash(password, 15);

        const newlyCreatedUser = await db.query("INSERT INTO user (user_id, firstname, lastname, othername, sex, email, phone, password, role, address) VALUES (?,?,?,?,?,?,?,?,?,?)", [user_id, firstname, lastname, othername, sex, email, phone, hashedPassword, role, address]);

        const token = webToken.sign({ user_id }, secretKey, "1hr");

        return res.status(201).json({ message: "New user created", data: newlyCreatedUser, token });

    } catch (error) {
        console.log("Error creating new user:", error.message);
        return res.status(500).json({ message: "Internal Server Error!"});
    };
};

// export const signInUser = async(req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// }
import db from "../database/db.js";
import * as uuid from "uuid";
import webToken from "jsonwebtoken";
import util from 'util';
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.HIDDEN_STRING;
const promisifiedQuery = util.promisify(db.query).bind(db);

//user sign up
export const createUser = async (req, res) => {
    try {
        const { firstname, lastname, othername, sex, email, phone, password, role, address } = req.body;

        const checkUserEmail = await promisifiedQuery("SELECT * FROM user WHERE email = ?", [email]);

        if (checkUserEmail.length > 0) {
            return res.status(409).json({ message: "User with this email already exists!" })
        }

        const user_id = uuid.v4();
        const hashedPassword = await bcrypt.hash(password, 15);

        await promisifiedQuery("INSERT INTO user (user_id, firstname, lastname, othername, sex, email, phone, password, role, address) VALUES (?,?,?,?,?,?,?,?,?,?)", [user_id, firstname, lastname, othername, sex, email, phone, hashedPassword, role, address]);

        const newlyCreatedUser = await promisifiedQuery("SELECT * FROM user WHERE user_id=?", [user_id])
        console.log(newlyCreatedUser);

        const token = webToken.sign({ user_id }, secretKey, { expiresIn: "1hr" });

        return res.status(201).json({ message: `New ${sex} ${role}, ${firstname} ${lastname}, created sucessfully with the email ${email} and phone no. ${phone}, located at ${address}`, token });

    } catch (error) {
        console.log("Error creating new user:", error);
        return res.status(500).json({ message: "Internal Server Error!" });
    };
};

//user sign in
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const checkedUser = await promisifiedQuery("SELECT * FROM user WHERE email = ?", [email]);

        if (checkedUser.length === 0) {
            return res.status(403).json({ message: "Email or password incorrect!!" });
        }
        const passwordValidated = await bcrypt.compare(password, checkedUser[0].password);
        if (!passwordValidated) {
            return res.status(403).json({ message: "Email or password incorrect!!" });
        }

        const token = webToken.sign({ business_id: checkedUser }, secretKey, { expiresIn: "1hr" });

        return res.status(200).json({ message: `${checkedUser[0].firstname} successfully logged in`, token });

    } catch (error) {
        console.log("Error signing in:", error.message);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}

//delete user
export const deleteUser = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
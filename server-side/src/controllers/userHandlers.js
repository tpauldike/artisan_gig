import db from "../database/db.js";
import * as uuid from "uuid";
import webToken from "jsonwebtoken";
import util from 'util';
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.HIDDEN_STRING;

//user signup
export const createUser = async(req, res) => {
    try {
        const { firstname, lastname, othername, sex, email, phone, password, role, address } = req.body;

        const promisifiedQuery = util.promisify(db.query).bind(db);     
        const checkUserEmail = await promisifiedQuery("SELECT * FROM user WHERE email = ?", [ email ]);

        if (checkUserEmail.length > 0) {
            return res.status(409).json({ message: "User with this email already exists!" })
        }

        const user_id = uuid.v4();
        const hashedPassword = await bcrypt.hash(password, 15);

        const newlyCreatedUser = await promisifiedQuery("INSERT INTO user (user_id, firstname, lastname, othername, sex, email, phone, password, role, address) VALUES (?,?,?,?,?,?,?,?,?,?)", [user_id, firstname, lastname, othername, sex, email, phone, hashedPassword, role, address]);

        const [ , firstName, SurName, , userGender, userEmail, userPhone, , userRole, userAddress ] = newlyCreatedUser.values;

        const token = webToken.sign({ user_id }, secretKey, { expiresIn: "1hr" });

        return res.status(201).json({ message: `New ${userGender} ${userRole}, ${firstName} ${SurName}, created sucessfully with the email ${userEmail} and phone no. ${userPhone}, located at ${userAddress}`, token });

    } catch (error) {
        console.log("Error creating new user:", error.message);
        return res.status(500).json({ message: "Internal Server Error!"});
    };
};

//user login
export const loginUser = async(req, res) => {
try {
    const { email, password } = req.body;

    const promisifiedQuery = util.promisify(db.query).bind(db);     
    const checkUserEmail = await promisifiedQuery("SELECT * FROM user WHERE email = ?", [ email ]);

    if (checkUserEmail.length === 0) {
        return res.status(404).json({ message: "Email or password incorrect!!" })
    }

    
} catch (error) {
    
}
};
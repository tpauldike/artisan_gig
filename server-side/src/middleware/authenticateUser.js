import webToken from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.HIDDEN_STRING;

export const getBusinessId = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || String(authHeader).startsWith("User")) {
            return res.status(403).json({ message: "Authorization header missing!" });
        }
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(403).json({ message: "Authorization token missing!" });
        }
        
        const verifiedToken = webToken.verify(token, secretKey);
        const { user_id } = verifiedToken.user_id[0];
        req.user_id = user_id;

        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error!"})
    }
}
export default getBusinessId;
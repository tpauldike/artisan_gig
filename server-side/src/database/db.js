import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PSWD,
    database: process.env.DB_DATABASE
})

connection.connect((error) => {
    if (error) {
        console.log(`Database connection error: ${error.message}`);
    } else {
        console.log("Successfully connected to the database");
    }
})

export default connection
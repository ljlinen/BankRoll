require('dotenv').config();
const mysql = require('mysql2');



const myconnection = mysql.createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
});

console.log("ENV host: " + process.env.USER);


async function dbRequest() {
    let sqlQuery = "SELECT * FROM rolls";

    return new Promise((resolve, reject) => {
        myconnection.execute(sqlQuery, (err, dataFromDB) => {
            if (err) {
                reject(err);
            } else {
                console.log("data b4 return to data " + dataFromDB);
                resolve(dataFromDB);
            }
        });
    });
}

async function fetchData() {
    try {
        const data = await dbRequest();
        // console.log("Data from database:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

module.exports = fetchData;
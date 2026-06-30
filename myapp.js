const express = require("express");
const mysql = require("mysql2");

const app = express();

const PORT = process.env.PORT || 9595;

const con = mysql.createConnection({
    host: "tuesdaydb.cpkqm80282t1.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "Nilima#2927",
    database: "companydb",
    port: 3309
});

con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database Connected");
    }
});

app.get("/api/student", (req, res) => {
    con.query("SELECT * FROM students", (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
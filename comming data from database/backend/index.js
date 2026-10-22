const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
}));

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hero"
});

con.connect(function (err) {
    if (err) throw err;
    console.warn("Connected!");
});

// find data in node js routre 5000
app.get('/', (req, res) => {
    const query = 'SELECT * FROM customers';

    con.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.json(results);
    });
});



// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

app.listen(5000);
// // api.js

// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();

// const con = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'hero',
// });

// con.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the database');
// });

// // Define an endpoint to fetch data from the database
// app.get('/', (req, res) => {
//     const query = 'SELECT * FROM customers';

//     con.query(query, (err, results) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//             return;
//         }

//         res.json(results);
//     });
// });
// // Define a route for the root path
// // app.get('/', (req, res) => {
// //     res.send('Hello, this is your Express app!');
// // });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// // Import necessary modules



// // const express = require('express');
// // const path = require('path');
// // const mysql = require('mysql');

// // // Create an Express app
// // const app = express();

// // // Set up a MySQL connection
// // const con = mysql.createConnection({
// //     host: 'localhost',
// //     user: 'root',
// //     password: '',
// //     database: 'hero',
// // });

// // // Connect to the database
// // con.connect((err) => {
// //     if (err) {
// //         console.error('Error connecting to the database:', err);
// //         return;
// //     }
// //     console.log('Connected to the database');
// // });

// // // Define an endpoint to fetch data from the database
// // app.get('/api/data', (req, res) => {
// //     const query = 'SELECT * FROM customers';

// //     con.query(query, (err, results) => {
// //         if (err) {
// //             console.error('Error executing query:', err);
// //             res.status(500).json({ error: 'Internal Server Error' });
// //             return;
// //         }

// //         res.json(results);
// //     });
// // });

// // // Serve the React app in production
// // if (process.env.NODE_ENV === 'production') {
// //     app.use(express.static('client/build'));

// //     app.get('*', (req, res) => {
// //         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// //     });
// // }

// // // Set the port for the Express app
// // const PORT = process.env.PORT || 5000;

// // // Start the server
// // app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

// Enable CORS for all routes
app.use(cors());

// Your existing routes and middleware here

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

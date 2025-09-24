//server.js


//import .env
require('dotenv').config();
const express = require('express');
const cors = require('cors');
//import database
const db = require('./database.js');

const app = express();
const PORT = process.env.PORT || 3100;

//middleware 
app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
    res.json({ ok: true, status: 'Server is running', service: 'Movie API' });
});

app.get('/movies', (req, res) => {
    const sql = "SELECT * FROM movies ORDER BY id ASC";
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }
        res.json({ "message": "success", "data": rows });

    });
});




// Start server
app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});

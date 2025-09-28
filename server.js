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

// CREATE 
app.post('/movies', (req, res) => {
    const { title, genre, year } = req.body;
    const sql = `INSERT INTO movies (title, genre, year) VALUES (?, ?, ?)`;
    db.run(sql, [title, genre, year], function(err) {
        if (err) return res.status(400).json({ error: err.message });
        res.json({
            message: 'Movie added successfully',
            data: { id: this.lastID, title, genre, year }
        });
    });
});

// UPDATE 
app.put('/movies/:id', (req, res) => {
    const { title, genre, year } = req.body;
    const { id } = req.params;
    const sql = `UPDATE movies SET title=?, genre=?, year=? WHERE id=?`;
    db.run(sql, [title, genre, year, id], function(err) {
        if (err) return res.status(400).json({ error: err.message });
        res.json({
            message: 'Movie updated successfully',
            changes: this.changes
        });
    });
});

// DELETE 
app.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM movies WHERE id=?`;
    db.run(sql, id, function(err) {
        if (err) return res.status(400).json({ error: err.message });
        res.json({
            message: 'Movie deleted successfully',
            changes: this.changes
        });
    });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});

// server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// import database
const db = require('./database.js');

const app = express();
const PORT = process.env.PORT || 3100;

// middleware
app.use(cors());
app.use(express.json());

// check server status
app.get('/status', (req, res) => {
  res.json({ ok: true, status: 'Server is running', service: 'Movie API' });
});


// READ all movies
app.get('/movies', (req, res) => {
  const sql = 'SELECT * FROM movies ORDER BY id ASC';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(200).json(rows); // ✅ Postman expects an array, not an object
  });
});


// READ single movie by ID
app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM movies WHERE id = ?';
  db.get(sql, [id], (err, row) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json(row); // ✅ Postman expects an object
  });
});


// CREATE movie
app.post('/movies', (req, res) => {
  const { title, genre, year } = req.body;
  const sql = 'INSERT INTO movies (title, genre, year) VALUES (?, ?, ?)';
  db.run(sql, [title, genre, year], function (err) {
    if (err) return res.status(400).json({ error: err.message });
    res.status(201).json({ // ✅ Created
      id: this.lastID,
      title,
      genre,
      year,
    });
  });
});


// UPDATE movie
app.put('/movies/:id', (req, res) => {
  const { title, genre, year } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE movies SET title=?, genre=?, year=? WHERE id=?';
  db.run(sql, [title, genre, year, id], function (err) {
    if (err) return res.status(400).json({ error: err.message });
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(200).json({
      id,
      title,
      genre,
      year,
    });
  });
});


// DELETE movie
app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM movies WHERE id=?';
  db.run(sql, id, function (err) {
    if (err) return res.status(400).json({ error: err.message });
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.status(204).send(); 
  });
});


// 404 route (for any other path)
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


// Start server
app.listen(PORT, () => {
  console.log(`✅ Server aktif di http://localhost:${PORT}`);
});

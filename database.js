require('dotenv').config();
const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = process.env.DB_SOURCE || "movies.db";

// Inisialisasi database baru
const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Connected to the SQLite database.');

        db.run(`CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            director TEXT NOT NULL,
            year INTEGER NOT NULL
        )`, (err) => {
            if (err) {
                console.log('Gagal membuat tabel', err.message);
            }

            // ✅ Fixed: SELECT as string and proper syntax
            db.get("SELECT COUNT(*) AS count FROM movies", (err, row) => {
                if (err) {
                    return console.error(err.message);
                }

                if (row.count === 0) {
                    console.log("Menambahkan data awal ke tabel movies");

                    // ✅ Fixed: INSERT as string
                    const insert = "INSERT INTO movies (title, director, year) VALUES (?,?,?)";

                    db.run(insert, ["Parasite", "Bong Joon-ho", 2019]);
                    db.run(insert, ["The Dark Knight", "Christopher Nolan", 2008]);
                    db.run(insert, ["Interstellar", "Christopher Nolan", 2014]);
                    db.run(insert, ["Superman Returns", "Bryan Singer", 2006]);
                }
            });
        });
    }
});

// ✅ Moved this outside
module.exports = db;

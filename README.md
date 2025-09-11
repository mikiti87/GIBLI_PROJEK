<<<<<<< HEAD
// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3300;

app.use(cors());
app.use(express.json());
=======
# Proyek API Ulasan Film gibli - Kelompok 4

## Anggota Kelompok
- Baruna akbar rizqi
- ahmad septa 
- mathew hedriansyah
- zenveropenopasa
- hillmi nazwar 
>>>>>>> 998965f7e6f303851ff6b91a6903626718ec719a

//var reviews
let reviews = [
  {
    id: 1,
    filmid: "2fhdf67d9dh789",
    user: "Andi",
    rating: 5,
    comment: "Film animasi terbaik sepanjang masa!"
  }
];

// Endpoint
app.get('/status', (req, res) => {
  res.json({ status: 'API berjalan dengan baik' });
});

// GET semua review
app.get('/reviews', (req, res) => {
  res.json(reviews);
});

// GET review
app.get('/reviews/:id', (req, res) => {
  const review = reviews.find(r => r.id === parseInt(req.params.id));
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: 'Review tidak ditemukan' });
  }
});

// POST review 
app.post('/reviews', (req, res) => {
  const { filmid, user, rating, comment } = req.body;

  if (!filmid || !user || !rating || !comment) {
    return res.status(400).json({ error: 'Semua field harus diisi' });
  }

  const newReview = {
    id: reviews.length + 1,
    filmid,
    user,
    rating,
    comment
  };

  reviews.push(newReview);
  res.status(201).json(newReview);
});

//REvieew
app.put('/reviews/:id', (req, res) => {
  const review = reviews.find(r => r.id === parseInt(req.params.id));
  if (!review) {
    return res.status(404).json({ error: 'Review tidak ditemukan' });
  }

  const { filmid, user, rating, comment } = req.body;
  if (!filmid && !user && !rating && !comment) {
    return res.status(400).json({ error: 'Minimal satu field harus diupdate' });
  }

  review.filmid = filmid || review.filmid;
  review.user = user || review.user;
  review.rating = rating || review.rating;
  review.comment = comment || review.comment;

  res.json(review);
});

<<<<<<< HEAD
// DELETE hapus 
app.delete('/reviews/:id', (req, res) => {
  const index = reviews.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Review tidak ditemukan' });
  }
  const deletedReview = reviews.splice(index, 1)[0];
  res.json(deletedReview);
});
//SERVer
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
=======
### Films

*   **`GET /movies`**
    *   Returns a list of all films.

*   **`GET /movies/:id`**
    *   Returns a single film by its `id`.

*   **`GET /movies/title/:title`**
    *   Returns a single film by its `title` (case-insensitive).

*   **`POST /movies`**
    *   Creates a new film.
    *   Request body (JSON):
        ```json
        {
            "title": "Your Film Title",
            "director": "Director's Name",
            "year": 2023
        }
        ```

*   **`PUT /movies/:id`**
    *   Updates an existing film's details.
    *   Request body (JSON, can contain one or more fields):
        ```json
        {
            "title": "Updated Film Title",
            "director": "Updated Director's Name",
            "birthyear": 2024
        }
        ```

### Directors

*   **`GET /directors`**
    *   Returns a list of all directors.

*   **`GET /directors/:id`**
    *   Returns a single director by their `id`.

*   **`POST /directors`**
    *   Creates a new director.
    *   Request body (JSON):
        ```json
        {
            "name": "Director's Name",
            "year": 1980
        }
        ```

*   **`PUT /directors/:id`**
    *   Updates an existing director's details.
    *   Request body (JSON, can contain one or more fields):
        ```json
        {
            "name": "Updated Director's Name",
            "year": 1981
        }
        ```

*   **`DELETE /directors/:id`**
    *   Deletes a director by their `id`.

---

## Daftar Endpoint
- 'GET /status': Cek status API.
- 'GET /reviews': Mengambil semua ulasan.
- 'GET /reviews/:id': Mengambil ulasan spesifik.
- 'POST /reviews': Membuat ulasan baru.
- 'PUT /reviews/:id': Memperbarui ulasan.
- 'DELETE /reviews/:id': Menghapus ulasan.
>>>>>>> 998965f7e6f303851ff6b91a6903626718ec719a

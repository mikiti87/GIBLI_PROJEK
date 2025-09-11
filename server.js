// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3300;

app.use(cors());
app.use(express.json());

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
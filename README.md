# Proyek API Ulasan Film gibli - Kelompok 4

## Anggota Kelompok
- Baruna akbar rizqi
- ahmad septa 
- mathew hedriansyah
- zenveropenopasa
- hillmi nazwar 


## Deskripsi Proyek
API ini adalah layanan internal untuk mengelola ulasan film
  dari Studio Ghibli,
dengan data film yang direferensikan dari Ghibli API publik.


## Cara Menjalankan Proyek
1. Clone repository ini: 'git clone ...'
2. Masuk ke direktori: 'cd NAMA-REPO'
3. Install dependensi: 'npm install'
4. Jalankan server: 'node server.js'
Server akan berjalan di 'http://localhost:3300'.


<<<<<<< HEAD
To start the server, run the following command:

```bash
node server.js
```

The server will start and listen on `http://localhost:3000`.

You can also add a `start` script to your `package.json` for convenience:
```json
"scripts": {
  "start": "node server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
Then you can run `npm start`.

## API Endpoints

### Home

*   **`GET /`**
    *   Returns a welcome message.

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

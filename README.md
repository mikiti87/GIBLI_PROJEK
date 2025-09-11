# Gibli Project - Film and Director API
# Gibli Project - API Film dan Sutradara

A simple RESTful API built with Node.js and Express to manage a collection of films and directors.
Sebuah RESTful API sederhana yang dibuat dengan Node.js dan Express untuk mengelola koleksi film dan sutradara.

## Features
## Fitur

-   List, add, update, and retrieve films.
-   List, add, update, and delete directors.
-   In-memory data storage (data resets on server restart).
-   Menampilkan, menambah, memperbarui, dan mengambil data film.
-   Menampilkan, menambah, memperbarui, dan menghapus data sutradara.
-   Penyimpanan data di memori (data akan di-reset saat server dimulai ulang).

## Installation
## Instalasi

1.  Clone the repository or download the source code.
2.  Navigate to the project directory:
1.  Clone repositori ini atau unduh kode sumbernya.
2.  Masuk ke direktori proyek:
    ```bash
    cd gibli-projek
    ```
3.  Install the dependencies:
3.  Install semua dependensi yang dibutuhkan:
    ```bash
    npm install
    ```

## Usage
## Cara Menjalankan

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

<<<<<<< HEAD
This `README.md` provides a solid foundation for your project. You can expand it later with sections on testing, contributing guidelines, or deployment instructions as your project grows. Let me know if you have any other questions!
=======
<<<<<<< HEAD
This `README.md` provides a solid foundation for your project. You can expand it later with sections on testing, contributing guidelines, or deployment instructions as your project grows. Let me know if you have any other questions!
=======
This `README.md` provides a solid foundation for your project. You can expand it later with sections on testing, contributing guidelines, or deployment instructions as your project grows. Let me know if you have any other questions!
>>>>>>> 5cc42e3 (firts)
>>>>>>> temp-fixes
=======
## Daftar Endpoint
- 'GET /status': Cek status API.
- 'GET /reviews': Mengambil semua ulasan.
- 'GET /reviews/:id': Mengambil ulasan spesifik.
- 'POST /reviews': Membuat ulasan baru.
- 'PUT /reviews/:id': Memperbarui ulasan.
- 'DELETE /reviews/:id': Menghapus ulasan.
>>>>>>> a70e8283a6d7c71da01d6cd6afb8a3e7d238ca26

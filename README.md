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
- <img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/abedbeec-2c70-4603-83f1-0105a8634b8b" />
- 'GET /reviews': Mengambil semua ulasan.
- <img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/804a2282-0781-47bb-ae47-4343abe1a75e" />
- 'GET /reviews/:id': Mengambil ulasan spesifik.
- <img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/d96c2490-58f6-4f3f-a8c9-01cdff58f56d" />
- 'POST /reviews': Membuat ulasan baru.
- <img width="1280" height="719" alt="image" src="https://github.com/user-attachments/assets/e63a266f-e5a1-4f5d-8af8-40179d319daf" />
- 'PUT /reviews/:id': Memperbarui ulasan.
- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/7eac1371-65e2-413e-9d0c-05492ee972af" />
- 'DELETE /reviews/:id': Menghapus ulasan.
- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0eec747b-1e94-4550-9692-9493d24b19ef" />

>>>>>>> a70e8283a6d7c71da01d6cd6afb8a3e7d238ca26

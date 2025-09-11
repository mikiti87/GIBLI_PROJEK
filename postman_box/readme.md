Test Status Endpoint

node server.js
check
body > raw > jason 
{
  "status": "API berjalan dengan baik"
}

http://localhost:3300/reviews

Get All Reviews

[
  {
    "id": 1,
    "filmid": "2fhdf67d9dh789",
    "user": "Andi",
    "rating": 5,
    "comment": "Film animasi terbaik sepanjang masa!"
  }
]

check:
http://localhost:3300/reviews/1


crate review(post)

{
  "filmid": "abcd1234",
  "user": "Budi",
  "rating": 4,
  "comment": "Bagus tapi agak kepanjangan"
}

update (put) 
{
  "rating": 3,
  "comment": "Setelah ditonton ulang, biasa aja"
}

hapus  delete
 {
    "id": 1,
    "filmid": "2fhdf67d9dh789",
    "user": "Andi",
    "rating": 5,
    "comment": "Film animasi terbaik sepanjang masa!"
  }
]






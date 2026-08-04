const axios = require("axios");

// Get all books
axios
  .get("http://localhost:5000/books")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });

// Search by ISBN
const getBookByISBN = (isbn) => {
  return axios
    .get(`http://localhost:5000/books/isbn/${isbn}`)
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
};

// Search by Author
async function getBookByAuthor(author) {
  try {
    const response = await axios.get(
      `http://localhost:5000/books/author/${author}`
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

// Search by Title
async function getBookByTitle(title) {
  try {
    const response = await axios.get(
      `http://localhost:5000/books/title/${title}`
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

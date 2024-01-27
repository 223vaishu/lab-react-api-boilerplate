import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function BookCollection() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' }
        });

        setBooks(result.data.books);
      } catch (error) {
        console.log("Status Code : ", error.response.status);
        console.log("Website not found");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {books.map((book, index) => (
        <div key={index} className="book-item">
          <h2 className="book-title">{book.title}</h2>
          <div className="book-det">
            <img src={book.imageLinks.smallThumbnail} alt={book.title} className="book-img" />
            <p className="book-des">{book.description}</p>
          </div>
          <p className="author">{book.authors[0]}</p>
        </div>
      ))}
    </>
  );
}

export default BookCollection;

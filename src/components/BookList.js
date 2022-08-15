import React, { useContext } from "react";
import _ from "lodash";
import Book from "./Book";
import BooksContext from "../context/BooksContext";

const BookList = () => {
  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? ( // ternary operator
          books.map((book) => (
            // in case books is not an empty array,
            // loop over it and display a Book component with the book data
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          // if books array is empty, display a msg
          <p className="message">
            No books available. Please add some books ...
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default BookList;

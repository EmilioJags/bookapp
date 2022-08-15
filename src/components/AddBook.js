import React, { useContext } from "react";
import BookForm from "../components/BookForm";
import BooksContext from "../context/BooksContext";

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  const handleOnSubmit = (book) => {
    // handle method, book as parameter to be submitted
    setBooks([book, ...books]); // add book to the current array of books
    console.log(book);
    history.push("/");
  };
  return <BookForm handleOnSubmit={handleOnSubmit} />;
};

export default AddBook;

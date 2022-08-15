import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import BooksContext from "../context/BooksContext";

const EditBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);
  const { id } = useParams();
  // the above line of code is same as the below code
  // const { id } = props.match.params;

  // based on the id provided in props
  // we "find" the correct book from our array of books
  // this will be the book we want to edit
  const bookToEdit = books.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks([book, ...books]);
    history.push("/");
  };

  // we return a BookForm component with the book we want to edit as a parameter
  // BookForm has already been configured to set the parameter values correctly
  return (
    <div>
      <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;

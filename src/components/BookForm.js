import React, { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      // useState initializer for what is a book object
      bookname: props.book ? props.book.bookname : "", // ternary operations to manage book data
      author: props.book ? props.book.author : "",
      quantity: props.book ? props.book.quantity : "",
      price: props.book ? props.book.price : "",
      date: props.book ? props.book.date : "",
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, price, quantity } = book;
  // ES6 destructuring syntax to unpack values from arrays
  // in this case, the book is unpacked into all other items

  const handleOnSubmit = (event) => {
    // event is the Form, since the form is the one calling this method
    event.preventDefault();
    // preventDefault avoids the submit to complete without first following all details
    const values = [bookname, author, price, quantity];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      // null check on all fields, "every" is used to "loop" over all values
      const value = `${field}`.trim(); // remove spaces from each item
      return value !== "" && value !== "0";
    });

    // if all fields are populated correctly, create a book object
    // and hand it over to submit
    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date(),
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Please fill out all the fields.";
      setErrorMsg(errorMsg);
    }
  };

  // on change event
  // to manage data is being filled out correctly
  const handleInputChange = (event) => {
    // save the event's name being edited and the value being added
    const { name, value } = event.target;
    //console.log(event.target);
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;

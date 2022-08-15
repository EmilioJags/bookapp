import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BookList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBook from "../components/EditBook";
import BooksContext from "../context/BooksContext";
import Footer from "../components/Footer";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);
  return (
    <Router>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route
                render={(props) => (
                  <BooksList {...props} books={books} setBooks={setBooks} />
                )}
                path="/"
                exact
              />
              <Route component={EditBook} path="/edit/:id" />

              <Route
                render={(props) => (
                  <AddBook {...props} books={books} setBooks={setBooks} />
                )}
                path="/add"
              />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </BooksContext.Provider>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;

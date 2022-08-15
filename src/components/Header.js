import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Book List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
        <a href="https://emiliojags.github.io/phone-app/#/" target="_blank">
          Developer's page
        </a>
      </div>
    </header>
  );
};

export default Header;

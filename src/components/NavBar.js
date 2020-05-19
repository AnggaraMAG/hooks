import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>MAG Reading List</h1>
      <p>Currently you have {books.length} books to gets through ....</p>
    </div>
  );
};

export default NavBar;

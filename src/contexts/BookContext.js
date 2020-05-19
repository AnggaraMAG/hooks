import React, { createContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //   const [books, setBooks] = useState([
  //     { title: "spongebob squarpants", author: "jamet", id: 1 },
  //     { title: "jimmy neutron", author: "samsul", id: 2 },
  //     { title: "one piece", author: "marcus", id: 3 },
  //     { title: "narutoo", author: "herlambang", id: 4 },
  //     { title: "sword art online", author: "saipul", id: 5 },
  //   ]);

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  //   const addBook = (title, author) => {
  //     setBooks([...books, { title, author, id: uuidv4() }]);
  //   };

  //   const removeBook = (id) => {
  //     setBooks(books.filter((book) => book.id !== id));
  //   };
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

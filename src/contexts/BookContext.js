import React, { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "name of 1", author: "rizwan", id: 1 },
    { title: "name of 2", author: "rizwan", id: 2 },
    { title: "name of 3", author: "rizwan", id: 3 },
    { title: "name of 4", author: "rizwan", id: 4 },
    { title: "name of 5", author: "rizwan", id: 5 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: nanoid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

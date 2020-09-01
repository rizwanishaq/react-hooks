import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "name of 1", id: 1 },
    { title: "name of 2", id: 2 },
    { title: "name of 3", id: 3 },
    { title: "name of 4", id: 4 },
    { title: "name of 5", id: 5 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};

export default BookContextProvider;

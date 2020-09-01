import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [light] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
  const [dark] = useState({ syntax: "#ddd", ui: "#333", bg: "#555" });
  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        light,
        dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

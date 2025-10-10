import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, []);

  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;
  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

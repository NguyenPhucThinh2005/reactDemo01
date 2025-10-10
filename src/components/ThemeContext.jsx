import { createContext } from "react";

export const themes = {
  dark: { backgroundColor: "black", color: "white" },
  light: { backgroundColor: "white", color: "black" },
};

export const ThemeContext = createContext({
  dark: false,
  theme: themes.light,
  toggle: () => {},
});

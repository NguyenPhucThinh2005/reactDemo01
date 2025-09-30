import "./App.css";
import ComContainer from "./components/ComContainer";
import Content from "./components/Content";
import ContextEx from "./components/ContextEx";
import EffectDemo from "./components/EffectDemo";
import Footer from "./components/Footer";
import FuncCount from "./components/FuncCount";
import NavBar from "./components/NavBar";

import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
import ThemeButton from "./components/ThemeButton";
import { useContext } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import Welcome from "./components/Welcome";

// 👇 Component bọc layout để áp theme cho toàn web
function ThemedLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        minHeight: "100vh", // đảm bảo phủ toàn màn hình
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome/:id" element={<Welcome />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

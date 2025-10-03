import "./App.css";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { Route, Routes } from "react-router";
import Players from "./components/Players";
import Detail from "./components/Detail";
import Contact from "./components/Contact";
import { ThemeContext } from "./components/ThemeContext";
import HomePage from "./components/HomePage";

function ThemedLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <ThemedLayout>
        <Routes>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/" element={<Players />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemedLayout>
    </>
  );
}

export default App;

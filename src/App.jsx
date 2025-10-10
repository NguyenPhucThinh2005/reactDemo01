import "./App.css";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { Route, Routes } from "react-router";

import Detail from "./components/Detail";
import Contact from "./components/Contact";
import { ThemeContext } from "./components/ThemeContext";
import HomePage from "./components/HomePage";
import OrchidsPresentation from "./components/Labs/OrchidsPresentation";
import OrchidDetail from "./components/Labs/OrchidDetail";
import About from "./components/Labs/About";
import Natural from "./components/Labs/Natural";
import { CardFooter } from "react-bootstrap";

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
          <Route path="/" element={<OrchidsPresentation />} />
          <Route path="/orchid/:id" element={<OrchidDetail />} />
          <Route path="/natural" element={<Natural />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemedLayout>
    </>
  );
}

export default App;

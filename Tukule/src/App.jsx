import React from "react";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Contacts } from "./Components/Contacts";

const App = () => {
  return (
    <Router>
      <Routes>
        <Header />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Footer />
      </Routes>
    </Router>
  );
};
export default App;

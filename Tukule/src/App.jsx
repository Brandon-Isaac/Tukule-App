import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Abouts } from "./Components/About";
import { Contacts } from "./Components/Contacts";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;

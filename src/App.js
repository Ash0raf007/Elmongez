import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Section from "./components/Section/Section";
import NBAR from './components/Nbar/NBAR';
import Prog from "./components/Prog/Prog";
import Tadkek from "./components/Tadkek/Tadkek";
import Estshara from "./components/Estshara/Estshara";
import Research from "./components/Research/Research";
import Derasa from "./components/Derasa/Derasa";
import Tahkem from "./components/Tahkem/Tahkem";
import Contact from './components/Contact';
import About from './components/About';
import Statics from "./components/Statics/Statics";
import Footer from "./footer/Footer";
const App = () => {
  return (
    <div>
          <Section/>
      <NBAR/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tadkek" element={<Tadkek />} />
        <Route path="/estshara" element={<Estshara />} />
        <Route path="/research" element={<Research/>} />
        <Route path="/derasa" element={<Derasa />} />
        <Route path="/tahkem" element={<Tahkem />} />
        <Route path="/statics" element={<Statics />} />
        <Route path="/programming" element={<Prog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        </Routes>
        <Footer />

    </div>

  );
};

export default App;

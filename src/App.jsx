import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";

// Import your components
import Navbar from "./page/Navbar";
import { Hero } from "./page/Hero";
import About from "./page/About";
import Gmail from "./page/Gmail";
import Project from "./page/Project";
import ContactLinks from "./components/ContactLinks";

import StickyResumeButton from "./components/StickyResumeButton";

// ✅ Optional: Wrap main portfolio sections into a MainPage component
const MainPage = () => {
  return (
    <>
      <Navbar />

      <Element name="home">
        <Hero />
      </Element>

      <Element name="projects">
        <Project />
      </Element>

      <Element name="contact">
        <Gmail />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <StickyResumeButton />
      <ContactLinks/>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactLinks />} />
      </Routes>
    </Router>
  );
};

export default App;

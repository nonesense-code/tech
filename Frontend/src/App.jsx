import React from "react";
import HomeContainer from "./components/HomePage/HomeContainer";
import ContactContainer from "./components/ContactPage/ContactContainer";
import BodContainer from "./components/BodPage/BodContainer";
import AboutContainer from "./components/AboutPage/AboutContainer";
import EventContainer from "./components/EventPage/EventContainer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Router>
        <Link to="/" />
        <Link to="/bod" />
        <Link to="/event" />
        <Link to="/contact" />
        <Link to="/about" />
        <Routes>
          <Route path="*" element={<HomeContainer />} />
          <Route path="/" element={<HomeContainer />} />
          <Route path="/bod" element={<BodContainer />} />
          <Route path="/event" element={<EventContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          <Route path="/about" element={<AboutContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

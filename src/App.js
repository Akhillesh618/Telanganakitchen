import React from "react";
import Home from "./Home.js";
import Menu from "./Menu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Menu" element={<Menu/>} />

      </Routes>
    </Router>
  );
}

export default App;

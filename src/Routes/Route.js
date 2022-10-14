import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Works from "../Components/Works";
import Header from "./Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header rota="Home" rota2="About" rota3="Works" />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

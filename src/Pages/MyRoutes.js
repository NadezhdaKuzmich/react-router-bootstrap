import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Blog from "./Blog";

const MyRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="about" element={<About />} />
    <Route exact path="contacts" element={<Contacts />} />
    <Route exact path="blog" element={<Blog />} />
  </Routes>
);

export default MyRoutes;
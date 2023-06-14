import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/Auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AllRoutes;

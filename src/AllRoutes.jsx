import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuesion/AskQuestion";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/Auth" element={<Auth />} />
      <Route path="/" element={<Home />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuesion" element={<AskQuestion />} />
    </Routes>
  );
};

export default AllRoutes;

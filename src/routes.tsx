import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CatForm from "./pages/Form";

const RoutesAPI: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<CatForm />} />
    </Routes>
  );
};

export default RoutesAPI;

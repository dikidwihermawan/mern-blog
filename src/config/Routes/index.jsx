import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<MainApp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default Router;

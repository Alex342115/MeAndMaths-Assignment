// import logo from "./logo.svg";
import React from "react";
import DashBoard from "./components/DashBoard";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Dummy from "./components/Dummy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Profile from "./components/Profile";
import "../src/App.css";
import Manufacturing from "./components/Manufacturing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Research from "./components/Research";
import Planning from "./components/Planning";
import Designing from "./components/Designing";
import Sales from "./components/Sales";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/research" element={<Research />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/designing" element={<Designing />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>

    // <div className="dashboard">
    //   <Sidebar />
    //
    // </div>
  );
};

export default App;

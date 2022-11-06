import "./sass/App.scss";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./components/Header/Header";
import HomeLayout from "./Layout/Home/HomeLayout";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

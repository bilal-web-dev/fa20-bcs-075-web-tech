import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css'

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>}/>


      </Routes>
    </Router>
  );
}

export default App;

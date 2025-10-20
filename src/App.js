import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
return (
  <div>
  <Navbar />
  <div className="container mt-4">
  <Outlet />
  </div>
  </div>
  );
}

export default App;



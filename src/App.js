import React from 'react';
import './App.css';
import image from "./images/reactlogo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const userName = "Karthika";
  console.log("React app started");
  return (
    <div className="container mt-5 d-flex justify-content-center">
    <div className="card shadow text-center" style={{ width: '28rem' }}>
    <div className="card-body">
    <h1 style={{ color: "#a60da1ff", fontWeight: "bold" }}> Welcome to React Learning, {userName}</h1>
    <img src={image} alt="React Logo" className="img-fluid mb-3" style={{ width: "200px" }}/>
    <img src="https://jelvix.com/wp-content/uploads/2024/09/react-js-examples.png" alt="React Example" className="img-fluid mb-3"/>
    <p className='bg-primary' style={{ color: "#f4f9fbff" ,fontWeight: "light"}}>This is your first card with images and styles!</p>
    </div>
    </div>
    </div>
  );
};

export default App;

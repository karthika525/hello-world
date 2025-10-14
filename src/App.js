import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./images/dp.jpg"; 

function App() {
  const name = "Karthika";
  const description = "A creative web developer passionate about building modern web experiences";
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
    <div className="card text-center shadow" style={{ border: "2px solid #5b3adeff", borderRadius: "8px", padding: "20px", backgroundColor: "#f3f3f3ff", width: "22rem" }}>
    <h2 className="text-primary">{name}</h2>
    <p className="text-muted">{description}</p>
    <img src={image} alt="Profile dp" className="img-fluid mb-3 mx-auto d-block" style={{ width: "100px" }}/>
    <img src="https://jaro-website.s3.ap-south-1.amazonaws.com/2024/03/Features-of-Mern-stack-development-services-You-Should-Know-768x397-1.png" alt="Web technologies overview" className="img-fluid rounded" style={{ maxWidth: "100%" }}/>
    </div>
    </div>
  );
}

export default App;

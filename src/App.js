import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const name = "Alex";
  const age = 20;
  const isStudent = true;
  const favoriteHobbies = ["Reading", "Hiking", "Coding"];
  const hobbiesForLoop = [];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbiesForLoop.push(<li key={i}>{favoriteHobbies[i]}</li>);
  }
  const showEnthusiasm = () => {
    document.getElementById("message").innerText ="Hello from React! I love my hobbies!";
    document.getElementById("main-heading").style.backgroundColor = "lightblue";
  };

  return (
    <div className="container mt-5">
      <h1 id="main-heading" className="text-center mb-4 p-2">My Personal Info & Hobbies</h1>
      <div className="card mb-4 shadow-sm" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">Student: {isStudent.toString()}</p>
        </div>
      </div>
      <div className="row">
      <div className="col-md-6 mb-3">
      <h5>Hobbies (For Loop)</h5>
      <ul className="list-group">{hobbiesForLoop}</ul>
      </div>
      <div className="col-md-6 mb-3">
      <h5>Hobbies (Map)</h5>
      <ul className="list-group">
      {favoriteHobbies.map((hobby, index) => (
      <li key={index} className="list-group-item">{hobby}</li>
      ))}
      </ul>
      </div>
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={showEnthusiasm}>Show Enthusiasm</button>
      </div>
      <p id="message" className="text-center mt-3" ></p>
    </div>
  );
}
export default App;

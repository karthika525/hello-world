import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const favoriteFoods = ["Sandwich","Pizza","Burger","Shawarma"];
  function showLove(food) {
    document.getElementById("message").innerText = `I love ${food}!`;
  }
  return (
    <div className="container mt-5 text-center">
    <h2 className="mb-4 text-success">My Favorite Foods</h2>
    <ul className="list-group mb-3" style={{ maxWidth: "400px", margin: "0 auto" }}>
    {favoriteFoods.map((food, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">{food}
    <button className="btn btn-primary btn-sm" onClick={() => showLove(food)}> Show Love</button>
    </li>
    ))}
    </ul>
    <p id="message" className="mt-3 fs-5 text-warning">Select a food that you love!</p>
    </div>
  );
}

export default App;



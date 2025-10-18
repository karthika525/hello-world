import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
const [user, setUser] = useState("Guest");
useEffect(() => {
  if (user !== "Guest") {
  console.log(`User changed to ${user}`);
  }
}, [user]);
function handleLogin() {
  setUser("Alice");
}
return (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
  <h1>Welcome, {user}!</h1>
  {user === "Guest" && (<button onClick={handleLogin}>Login as Alice</button>)}
  </div>
  );
}

export default App;



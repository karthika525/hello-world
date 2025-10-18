import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  useEffect(() => {console.log("Welcome message displayed.");
  }, []); 

  return (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
  <h1>Hello, user! Welcome to our site.</h1>
  </div>
  );
}

export default App;




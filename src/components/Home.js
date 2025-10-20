import React from "react";

function Home() {
  function showEnthusiasm() {
  document.getElementById("Msg").innerText ="Hello from React! I love this page!";
  document.getElementById("Heading").style.background = "lightblue";
  }

  return (
    <div className="card p-4 mb-4">
    <h3 id="Heading">This is the Home Page</h3>
    <p id="Msg">Click the button to see my enthusiasm!</p>
    <button className="btn btn-primary" onClick={showEnthusiasm}> Show Enthusiasm</button>
    </div>
  );
}

export default Home;

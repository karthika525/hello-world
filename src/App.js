import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Room() {
  const [isLightOn, setIsLightOn] = useState(false);
  function changeLight() {
  if (isLightOn) {
      setIsLightOn(false);
   } else {
      setIsLightOn(true);
    }
  }

  let roomStatus = "";

  if (isLightOn) {
    roomStatus = "The room is bright";
  } else {
    roomStatus = "The room is dark";
  }

function LightSwitch({ isLightOn, changeLight }) {
  let buttonLabel = "";

  if (isLightOn) {
    buttonLabel = "Turn OFF";
  } else {
    buttonLabel = "Turn ON";
  }

  return (
    <button className="btn btn-warning text-light mt-3" onClick={changeLight}>
      {buttonLabel}
    </button>
  );
}

  return (
    <div className="container text-center mt-5">
      <h2 className="text-success">{roomStatus}</h2>
      <LightSwitch isLightOn={isLightOn} changeLight={changeLight} />
    </div>
  );
}

export default Room;




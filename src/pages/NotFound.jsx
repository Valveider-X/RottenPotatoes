import React from "react";
import Notfound from "../assets/images/notfound.jpg";
import { Navigate } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <img className="notfound" src={Notfound}></img>
    </div>
  );
}

export default NotFound;

import React from "react";
import ErrorImg from "../assets/images/error.jpg";
import { Navigate } from "react-router-dom";

function Error() {
  return (
    <div>
      <img className="error404" src={ErrorImg}></img>
    </div>
  );
}

export default Error;

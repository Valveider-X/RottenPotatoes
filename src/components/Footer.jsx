import React from "react";
import { Link } from "react-router-dom";
import Server from "../assets/images/server.png";
import GitLogo from "../assets/images/github-mark-white.png";
import Clown from "../assets/images/clown-wh.png";
import { Navigate } from "react-router-dom";
import OF from "../assets/images/logoOF.png";

function Footer() {
  return (
    <div className="futer">
      <Link to={"/about"}>
        <img className="clown" src={Clown} alt="About" />
      </Link>
      <a href="https://github.com/alfom17/rottenPotatoesServer" target="_blank">
        <img className="server-img" src={Server} alt="Servidor" />
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        <img src={OF} alt="Servidor" style={{ width: "100px" }}></img>
      </a>
      <a
        href="https://github.com/Valveider-X/RottenPotatoes"
        target="_blank"
        className="git-img"
      >
        {" "}
        <img className="server-img" src={GitLogo} alt="Proyecto" />
      </a>
    </div>
  );
}

export default Footer;

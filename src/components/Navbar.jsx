import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"

function Navbar() {
  return (
    <div className="navigation">Navbar
    <Link to="/"> 
    <img src={Logo} alt="pepe" style={{height: "80px"}}/> </Link>
    <Link to="/platforms">Plataformas</Link>
    <Link to="/platforms-games">plataformas games</Link>
    <Link to="/genres">generos</Link>
    <Link to="/genres-games">generos geims</Link>
    <Link to="/games">games list</Link>
   
    <Link to="/game-reviews">revius</Link>
    <Link to="/game-completion">compleishon</Link>
    <Link to="/error">es de prueba no me funen</Link>
    <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar
import React from 'react'
import Ronnie from "../assets/images/ronnie.png"
import Alfonso from "../assets/images/alfonso.png"
import Xavi from "../assets/images/xavi.png"
import GitLogo from "../assets/images/github-mark-white.png"

function About() {
  return (
    <div className='team-members'>

    <h1>🍆TEAM MEMBERS🍆 </h1>

    <div className='member'>
    <img className="img-about" src={Xavi} alt="Xavi"/>
    <h3>Xavi Valverde</h3>
    <p><b>Pequeña Descripcion</b></p>
    <p>No es tan pequeña</p>
    <a href="https://github.com/Valveider-X"><img className="server-img" src={GitLogo} alt="Github Xavi"/></a>
    </div>

    <div className='member'>
    <img className="img-about" src={Alfonso} alt="Alfonso"/>
    <h3>Alfonso Carpentonso</h3>
    <p><b>Pequeña Descripcion</b></p>
    <p>El señor de las carpetas</p>
    <a href="https://github.com/alfom17"><img className="server-img" src={GitLogo} alt="Github Alfonso"/></a>
    </div>
    
    <div className='member'>
    <img className="img-about" src={Ronnie} alt="Ronnie"/>
    <h3>Ronnie Vélez</h3>
    <p><b>Pequeña Descripcion</b></p>
    <p>Filantropo, aventurero y playboy</p>
    <a href="https://github.com/RonniedeTal"><img className="server-img" src={GitLogo} alt="Github Ronnie"/></a>
    </div>


    </div>
  
  )
}

export default About
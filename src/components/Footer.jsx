import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='futer'>
      <Link to={"/about"}>About</Link>
      <a href="https://github.com/alfom17/rottenPotatoesServer" target="_blank">Server</a>
      <a href="https://github.com/Valveider-X/RottenPotatoes" target="_blank">Proyecto</a>
    </div>
  )
}

export default Footer
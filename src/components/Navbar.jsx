import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/images/patata.png"
import { useState } from 'react';
//navbar bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Menu from "../assets/images/burger-menu.png"
import axios from 'axios';
import { Navigate } from 'react-router-dom';


function MyNavbar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([])



  const handleSearchChange = (event)=>{
   
    setSearchValue(event.target.value);
  }
  const handleSearchSubmit= (event) =>{
    event.preventDefault()
    axios.get(`${import.meta.env.VITE_API_URL}/games?key=${import.meta.env.VITE_API_KEY}&search=${searchValue}`)
    .then((response)=>{
      setSearchResults(response.data.results)
    
    })
    .catch((error)=>{
      navigate("/error")
    })
  }
    
  const handleRemoveSearch =() =>{
    Navigate(0)
  }    
  
  





  return (
    
    <div>
    <Navbar className="navbar" data-bs-theme="light">

        <Navbar.Brand as={Link} to="/">
        <div class="logo-container">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <img className="logo"src={Logo} alt="Logo" />
        </div>
        </Navbar.Brand>
          <Nav
            className="navbar-links"
            style={{ maxHeight: '100px' }}
            >
              {/*<NavDropdown.Divider />*/}
            <Nav.Link as={Link} to="/game-reviews">Reseñas</Nav.Link>
            <Nav.Link as={Link} to="/game-completion">Completion</Nav.Link>

            <div  className="navbar-filter">
            <NavDropdown title={"Filtrar juego"} id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/platforms">Por Plataforma</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/genres">Por Género</NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/games">Todos los juegos</NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
          <Form className="form-search" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="searchBar"
              aria-label="Search"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" type="submit" className="searchButton">Search</Button>
          </Form>

    </Navbar>
    <Container>
      {searchResults.length > 0 && (
        <div className = "search-results">
          <h2>Results</h2>
          <ul>
            {searchResults.map((game)=>(
              <li key={game.id}>
                <Link to={`/game/${game.id}`} onClick={handleRemoveSearch}>
                  {game.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      )}
    </Container>
    </div>
  
   
    
    
  )
}

export default MyNavbar




{/*<div className="navigation">Navbar
    <Link to="/"> 
    <img src={Logo} alt="pepe" style={{height: "80px"}}/> </Link>
    <Link to="/platforms">Plataformas</Link>
    
    <Link to="/genres">generos</Link>

    <Link to="/games">games list</Link>
   
    <Link to="/game-reviews">revius</Link>
    <Link to="/game-completion">compleishon</Link>
    <Link to="/error">es de prueba no me funen</Link>
    <Link to="/about">About</Link>
  </div>*/}
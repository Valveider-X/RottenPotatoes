import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"
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

function MyNavbar() {
  const [searchValue, setSearchValue] = useState("");


  const handleSearchChange = (event)=>{
    setSearchValue(event.target.value);
  }
  const handleSearchSubmit = (event) =>{
    event.preventDefault()
    axios.get(`${import.meta.env.VITE_API_URL}/games$search=${searchValue}?key=${import.meta.env.VITE_API_KEY}`)
    .then((response)=>{
      setSearchValue(response.data.results)
      console.log(response.data.results)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
    
    
  






  return (
    
    <Navbar expand="lg" className="navbar" data-bs-theme="light">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" style={{height: "80px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="navbar-links"
            style={{ maxHeight: '100px' }}
            navbarScroll>
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
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
   
    
    
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
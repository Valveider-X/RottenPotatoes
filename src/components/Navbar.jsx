import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png"
//navbar bootstrap
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
  return (
    
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" style={{height: "80px"}}/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/platforms">Plataformas</Nav.Link>
            <Nav.Link as={Link} to="/genres">Géneros</Nav.Link>
            <Nav.Link as={Link} to="/games">Lista de Juegos</Nav.Link>
            <Nav.Link as={Link} to="/game-reviews">Reseñas</Nav.Link>
            <Nav.Link as={Link} to="/game-completion">Completion</Nav.Link>

            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/action1">Action 1</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/action2">Action 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/action3">Action 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="searchBar"
              aria-label="Search"
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
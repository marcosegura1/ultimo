
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Crud from './components/Crud';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
function App() {
return (
  <Router>
<Navbar bg="light" fixed="top" className="segundo-nav transparente sombra" expand="lg">
      <Container>
      <Link to="/" style={{color:"#5a5a5a"}}>  <img style={{width:"150px", marginRight:"20px"}} 
           src={require('./assets/logo.png')}
           alt="asd"
           loading="lazy"
          /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
           
            navbarScroll
          >
              <Nav.Link> <Link to="/" style={{color:"#5a5a5a"}}>Home</Link></Nav.Link>
              <Nav.Link> <Link to="/about" style={{color:"#5a5a5a"}}>About</Link></Nav.Link>
              <Link to="/services" style={{color:"#5a5a5a"}}>
              <NavDropdown title="Services" style={{color:"#5a5a5a"}}>
              <NavDropdown.Item href="#action3">Inventory management</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Distribution of Parcel
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Light and heavy transportation
              </NavDropdown.Item>
            </NavDropdown></Link>
            <Nav.Link>  <Link to="/contact" style={{color:"#5a5a5a"}}>Contact</Link></Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="Search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="search-btn">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route  path='about' element={<About/>} />
          <Route  path='services' element={<Services/>} />
          <Route  path='contact' element={<Contact/>} />
          <Route  path='crud' element={<Crud/>} />
        </Routes>
 </Router>
  );
}

export default App;

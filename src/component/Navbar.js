import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.svg';
import './css/navbar.css';
import Button from 'react-bootstrap/Button';
function NavbarMenu() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <img src={logo} className="web-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home">Process</Nav.Link>
              <Nav.Link href="#link">Design Inspiration</Nav.Link>
              <Nav.Link href="#link">Blogs</Nav.Link>
              <Nav.Link href="#link">Sign Up</Nav.Link>
              <Button variant="primary">Start Designing</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavbarMenu;
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/logo.svg";
import "./css/navbar.css";
function NavbarMenu() {
  return (
    <div className="menu-bar">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="#home">
          <img src={logo} className="web-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Process</Nav.Link>
            <Nav.Link href="#link">Design Inspiration</Nav.Link>
            <Nav.Link href="#link">Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="right-menu">
          <Nav.Link href="#link">Sign Up</Nav.Link>
          <Nav.Link className="btn-primary" href="#link">
            Start Designing
          </Nav.Link>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;

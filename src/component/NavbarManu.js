import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function NavbarMenuBox() {
  return (
<>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav>
      <Nav.Link href="/">Process</Nav.Link>
      <Nav.Link href="/">Design Inspiration</Nav.Link>
      <Nav.Link href="/">Blogs</Nav.Link>
    </Nav>
  </Navbar.Collapse>
     <div className="right-menu">
     <Nav.Link href="/">Sign Up</Nav.Link>
     <Nav.Link className="btn-primary" href="#link">
       Start Designing
     </Nav.Link>
   </div>
   </>
  );
}

export default NavbarMenuBox;

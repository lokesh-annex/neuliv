
import Navbar from "react-bootstrap/Navbar";
import NavbarManu from "./NavbarManu.js";
import "./css/navbar.css";
function NavbarMenu(props) {
  return (
    <div className={`menu-bar ${props.className}`}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="/index">

          <img src={props.Img} className="web-logo" alt="logo" />
        </Navbar.Brand>

        <NavbarManu />
      </Navbar>
    </div>
  );
}

export default NavbarMenu;

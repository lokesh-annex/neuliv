import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import logo from "./images/logo.svg";

function Header() {
  return (
    <>
      <Navbar Img={logo} />
    </>
  );
}

export default Header;

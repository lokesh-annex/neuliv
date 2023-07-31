import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar.js";
import arrow from "./images/arrow.svg";
import Video1 from "./video/intro-video.mp4";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./css/intro.css";
import logo from "./images/logo-white.svg";
import { Link } from "react-router-dom";
function Intro() {
  const videoRef = useRef(null);

  const play = (e) => {
    videoRef.current.play();
    document.querySelector('body').classList.add("animation-menu");
    // e.target.parentElement.classList.add("active");
  };

  return (
    <>
      <Navbar className="black" Img={logo} />
      <div className="intro-page-container">
        <Container>
          <Row>
            <Col sm={6}>
              <div className="intro-page">
                <h1 className="white-color">
                  YOUR DESIGN &nbsp;&nbsp;&nbsp; & FIT-OUT PARTNER
                </h1>
                <div className="sub-heading-sec white-color">
                  Experience the magic of space transformation with neuliv's
                  simple and efficient process and technology platform
                </div>
                <div className="design-ins-button white-color">
                  <Link onClick={play}>
                    Let the neuliv magic begin
                    <img src={arrow} className="web-logo" alt="arrow" />
                  </Link>
                </div>
              
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <video ref={videoRef} className="factory-video"  muted>
        <source src={Video1} type="video/mp4" />
        <source src={Video1} type="video/ogg" />
      </video>
      <div className="design-ins-button skip-btn white-color">
                  <Link to="/index">
                   Skip
                    <img src={arrow} className="web-logo" alt="arrow" />
                  </Link>
                </div>
    </>
  );
}

export default Intro;

import React, { useState } from "react";
// import animation from "./images/animation-frame-1.svg";
import placeholder from "./images/Placeholder-GIF.jpg";
import arrow from "./images/arrow.svg";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./css/lovespace.css";

function LoveSpcae() {
  return (
    <>
      <div className="love-space-design">
        <Container>
          <Row>
          
            <div className="heading">
              <div className="heading-sec">
                <h2>Love the Space Love the Price</h2>
              </div>
              <div className="sub-heading-sec gray-color">
              Simply input your design preferences and room specifications, and our advanced tool generates a <span className="font-diff">curated set of design inspirations</span>, tailored just for you. 
               
              </div>
            </div>
          </Row>

          <Row>
            <div className="video-section text-center">
              <img src={placeholder} className="web-logo" alt="serviceImg" />
            </div>
            <div className="start-designing-button d-flex">
              <a className="btn-primary" href="">
              Get you first Moodboard
                <img src={arrow} className="web-logo" alt="arrow" />
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LoveSpcae;

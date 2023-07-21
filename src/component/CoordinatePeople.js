import React, { useState } from "react";
import animation from "./images/animation-frame-2.svg";
import arrow from "./images/arrow.svg";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./css/coordinate-people.css";

function CoordinatePeople() {
  return (
    <>
      <div className="coordinate-people">
        <Container>
          <Row>
          
            <div className="heading">
              <div className="heading-sec">
                <h2>No need to coordinate with 20 people. Just talk to one.</h2>
              </div>
              <div className="sub-heading-sec gray-color">
              Neuliv is a one-stop solution for all your interior designing needs. 
               
              </div>
            </div>
          </Row>

          <Row>
            <div className="video-section-main">
            <div className="video-section text-center">
              <img src={animation} className="web-logo" alt="serviceImg" />
            </div>
            <div className="start-designing-button d-flex">
              <a className="btn-primary" href="">
              Get you first Moodboard
                <img src={arrow} className="web-logo" alt="arrow" />
              </a>
            </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CoordinatePeople;

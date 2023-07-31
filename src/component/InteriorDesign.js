import React, { useState } from "react";
import placeholder from "./images/Placeholder-GIF.jpg";
import arrow from "./images/arrow.svg";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./css/interrior-design.css";

function InteriorDesign() {
  return (
    <>
      <div className="interrior-design">
        <Container>
          <Row>
            <h3 className="gray-color">
            How is the neuliv experience different?
            </h3>
            <div className="heading">
              <div className="heading-sec">
                <h2>Unmatched Interior Design & Fit-Out Solutions!</h2>
              </div>
              <div className="sub-heading-sec gray-color">
                Powered by neuliv’s
                <span className="font-diff"> state of the art </span> design tools
                and industry professionals.
              </div>
            </div>
          </Row>

          <Row>
            <div className="video-section">
              <img src={placeholder} className="web-logo" alt="serviceImg" />
            </div>
            <div className="start-designing-button d-flex">
              <a className="btn-primary" href="">
              Start Designing
                <img src={arrow} className="web-logo" alt="arrow" />
              </a>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default InteriorDesign;

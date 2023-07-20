import React, { useState } from "react";
import bgOne from "./images/Process-Step-1.jpg";
import bgTwo from "./images/Process-Step-2.jpg";
import bgThree from "./images/Process-Step-3.jpg";
import bgFour from "./images/Process-Step-4.jpg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./css/slider.css";

function Slide() {
    const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };
  return (
    <>
      <div className="slider-section">
        <Container>
          <Row>
            <Col sm={3} xs={12}>
              <div className="slider-left">
                <h4> neuliv's 4 easy steps to transformation </h4>
                <div className="slider-info-heading">
                  Convert{" "}
                  <span className="slider-info-heading-font"> ideas </span>
                  to concepts
                </div>
                <a className="btn-primary" href="">
                  Start Designing
                </a>
              </div>
            </Col>
            <Col sm={9} xs={12}>
              <div className="slider-right">
                <div className="slide-image-sec full-image-sec">
                  <img src={bgOne} className="web-logo" alt="serviceImg" />
                  <div className="image-design-num"> <span>1/</span>Design Assisst</div>
                </div>
                <div className="slide-image-sec two">
                  <img src={bgTwo} className="web-logo" alt="serviceImg" />
                  <div className="image-design-num"> 2/ Project Consult</div>
                </div>
                <div className="slide-image-sec three">
                  <img src={bgThree} className="web-logo" alt="serviceImg" />
                  <div className="image-design-num"> 1/ Curate Project</div>
                </div>
                <div className="slide-image-sec four">
                  <img src={bgFour} className="web-logo" alt="serviceImg" />
                  <div className="image-design-num"> 1/ Transform Space</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Slide;

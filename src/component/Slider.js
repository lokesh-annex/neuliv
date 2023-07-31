import React, { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./css/slider.css";
const activeClass = "full-image-sec";
function Slide() {
  const SliderImage = [
    {
      image: require("../component/images/Process-Step-1.jpg"),
      heading: "Design Assiss",
      class: activeClass,
    },
    {
      image: require("../component/images/Process-Step-2.jpg"),
      heading: "Project Consult",
    },
    {
      image: require("../component/images/Process-Step-3.jpg"),
      heading: "Curate Project",
    },
    {
      image: require("../component/images/Process-Step-4.jpg"),
      heading: "Transform Space",
    },
  ];
  const ref = useRef();

  const handleMouseMove = (event) => {
    if (event.target.classList.value === "img-fluid") {
      const fullImageElement = document.querySelector("." + activeClass);
      fullImageElement && fullImageElement.classList.remove(activeClass);
      event.target.parentElement.classList.add(activeClass);
    }
  };

  useEffect(() => {
    if (ref) {
      ref.current.addEventListener("mousemove", handleMouseMove);
    }
    const firstImageInSlider =
      document.querySelector(".img-fluid").parentElement;
    firstImageInSlider.classList.add(activeClass);
    return () => {
      ref.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div className="slider-section">
        <Container>
          <Row>
            <Col sm={3} xs={12}>
              <div className="slider-left">
                <h4> neuliv's 4 easy steps to transformation </h4>
                <div className="slide-sec">
                  <div className="slider-info-heading slide-animation-remove">
                    Convert
                    <span className="slider-info-heading-font"> ideas </span>
                    to concepts
                  </div>
                  <div className="slider-info-heading slide-animation-add">
                    Convert
                    <span className="slider-info-heading-font"> concepts </span>
                    to reality
                  </div>
                  <div className="slider-info-heading">
                    Finalize
                    <span className="slider-info-heading-font"> design </span>&
                    costing
                  </div>
                  <div className="slider-info-heading">
                    See your space
                    <span className="slider-info-heading-font">come live</span>
                  </div>
                </div>
                <Link className="btn-primary" to="/">
                  Start Designing
                </Link>
              </div>
            </Col>
            <Col sm={9} xs={12}>
              <div className="slider-right" ref={ref}>
                {SliderImage.map((item, index) => (
                  <div key={"slider-" + index} className="slide-image-sec">
                    <img className={`img-fluid`} src={item.image} alt="image" />
                    <div className="image-design-num">
                      <span>{index + 1}/</span> {item.heading}
                    </div>
                  </div>
                ))}

                {/* <div className="slide-image-sec">
                  <img src={bgTwo} className="web-logo" alt="serviceImg" />
                  <div className="image-design-num"> 2/ Project Consult</div>
                </div>
                <div className="slide-image-sec three">
                  <img src={bgThree} className="web-logo" alt="serviceImg" />
                  <div className="image-design-num"> 3/ Curate Project</div>
                </div>
                <div className="slide-image-sec four">
                  <img src={bgFour} className="web-logo" alt="serviceImg" />
                  <div className="image-design-num"> 3/ Transform Space</div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Slide;

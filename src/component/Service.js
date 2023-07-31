import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrow from "./images/arrow.svg";
import Button from "react-bootstrap/Button";
import "./css/service.css";
import ServiceBox from "./ServiceBox.js";
import ServiceCategory from "./ServiceCategory.js";
function Service() {
  const activeClass = "active";
  const ServiceSection = [
    {
      image: require("../component/images/service-1.jpg"),
      heading: "Apartment",
      class: activeClass,
    },
    {
      image: require("../component/images/service-2.jpg"),
      heading: "Villa",
    },
    {
      image: require("../component/images/service-3.jpg"),
      heading: "Townhouse",
    },
  ];
  return (
    <>
      <div className="service">
        <Container>
          <div className="heading">
            <div className="heading-sec">
              <h2>Let’s start small</h2>
            </div>
            <div className="sub-heading-sec">
              What type of Property do you have?
            </div>
          </div>
          <div className="service-container">
            <h3 className="text-center">What type of Property do you have?</h3>
            <Row className="justify-content-center">
              {ServiceSection.map((item, index) => (
                <Col sm={3} xs={12}>
                  <ServiceBox
                    className={item.class}
                    Img={item.image}
                    ServiceName={item.heading}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
      <ServiceCategory />
      <Container>
        <Row>
          <div className="service-button mb-100 d-flex justify-content-end">
            <Button variant="primary">
              Get Quote
              <img src={arrow} className="web-logo" alt="arrow" />
            </Button>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Service;

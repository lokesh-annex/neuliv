import React from "react";
import serviceImg from "./images/service-img.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/service.css";

function Service() {
  return (
    <>
      <div className="service">
        <Container>
          <div className="heading">
            <div className="heading-sec">
              <h2>Let’s start small</h2>
            </div>
            <div className="sub-heading-sec">
              What kind of services do you need?
            </div>
          </div>
          <div className="service-container">
            <h3 className="text-center">What’s your need?</h3>
            <Row>
              <Col sm={3} xs={12}>
                <div className="service-box text-center">
                  <div className="service-img">
                    <img
                      src={serviceImg}
                      className="web-logo"
                      alt="serviceImg"
                    />
                  </div>
                  <div className="service-name">Design Services</div>
                </div>
              </Col>
              <Col sm={3} xs={12}>
                <div className="service-box text-center">
                  <div className="service-img">
                    <img
                      src={serviceImg}
                      className="web-logo"
                      alt="serviceImg"
                    />
                  </div>
                  <div className="service-name">Fit out Services</div>
                </div>
              </Col>
              <Col sm={3} xs={12}>
                <div className="service-box text-center">
                  <div className="service-img">
                    <img
                      src={serviceImg}
                      className="web-logo"
                      alt="serviceImg"
                    />
                  </div>
                  <div className="service-name">Design & Fit out</div>
                </div>
              </Col>
              <Col sm={3} xs={12}>
                <div className="service-box text-center">
                  <div className="service-img">
                    <img
                      src={serviceImg}
                      className="web-logo"
                      alt="serviceImg"
                    />
                  </div>
                  <div className="service-name">Landscaping</div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Service;

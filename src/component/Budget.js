import React, { useState } from "react";
import arrow from "./images/arrow.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "rc-slider/assets/index.css";
import Button from "react-bootstrap/Button";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import "./css/budget.css";





function Budget() {
  const [value, setValue] = useState(0)
    return (
    <>
      <div className="budget-bar">
        <Container>
          <div className="budget-bar-container">
            <h3 className="text-center">What’s your budget?</h3>
            <Row>
             
                <div className="budget-bar-box text-center">
                {/* <Slider min={0} max={100000} defaultValue={700} handleRender={handleRender}  /> */}
                <Slider
                min={0}
                max={100000}
        value={value}
        tooltip
        onChange={setValue}
      />
                </div>
                <div className="budget-bar-min-max">
                  <div className="budget-bar-min bar-taxt"> 0.00 AED</div>
                  <div className="budget-bar-max bar-taxt">100,000 AED</div>
                </div>
            </Row>
          </div>
          <Row>
          <div className="budget-button d-flex justify-content-end">
                  <Button variant="primary">
                    Get Quote
                    <img src={arrow} className="web-logo" alt="arrow" /> 
                  </Button>
                </div>
                </Row>
        </Container>
      </div>
    </>
  );
}


export default Budget;



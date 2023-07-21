import React from "react";
import arrow from "./images/black-arrow.svg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "rc-slider/assets/index.css";
import "./css/inspiration.css";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  


function Inspiration() {
  return (
    <>
      <div className="design-inspiration">
        <Container>
      
          <div className="logo-container-inspiration">
            <Row>
              <Col sm={3} xs={12}>
                <div className="logo-container-box"></div>
              </Col>
              <Col sm={3} xs={12}>
                <div className="logo-container-box"></div>
              </Col>
              <Col sm={3} xs={12}>
                <div className="logo-container-box"></div>
              </Col>
              <Col sm={3} xs={12}>
                <div className="logo-container-box"></div>
              </Col>
            </Row>
            <div className="design-library">
              <Col sm={7} xs={12}>
              <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img  className="img" src= {'assets/img/img1.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img2.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img4.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img3.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img5.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img6.jpg'}/></div>  
           <div><img className="img" src= {'assets/img/img7.jpg'}/></div>  
      </OwlCarousel>  
              </Col>
            
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Inspiration;

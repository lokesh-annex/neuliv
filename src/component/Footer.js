import React from "react";
import footerLogoIcon from "./images/footer-logo-icon.svg";
import logo from "./images/logo.svg";
import address from "./images/teenyicons_home-solid.svg";
import mail from "./images/fluent_mail-24-filled.svg";
import phone from "./images/ion_call.svg";
import twitter from "./images/mdi_twitter.svg";
import facebook from "./images/entypo-social_facebook.svg";
import linkedin from "./images/pajamas_linkedin.svg";
import instagram from "./images/teenyicons_instagram-solid.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
       
        <Container>
        <div className="footer-top">
          <Row>
            <Col  xs={5}>
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <img src={footerLogoIcon} alt="logo" />
                </div>
                <div className="footer-logo-web">
                  <img src={logo} className="web-logo" alt="logo" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="footer-menu">
                <div className="footer-heading">Explore</div>
                <ul>
                  <li>
                    <a href="">Process</a>
                  </li>
                  <li>
                    <a href="">Design Inspiration</a>
                  </li>
                  <li>
                    <a href="">Blogs</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
            
              <div className="footer-menu">
                <div className="footer-heading">Company</div>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Partners</a>
                  </li>
                  <li>
                    <a href="">Get In Touch</a>
                  </li>
                  <li>
                    <a href="">Copyright Notice</a>
                  </li>
                
                </ul>
              </div>
            </Col>
            <Col>
        
              <div className="footer-menu">
                <div className="footer-heading">Legal</div>
                <ul>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Refund Policy</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Cookie Policy</a>
                  </li>
                  <li>
                    <a href="">Data Protection Policy</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          </div>
          <div className="footer-bottom">
          <Row>
           
            <Col sm={6}>
              <div className="company-info-sec">
               <ul>
                <li className="d-flex">
                  <div className="company-info-icon">
                  <img src={address} alt="logo" />
                  </div>
                  <div className="company-info-bar">
                  Unit 208, Level 1, Gate Avenue - South Zone, DIFC, Dubai, UAE
                  </div>
                  </li>
                  <li className="d-flex align-items-baseline">
                  <div className="company-info-icon">
                  <img src={phone} alt="logo" />
                  </div>
                  <div className="company-info-bar">
                    <a href="Tel:97-15857-55443">
                  +97-15857-55443
                  </a>
                  </div>
                  </li>

                  <li className="d-flex align-items-baseline">
                  <div className="company-info-icon">
                  <img src={mail} alt="logo" />
                  </div>
                  <div className="company-info-bar">
                    <a href="mailto: contact@neuliv.com">
                  contact@neuliv.com
                  </a>
                  </div>
                  </li>
                </ul> 
              
              </div>
            </Col>
            <Col sm={6}>
              <div className="d-flex social-icons justify-content-end">
                <a href="">
                <img src={twitter} alt="twitter" />
                </a>
                <a href="">
                <img src={instagram} alt="instagram" />
                </a>
                <a href="">
                <img src={facebook} alt="facebook" />
                </a>
                <a href="">
                <img src={linkedin} alt="linkedin" />
                </a>
              </div>
            </Col>
           
          </Row>
          </div>
        </Container>
        </div>
      
    </>
  );
}

export default Footer;

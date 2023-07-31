import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ServiceBox from "./ServiceBox.js";
function ServiceCategory(props) {
  const activeClass = "active";
  const ServiceCategory = [
    {
      image: require("../component/images/ser-cat-1.jpg"),
      heading: "Interior Design",
      class: activeClass,
      image: require("../component/images/ser-cat-1.jpg"),
    },
    {
      image: require("../component/images/ser-cat-2.jpg"),
      heading: "Fit-Out",
    },
    {
      image: require("../component/images/ser-cat-3.jpg"),
      heading: "Landscaping",
    },
    {
      image: require("../component/images/ser-cat-4.jpg"),
      heading: "Swimming Pool",
    },
  ];
  return (
    <>
       <div className="service-category">
        <Container>
        
          <div className="service-container">
            <h3 className="text-center">What service(s) do you want?</h3>
            <Row className="justify-content-center">
              {ServiceCategory.map((item, index) => (
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
    </>
  );
}

export default ServiceCategory;

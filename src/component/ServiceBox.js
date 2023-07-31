import React from "react";
function ServiceBox(props) {
  return (
    <>
      <div className={`service-box text-center ${props.className}`}>
        <div className="service-img">
          <img src={props.Img} className="web-logo" alt="serviceImg" />
        </div>
        <div className="service-name">{props.ServiceName}</div>
      </div>
    </>
  );
}

export default ServiceBox;

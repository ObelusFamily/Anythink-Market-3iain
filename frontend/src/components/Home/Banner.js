import React from "react";
import logo from "../../imgs/logo.png";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
       
        <div>
          <img src={logo} className="img-fluid" alt="banner" />
          <span id="get-part">A place to get</span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

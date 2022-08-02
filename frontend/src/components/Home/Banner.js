import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input
            type="text"
            id="search-box"
            placeholder="What is it that you truly desire?"
            onInput={(event) => {
              let searchTerm = event.target.value;
              if (searchTerm.length <= 2) {
                searchTerm = undefined;
              }
              props.onEnterSearchTerm(
                searchTerm,
                (page) => agent.Items.all(searchTerm, page),
                agent.Items.all(searchTerm)
              );
            }}
          />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

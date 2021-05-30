import React from "react";
import twitterlogo from "../scss/twitter.svg";
import facebooklogo from "../scss/facebook.svg";

const Footer = () => {
  return (
    <div id="white">
      <div id="footer">
        <a href="https://twitter.com/at_3_a_m" target="_blank">
          <img className="socialmedia-logo" src={twitterlogo} alt="" />
        </a>
         • 
        <a href="https://www.facebook.com/germanaquila" target="_blank">
          <img
            className="socialmedia-logo facebook"
            src={facebooklogo}
            alt=""
          />
        </a>{" "}
        • <a href="privacy.html">Privacy</a> • 
        <a href="mailto:g.axl.aquila@gmail.com">Contact</a> • 
        <a href="mailto:g.axl.aquila@gmail.com" target="_blank">
          Feedback
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react'
import twitterlogo from "../scss/twitter.svg";
import facebooklogo from "../scss/facebook.svg";

const Footer = () => {
  return (
    <div id="white">
      <div id="footer">
        <a href="https://twitter.com/askwonderbot" target="_blank">
          <img className="socialmedia-logo" src={twitterlogo} alt="" />
        </a>
         • 
        <a href="https://www.facebook.com/askwonderbot" target="_blank">
          <img className="socialmedia-logo facebook" src={facebooklogo} alt="" />
        </a>{" "}
        • <a href="privacy.html">Privacy</a> • 
        <a href="cdn-cgi/l/email-protection.html#dbb1b4a9bfbab59bacb4b5bfbea9f6b9b4aff5b8b4b6">
          Contact
        </a>{" "}
        • 
        <a href="https://wonder.canny.io/" target="_blank">
          Feedback
        </a>
      </div>
    </div>
  );
}

export default Footer

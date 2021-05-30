import React from "react";
import "../scss/style.scss";
import telegram from "../scss/telegram-seeklogo.com.svg";
import freeminder from "../scss/Asset5.svg";


const Hero = () => {
  return (
    <div id="hero">
      <div class="inner">
        <div id="logo">
          <a href="index.html">
            <img src={freeminder} />
            FreeMinder
          </a>
          <div class="divider"></div>
          <img src={telegram} />
        </div>
        <h2>
          Remember the things <br class="mobile-hide"></br>your team forgets
        </h2>
        <p>
          FreeMinder remembers things for you so you don’t have to. If you think
          you will forget it, just tell FreeMinder.
        </p>
        <a class="button no-margin" href="https://t.me/BritishFamilyButlerBot/">
          <i class="fa fa-slack" aria-hidden="true"></i> Add to Telegram
        </a>
        <a class="login" href="https://telegram.org/">
          Sign in with Telegram
        </a>
      </div>
    </div>
  );
};

export default Hero;

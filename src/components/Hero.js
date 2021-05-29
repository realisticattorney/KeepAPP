import React from "react";
import "../scss/style.scss";
import telegram from "../scss/telegram-seeklogo.com.svg";


const Hero = () => {
  return (
    <div id="hero">
      <div class="inner">
        <div id="logo">
          <a href="index.html">
            <img src="assets/logo.svg"></img>FreeMinder
          </a>
          <div class="divider"></div>
          <img src={telegram}/>
        </div>
        <h2>
          Remember the things <br class="mobile-hide"></br>your team forgets
        </h2>
        <p>
          FreeMinder remembers things for you so you don’t have to. If you
          think you will forget it, just tell FreeMinder.
        </p>
        <a
          class="button no-margin"
          href="https://slack.com/oauth/authorize?client_id=73177863074.78486309223&amp;redirect_uri=http%3A%2F%2Fwonder-bot.com%2Fusers%2Fauth%2Fslack%2Fcallback&amp;response_type=code&amp;scope=team%3Aread%2Cbot&amp;state=b468f8b13f615fbeefe79a42fe79819ce08f129b8c153c9a"
        >
          <i class="fa fa-slack" aria-hidden="true"></i> Add to Telegram
        </a>
        <a
          class="login"
          href="https://slack.com/oauth/authorize?client_id=73177863074.78486309223&amp;redirect_uri=http%3A%2F%2Fwonder-bot.com%2Fusers%2Fauth%2Fslack%2Fcallback&amp;response_type=code&amp;scope=team%3Aread%2Cbot&amp;state=d5f41d57d79ff158aae7bfd01da26bf653bab7f85e0067b1"
        >
          Sign in with Telegram
        </a>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import calltoaction2 from "../scss/telegramcalltoactionempty-01.svg";

const CallToAction = () => {
  return (
    <div class="section inner" id="start-wondering">
      <h4>Free Your Mind</h4>
      <p class="sub">FREEMINDER is available to chat via Telegram</p>
      <ul class="platforms">
        <li class="slack slack-image">
          <a href="https://slack.com/oauth/authorize?client_id=73177863074.78486309223&amp;redirect_uri=http%3A%2F%2Fwonder-bot.com%2Fusers%2Fauth%2Fslack%2Fcallback&amp;response_type=code&amp;scope=team%3Aread%2Cbot&amp;state=11a26f11a7000cd79b639b859d088a52cffb5ea1eea3514d">
            <button id="calltoaction"
              style={{
                backgroundImage: `url(${calltoaction2})`,
                height: "62px",
                width: "255px",
                borderRadius: "14%/50%"
              }}
            >Add to Telegram</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CallToAction;

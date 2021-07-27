import React from "react";
import calltoaction2 from "../scss/telegramcalltoactionempty-01.svg";

const CallToAction = () => {
  return (
    <div class="section inner">
      <h4>Free Your Mind</h4>
      <p class="sub">FREEMINDER is available to chat via Telegram</p>
      <ul class="platforms">
        <li class="slack slack-image">
          <a href="https://t.me/FreeMinderBot">
            <button
              id="calltoaction"
              style={{
                backgroundImage: `url(${calltoaction2})`,
                height: "62px",
                width: "255px",
                borderRadius: "14%/50%",
              }}
            >
              Add to Telegram
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CallToAction;

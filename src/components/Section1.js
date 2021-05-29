import React from "react";
import "../scss/tags/_section1.scss";

const Section1 = () => {
  return (
    <div class="section">
      <div class="inner">
        <h4>Tip of the tongue phenomenon be gone</h4>
        <p class="sub">
          Tell FreeMinder to remember things you know you’ll forget.
        </p>
      </div>
      <div class="slack-wrapper inner">
        <div class="slack-app">
          <div class="menu">
            <p class="title">Acme, Inc.</p>
            <ul>
              <li class="active"># general</li>
              <li># design</li>
              <li># engineering</li>
              <li># finance</li>
              <li># random</li>
              <br />
              <li>@ freeminder</li>
            </ul>
          </div>
          <div class="chat">
            <ul>
              <li>
                <div
                  class="icon"
                  style={{ "background-image": "url(assets/slack/amanda.jpg" }}
                ></div>
                <div class="text">
                  <h5>Amanda Matthews</h5>
                  <p>
                    Our net sales for this year so far is at $345,000! Great job
                    everyone, we've almost surpassed last year's sales!
                  </p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ "background-image": "url(assets/slack/mike.jpg" }}
                ></div>
                <div class="text">
                  <h5>Mike Brown</h5>
                  <p>
                    <span>@freeminder</span> what were our net sales in 2016?
                  </p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ "background-image": "url(assets/slack/wonder.jpg" }}
                ></div>
                <div class="text">
                  <h5>FreeMinder</h5>
                  <p>$350,000</p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ "background-image": "url(assets/slack/mike.jpg" }}
                ></div>
                <div class="text">
                  <h5>Mike Brown</h5>
                  <p>
                    Awesome! What is our goal for sales this year{" "}
                    <span>@amanda</span>?
                  </p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ "background-image": "url(assets/slack/amanda.jpg" }}
                ></div>
                <div class="text">
                  <h5>Amanda Matthews</h5>
                  <p>
                    To meet our growth goals we need to make at least $600,000.
                  </p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ "background-image": "url(assets/slack/amanda.jpg" }}
                ></div>
                <div class="text">
                  <h5>Amanda Matthews</h5>
                  <p>
                    <span>@freeminder</span> remember that our net sales goal for
                    2017 is $600,000
                  </p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ "background-image": "url(assets/slack/wonder.jpg" }}
                ></div>
                <div class="text">
                  <h5>Freeminder</h5>
                  <p>Got it, I'll remember that for you.</p>
                </div>
              </li>
              <li class="input">
                <div class="input">Let's do this!</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;

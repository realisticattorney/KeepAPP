import React from "react";
import "../scss/tags/_section1.scss";
import freeminder from "../scss/Asset5.svg";
import mike from "../scss/profile-pics/profile1.jpeg";
import asianmature from "../scss/profile-pics/profile2.jpeg";
import geeky from "../scss/profile-pics/profile3.jpeg";
import jordan from "../scss/profile-pics/profile4.jpeg";
import waifu from "../scss/profile-pics/profile9.jpeg";
import latinahot from "../scss/profile-pics/profile7.jpeg";
import white from "../scss/profile-pics/profile8.jpeg";
const Section1 = () => {
  return (
    <div class="section">
      <div class="inner">
        <h4>Memory like a sieve phenomenon be gone</h4>
        <p class="sub">
          Tell FreeMinder to remember things you know you’ll forget.
        </p>
      </div>
      <div class="slack-wrapper inner">
        <div class="slack-app">
          <div class="menu">
            <ul>
              <li className="grid-li active">
                <img className="grid-li-img" src={freeminder} />{" "}
                <h6 className="grid-li-h">FreeMinder</h6>
                <p className="grid-li-p-s">15:36</p>
                <p className="grid-li-p">
                  Hey Amanda. Saturday you have chess classes
                </p>
              </li>
              <li className="grid-li">
                <img className="grid-li-img" src={mike} />{" "}
                <h6 className="grid-li-h">Steve Lopez</h6>
                <p className="grid-li-p-s">14:22</p>
                <p className="grid-li-p">
                  Awesome! What is our goal for sales this year @amanda?
                </p>
              </li>
              <li className="grid-li">
                <img className="grid-li-img" src={asianmature} />{" "}
                <h6 className="grid-li-h">Jen Lee</h6>
                <p className="grid-li-p-s">13:55</p>
                <p className="grid-li-p">Great! It will be ready on Tuesday</p>
                <p className="grid-li-p-n">11</p>
              </li>
              <li className="grid-li">
                <img className="grid-li-img" src={geeky} />{" "}
                <h6 className="grid-li-h">Mike Brown</h6>
                <p className="grid-li-p-s">11:31</p>
                <p className="grid-li-p">
                  Definitely a game changer for this kind of biz
                </p>
                <p className="grid-li-p-n">2</p>
              </li>
              <li className="grid-li">
                <img className="grid-li-img" src={latinahot} />{" "}
                <h6 className="grid-li-h">Pam Libelu</h6>
                <p className="grid-li-p-s">Fri</p>
                <p className="grid-li-p">
                  It was great to see you! Let's repeat it next weekend w...
                </p>
                <p className="grid-li-p-n">4</p>
              </li>
              <li className="grid-li">
                <img className="grid-li-img" src={jordan} />{" "}
                <h6 className="grid-li-h">Jordan Singer</h6>
                <p className="grid-li-p-s">Fri</p>
                <p className="grid-li-p">Big fan of your work Jordan</p>
              </li>
              <li className="grid-li">
                <img className="grid-li-img" src={white} />{" "}
                <h6 className="grid-li-h">Karen Knight</h6>
                <p className="grid-li-p-s">Thu</p>
                <p className="grid-li-p">
                  Hey Yerman. saturday you have chess classes
                </p>
                <p className="grid-li-p-n">1</p>
              </li>
            </ul>
          </div>
          <div class="chat">
            <ul>
              <li>
                <div
                  class="icon"
                  style={{ backgroundImage: `url(${waifu})` }}
                ></div>
                <div class="text">
                  <h5>Amanda Matthews</h5>
                  <p>
                    <span>/start</span>
                  </p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ backgroundImage: `url(${freeminder})` }}
                ></div>
                <div class="text">
                  <h5>FreeMinder</h5>
                  <p>Hi Amanda! Thank you for having me</p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ backgroundImage: `url(${freeminder})` }}
                ></div>
                <div class="text">
                  <h5>FreeMinder</h5>
                  <p>
                    This is I work: Tell me what to remind you and at which
                    time. That's it. Example: I'll visit mom on the weekend.
                    Remind me this saturday at 10am
                  </p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ backgroundImage: `url(${freeminder})` }}
                ></div>
                <div class="text">
                  <h5>FreeMinder</h5>
                  <p>
                    To know better all I can do just send <span>/help</span>
                  </p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ backgroundImage: `url(${waifu})` }}
                ></div>
                <div class="text">
                  <h5>Amanda Matthews</h5>
                  <p>Great! Not a bad idea actually. I miss mom</p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ backgroundImage: `url(${waifu})` }}
                ></div>
                <div class="text">
                  <h5>Amanda Matthews</h5>
                  <p>
                    I'm taking mom to dinner next monday. Remind me this sunday
                    at 6:30pm
                  </p>
                </div>
              </li>
              <li>
                <div
                  class="icon"
                  style={{ backgroundImage: `url(${freeminder})` }}
                ></div>
                <div class="text">
                  <h5>Freeminder</h5>
                  <p>
                    You're taking mom to dinner next monday. Got it. I'll remind
                    that for you this sunday at 6:30pm
                  </p>
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

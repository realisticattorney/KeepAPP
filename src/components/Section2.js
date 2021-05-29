import React from 'react'

const Section2 = () => {
  return (
    <div class="section inner">
      <h4>Easily manage team memories</h4>
      <p class="sub">
        Use the Dashboard to add and update memories, as well as categorize them
      </p>
      <ul id="memories">
        <li>
          <div class="content">
            <h3>Net sales goal for 2017</h3>
            <p>$600,000</p>
          </div>
          <div class="meta">
            <span class="platform">
              <i class="fa fa-slack" aria-hidden="true"></i> Goals
            </span>
            <div class="clear"></div>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Net sales in 2016</h3>
            <p>$350,000</p>
          </div>
          <div class="meta">
            <span class="platform">
              <i class="fa fa-slack" aria-hidden="true"></i> Sales
            </span>
            <div class="clear"></div>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Company address</h3>
            <p>123 E. San Francisco St.</p>
          </div>
          <div class="meta">
            <span class="platform">
              <i class="fa fa-slack" aria-hidden="true"></i> Addresses
            </span>
            <div class="clear"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Section2

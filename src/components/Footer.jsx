import React from 'react'
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
export default function Footer() {
  return (
    <div className="foot">
      <div className="container footer">
        <div className="logo">Shortly</div>
        <div className="foot-section features">
          <ul>
            <li>Features</li>
            <li>Link Shortening</li>
            <li> Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="foot-section resource">
          <ul>
            <li>Resources</li>
            <li>Blog</li>
            <li>Developer</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="foot-section company">
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <img src={facebook} alt="facebaook" />
            </li>
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={pinterest} alt="pinterest" />
            </li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

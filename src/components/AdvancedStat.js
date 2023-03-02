import React from "react";
import customizable from "../images/icon-fully-customizable.svg";
import record from "../images/icon-detailed-records.svg";
import brand from "../images/icon-brand-recognition.svg";
import ShortenLink from "./ShortenLink";
export default function AdvancedStat() {
  return (
    <div className="advanced-body">

    <div className="container">
      <ShortenLink/>
      <div className="container advanced-header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how you links are performed across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="advanced-statistics">
        <div className="stat stat-1">
          <div className="stat-image">
            <img src={brand} alt="" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boast your Brand recognition with each click. Generic links don't
            mean a thing. Branded links helps instil confidence in your content.
          </p>
        </div>
        <div className="stat stat-2">
          <div className="stat-image">
            <img src={record} alt="" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insight to who is clicking your links. Knowing when and where
            people engage withyou content, helps inform better decisions.
          </p>
        </div>
        <div className="stat stat-3">
          <div className="stat-image">
            <img src={customizable} alt="" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Increase brand awareness and content discoverability through
            customisable links, supercharging audience engagements.
          </p>
        </div>
        <div className="line"></div>
      </div>
    </div>
    </div>
  );
}

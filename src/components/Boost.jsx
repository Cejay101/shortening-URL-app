import React from 'react'
import boost from "../images/bg-boost-desktop.svg";
export default function Boost() {
  return (
    <div className="boost" style={{ backgroundImage: `url("${boost}")` }}>
      <div className="container">
        <h2>Boost your links today</h2>
        <button className="get-started">Get Started</button>
      </div>
    </div>
  );
}

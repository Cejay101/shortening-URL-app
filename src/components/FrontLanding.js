import React from 'react'
import image from "../images/illustration-working.svg";

export default function FrontLanding() {
  return (
    <div className="container">
      <div className="Front-Landing">
        <div>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insight on how you
            links are performing.
          </p>
          <button className="get-started">Get Started</button>
        </div>
        <div>
          <img src={image} alt="help" />
        </div>
      </div>
    </div>
  );
}

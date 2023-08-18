import React from "react";
import "./about.css";
const about = () => {
  return (
    <div className="About-Container">
      <div className="About-Title">ABOUT</div>
      <div className="About-Society">
       
          Welcome to our dynamic and innovative Tech Society! Your gateway to
          the exciting world of new technologies.
          <br />
          A community created by the learners, of the learners, and for the
          learners.
          <br />
          Through engaging workshops, thrilling hackathons, and collaborative
          project support, we're here to ignite your passion for technology and
          empower you to shape the future. Join us on this journey of
          exploration, creation, and endless possibilities!
       
      </div>
      <div className="Vision-Mission-Container">
              <div className="About-Vision">
                  <div className="Vision-Title">VISION</div>
                  <div className="Vision-Content">hello my vision</div>
        </div>
              <div className="About-Mission">
                  <div className="Mission-Title">Mission</div>
                  <div className="Mission-Content">hello my Mission</div>
        </div>
      </div>
    </div>
  );
};

export default about;

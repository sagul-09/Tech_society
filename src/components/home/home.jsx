import React from "react";
import "./home.css";
import societyLogo from "../../assets/societyLogo.png";
const home = () => {
  return (
    <>
      <div className="Home-Container">
        <div className="Society-Name">
          <div className="College-Title">SEC</div>
          <div className="animate-charcter"> Tech Society</div>
          <div className="Society-Thought">
            <p>
              "The advance of technology is based on making it fit in so that
              you don't really even notice it, so it's part of everyday life." —
              Bill Gates
            </p>
          </div>
        </div>
        <img src={societyLogo} alt="Society Logo" />
      </div>
    </>
  );
};

export default home;

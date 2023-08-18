import { useState } from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

const nav = () => {
  const [colorChange, setColorchange] = useState(false);
  const [mobnavOpen, setMobilenavOpen] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const setNavHeight = () => {
    const nav = document.querySelector("#navbar");
    const root = document.querySelector(":root");
    root.style.setProperty("--navHeight", `${nav.clientHeight}px`);
  };
  window.addEventListener("resize", setNavHeight);
  return (
    <nav
      id="navbar"
      className={colorChange ? "navbar navbar-active" : "navbar"}
    >
      <div className="container-nav">
        <div className="logo">
          <img style={{ width: "100%" }} src={logo} alt="logo" />
        </div>
        <div className="nav-elements">
          <ul className={mobnavOpen ? "active" : ""}>
            <li>
              <HashLink
                smooth
                to="#"
                onClick={() => setMobilenavOpen(!mobnavOpen)}
                className="active"
              >
                Home
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#About"
                onClick={() => setMobilenavOpen(!mobnavOpen)}
              >
                About
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#"
                onClick={() => setMobilenavOpen(!mobnavOpen)}
              >
                Community
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#"
                onClick={() => setMobilenavOpen(!mobnavOpen)}
              >
                Event
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="#"
                onClick={() => setMobilenavOpen(!mobnavOpen)}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={() => setMobilenavOpen(!mobnavOpen)}>
          {mobnavOpen ? <CgClose /> : <CgMenuRight />}
        </div>
      </div>
    </nav>
  );
};

export default nav;

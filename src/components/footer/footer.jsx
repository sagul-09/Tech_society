import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="Contact">
      <div className="flex container1">
        <div className="block">
          {/* <img style={{ width: "100%" }} src={logo} alt="logo" /> */}
          <h4 className="heading">COMMUNITY HEAD</h4>
          <div className="Community-Head">
            <ul>
              <li>Mr. C. Obed Otto, M.E., Associate Dean, ICT</li>
            </ul>
          </div>
        </div>
        <div className="block">
          <h4 className="heading">OVERALL STUDENT CO-ORDINATOR</h4>
          <div className="Community-Coordinators">
            <ul>
              <li className="links">Marinto Richee J</li>
              <li className="links">
                Mail: marintorichee.student@saveetha.ac.in
              </li>
              <li className="links">Phone No.: +91 9994934712</li>
            </ul>
          </div>
          <h4 className="heading">ASSISTANT STUDENT CO-ORDINATORS</h4>
          <div className="Community-Coordinators">
            <ul>
              <li>Shafeeq Ahamed</li>
              <li>Mail: shafeeq.student@saveetha.ac.in</li>
              <li>Phone No.: +91 9840328404</li>
              <br />
              <li>Anisha Shabnam</li>
              <li>Mail: anishashabnamm.student@saveetha.ac.in</li>
              <li>Phone No.: +91 91505 82103</li>
              <br />
              <li>Kaushika</li>
              <li>Mail: kaushika.student@saveetha.ac.in</li>
              <li>Phone No.: +91 99406 74299</li>
            </ul>
          </div>
        </div>
        <div className="block">
          <h4 className="heading">USEFUL LINKS</h4>
          <a href="#" className="links">
            Home
          </a>
          <a href="#About" className="links">
            About
          </a>
          <a href="#Community" className="links">
            Community
          </a>
          <a href="#Register" className="links">
            Register
          </a>
          <h4
            className="heading"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            SOCIALS
          </h4>
          <div className="social-links">
            <a
              target="blank"
              href="https://www.facebook.com/pg/SaveethaEngineeringCollegeSEC/posts/?ref=page_internal"
            >
              <FaFacebook />
            </a>
            <a target="blank" href="https://twitter.com/SaveethaSEC/">
              <FaTwitter />
            </a>
            <a
              target="blank"
              href="https://www.instagram.com/saveethaengineeringcollege/"
            >
              <FaInstagram />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/saveetha-engineering-college/"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="blank"
              href="https://in.pinterest.com/saveethaengineering/"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="block">
          <h4 className="heading">LOCATION</h4>
          <p className="address">
            Saveetha Nagar, Sriperumbudur Taluk, Kanchipuram - Chennai Rd,
            Chennai, Tamil Nadu 602105
          </p>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                style={{
                  borderRadius: "10px",
                }}
                className="gmap_iframe"
                width="100%"
                src="https://maps.google.com/maps?width=250&amp;height=250&amp;hl=en&amp;q=Saveetha engineering college&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © Saveetha Engineering College, Powered by Tech Society.
      </div>
    </div>
  );
};

export default Footer;

import "./footer.css";
import logo from "../../assets/logo.png";
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
          <h4 className="heading">STUDENT CO-ORDINATORS</h4>
          <div className="Community-Coordinators">
            <ul>
              <li>Marinto Richee J</li>
              <li>Mail: marintorichee.student@saveetha.ac.in</li>
              <li>Phone No.: 9994934712</li>
              <br />
              <li>Shafeeq Ahamed</li>
              <li>Mail: shafeeq.student@saveetha.ac.in</li>
              <li>Phone No.: 9840328404</li>
              <br />
              <li>Anisha Shabnam</li>
              <li>Mail: anishashabnamm.student@saveetha.ac.in</li>
              <br />
              <li>Kaushika A</li>
              <li>Mail: kaushika.student@saveetha.ac.in</li>
              <br />
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
          <Link to="/#paper-submission" className="links">
            Community
          </Link>
          <a href="#" className="links">
            Privacy Policy
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
            Saveetha Nagar, Sriperumbadur Taluk, Kanchipuram - Chennai Rd,
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

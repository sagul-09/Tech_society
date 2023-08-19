import "./register.css";
import Fade from "react-reveal/Fade";
function register() {
  return (
    <div className="Register-Conatiner" id="Register">
      <Fade bottom>
        <div className="Register-Title">
          REGISTER NOW TO BE A PART OF THE TECH-SOCIETY COMMUNITY
        </div>
        <div className="wrapper">
          <a className="cta" href="#">
            <span>REGISTER</span>
          </a>
        </div>
      </Fade>
    </div>
  );
}

export default register;

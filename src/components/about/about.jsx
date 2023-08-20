import "./about.css";
import "aos/dist/aos.css";

const about = () => {
  return (
    <div className="About-Container" id="About">
      <div data-aos="fade-down">
        <div className="About-Title">ABOUT</div>
      </div>
      <div data-aos="fade-down">
        <div className="About-Society">
          Welcome to our dynamic and innovative Tech Society! Your gateway to
          the exciting world of new technologies.
          <br /> A community created by the learners, of the learners, and for
          the learners.
          <br /> Through engaging workshops, thrilling hackathons, and
          collaborative project support, we are here to ignite your passion for
          technology and empower you to shape the future. Join us on this
          journey of exploration, creation, and endless possibilities!
        </div>
      </div>
      <div className="Vision-Mission-Container">
        <div className="Vision-Content">
          <div data-aos="fade-right">
            
            <div className="card">
              <div className="Card-Title">VISION</div>
              <hr/>
              <div className="Card-Content">
                Our vision is to create a vibrant college tech community where
                diverse learners unite to explore and advance technology.
                Together, we foster innovation, collaboration, and lifelong
                learning, empowering learners to leverage technology for a
                positive impact.
              </div>
            </div>
          </div>
        </div>
        <div className="Mission-Content">
          <div data-aos="fade-left">
  
            <div className="card">
              <div className="Card-Title">MISSION</div>
              <hr/>
              <div className="Card-Content">
                Our mission is to provide a platform that empowers learners to
                excel in the fields of Machine Learning, Web Development, Game
                Development, Intelligent Systems, and much more
                <br/>
                <br/>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

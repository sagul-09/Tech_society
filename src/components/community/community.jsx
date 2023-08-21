import "./community.css";
import Web from "../../assets/community/web.jpeg";
import Game from "../../assets/community/game.jpg";
import Inte from "../../assets/community/Intel.jpeg";
import Ml from "../../assets/community/ML.jpeg";
const community = () => {
  return (
    <div className="Community-Container" id="Community">
      <div className="Community-Title">
        <div data-aos="fade-down">COMMUNITY</div>
      </div>
      <div className="Community-Society">
        <div className="container py-4">
          <div data-aos="fade-right">
            <article className="postcard dark blue">
              <img className="postcard__img" src={Web} alt="Image Title" />
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  <div>WEB DEVELOPMENT COMMUNITY</div>
                </h1>

                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Vision: Igniting a passion for web development by fostering a
                  united community of creative minds.
                  <br />
                  <br />
                  Mission: Empowering members to excel through collaborative
                  projects, exciting challenges, and shared knowledge, while
                  unveiling the full potential of web development.
                  <br />
                  <br />
                  Secretary: Lathika Sunder
                  <br />
                  Joint-Secretary: Sagul, SaranKumar J, Harsayazheni PY
                  <br />
                  <br />
                  <span>Contact:</span>
                  <br />
                  Mail: sarankumar.student@saveetha.ac.in
                  <br />
                  Phone No.: +91 6379615515
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item play blue">
                    {/* <a href="">
                    <i className="fas fa-play mr-2"></i>Event
                  </a> */}
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div data-aos="fade-left">
            <article className="postcard dark red">
              <img className="postcard__img" src={Game} alt="Image Title" />

              <div className="postcard__text">
                <h1 className="postcard__title red">
                  <div>GAME AND APP DEVELOPMENT COMMUNITY</div>
                </h1>
                {/* <div className="postcard__subtitle small">
                
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
            
              </div> */}
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Vision: To inspire and entertain the learners through innovative and immersive gaming and app experiences that push the boundaries of technology, storytelling, and creativity. 
                  <br />
                  <br />
                  Mission: Our mission is to create a dynamic and inclusive ecosystem that empowers game and app developers to excel, collaborate, and make a meaningful impact. Through our commitment to knowledge sharing, skill development, and fostering connections.
                  <br />
                  <br />
                  Secretary: Sham Rathan S
                  <br />
                  Joint-Secretary: Aakash S, Dinesh Kumar, Navya V.
                  <br />
                  <br />
                  <span>Contact</span>
                  <br />
                  Mail: aakash.student@saveetha.ac.in
                  <br />
                  Phone No.: +91 6383960184
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item play red">
                    {/* <a href="#">
                    <i className="fas fa-play mr-2"></i>Event
                  </a> */}
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div data-aos="fade-right">
            <article className="postcard dark blue">
              <img className="postcard__img" src={Inte} alt="Image Title" />
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  <div>INTELLIGENT SYSTEMS COMMMUNITY</div>
                </h1>
                {/* <div className="postcard__subtitle small">
               
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
             
              </div> */}
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Vision: The Intelligent Systems Community envisions a globally
                  interconnected network that harnesses the potential of
                  intelligent systems for profound transformations. Through
                  interdisciplinary collaboration and responsible innovation, we
                  seek to elevate human well being and tackle societal
                  challenges. By facilitating cutting-edge research, ethical
                  development, education, and purposeful applications, our goal
                  is to shape a future where intelligent systems drive positive
                  change and inspire innovation across diverse domains.
                  <br />
                  <br />
                  Mission: The mission of the Intelligent Systems Community is
                  to cultivate a dynamic ecosystem that champions pioneering
                  research, interdisciplinary synergy, and ethical frameworks.
                  Providing a platform for cutting-edge projects, knowledge
                  dissemination, and pragmatic solutions, our community fosters
                  professional growth through educational resources, workshops,
                  and skill enhancement. Embracing open research, conscientious
                  AI advancement, and advocacy for ethical technology, we strive
                  to make impactful contributions. We are dedicated to
                  cultivating inclusivity, nurturing leadership, and shaping a
                  future where intelligent systems catalyze societal progress.
                  <br />
                  <br />
                  Secretary: Nagaraj s
                  <br />
                  Joint-Secretary: Jeeva Abishake, K. Kavya, Amrutha Rajsheker
                  <br />
                  <br />
                  <span>Contact</span>
                  <br />
                  Mail: nagaraj.cse.student@saveetha.ac.in
                  <br />
                  Phone No.: +91 7603809690
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item play blue">
                    {/* <a href="#">
                    <i className="fas fa-play mr-2"></i>Event
                  </a> */}
                  </li>
                </ul>
              </div>
            </article>
          </div>
          <div data-aos="fade-left">
            <article className="postcard dark red">
              <img className="postcard__img" src={Ml} alt="Image Title" />

              <div className="postcard__text">
                <h1 className="postcard__title red">
                  <div>MACHINE LEARNING COMMUNITY</div>
                </h1>
                {/* <div className="postcard__subtitle small">
                
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
            
              </div> */}
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  Vision: Our vision for the Machine Learning Community at
                  TechSociety is to create a collaborative and innovative space
                  where learners unlock the full potential of machine learning,
                  driving advancements that reshape industries, enhance
                  decision-making, and positively impact society.
                  <br />
                  <br />
                  Mission: Our mission is to cultivate a dynamic community that
                  empowers learners to master machine learning through hands-on
                  experiences, knowledge exchange, and ethical exploration. We
                  strive to foster a culture of innovation, where members
                  develop cutting-edge solutions, forge industry connections,
                  and contribute to a smarter and more connected world.
                  <br />
                  <br />
                  Secretary: Chethan Y
                  <br />
                  Joint-Secretary: Rithiga Sri.B, Laakshit D, Ronick Aakshath P
                  <br />
                  <br />
                  <span>Contact</span>
                  <br />
                  Mail: chethan.student@saveetha.ac.in
                  <br />
                  Phone No.: +91 8344443941
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item play red">
                    {/* <a href="#">
                    <i className="fas fa-play mr-2"></i>Event
                  </a> */}
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default community;

import "./community.css";
import Web from "../../assets/community/web.png";
import Game from "../../assets/community/game.jpg"
import Inte from "../../assets/community/intellif=gence.jpg"
import Ml from "../../assets/community/ML.jpeg"
const community = () => {
  return (
    <div className="Community-Container" id="Community">
      <div className="Community-Title">COMMUNITY</div>
      <div className="Community-Society">
        <div className="container py-4">
          <article className="postcard dark blue">
            <img
              className="postcard__img"
              src={Web}
              alt="Image Title"
            />
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <div>WEB DEVELOPMENT COMMUNITY</div>
              </h1>
              {/* <div className="postcard__subtitle small">
               
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
             
              </div> */}
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Vision:Igniting a passion for web development by fostering a
                united community of creative minds.
                <br />
                <br />
                Mission:Empowering members to excel through collaborative
                projects, exciting challenges, and shared knowledge, while
                unveiling the full potential of web development.
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
          <article className="postcard dark red">
            <img
              className="postcard__img"
              src={Game}
              alt="Image Title"
            />

            <div className="postcard__text">
              <h1 className="postcard__title red">
                <div>GAME DEVELOPMENT COMMUNITY</div>
              </h1>
              {/* <div className="postcard__subtitle small">
                
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
            
              </div> */}
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Vision: Game Development Community will provide a space for
                anyone interested in learning how to develop video games,
                whether they have no experience in it and help you to know the
                everything about gaming sector.
                <br />
                <br />
                Mission: We create fun based games,workshops and events to the
                students to acquire knowledge on game development pipeline,
                gaming engines,review, consoles and much about that industry.
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
          <article className="postcard dark blue">
            <img
              className="postcard__img"
              src={Inte}
              alt="Image Title"
            />
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <div>INTELLIGENT SYSTEMS COMMMUNITY</div>
              </h1>
              {/* <div className="postcard__subtitle small">
               
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
             
              </div> */}
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Vision:The Intelligent Systems Community envisions a globally
                interconnected network that harnesses the potential of
                intelligent systems for profound transformations. Through
                interdisciplinary collaboration and responsible innovation, we
                seek to elevate human well being and tackle societal challenges.
                By facilitating cutting-edge research, ethical development,
                education, and purposeful applications, our goal is to shape a
                future where intelligent systems drive positive change and
                inspire innovation across diverse domains.
                <br />
                <br />
                Mission:The mission of the Intelligent Systems Community is to
                cultivate a dynamic ecosystem that champions pioneering
                research, interdisciplinary synergy, and ethical frameworks.
                Providing a platform for cutting-edge projects, knowledge
                dissemination, and pragmatic solutions, our community fosters
                professional growth through educational resources, workshops,
                and skill enhancement. Embracing open research, conscientious AI
                advancement, and advocacy for ethical technology, we strive to
                make impactful contributions. We are dedicated to cultivating
                inclusivity, nurturing leadership, and shaping a future where
                intelligent systems catalyze societal progress.
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
          <article className="postcard dark red">
            <img
              className="postcard__img"
              src={Ml}
              alt="Image Title"
            />

            <div className="postcard__text">
              <h1 className="postcard__title red">
                <div>MACHINE LEARNING COMMUNITY</div>
              </h1>
              {/* <div className="postcard__subtitle small">
                
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
            
              </div> */}
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Vision:Our vision for the Machine Learning Community at
                TechSociety is to create a collaborative and innovative space
                where learners unlock the full potential of machine learning,
                driving advancements that reshape industries, enhance
                decision-making, and positively impact society.
                <br />
                <br />
                Mission:Our mission is to cultivate a dynamic community that
                empowers learners to master machine learning through hands-on
                experiences, knowledge exchange, and ethical exploration. We
                strive to foster a culture of innovation, where members develop
                cutting-edge solutions, forge industry connections, and
                contribute to a smarter and more connected world.
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
  );
};

export default community;

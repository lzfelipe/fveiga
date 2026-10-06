import React from "react";
import {
  SubTitle,
  Title,
  MainButton,
  TitleContainer,
  SocialIconsDesktop,
  KnowMeText,
  Timeline,
  TimeLineMobile
} from "../styles/title";

import socialLinks from "../components/socialLinks";
import Footer from "../components/footer";
import {Link} from 'react-router-dom'

// Smoothly scrolls to the timeline instead of jumping (and keeps the URL free of "#timeline")
const scrollToTimeline = (event) => {
  event.preventDefault();
  document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
};

function Index() {
    return (
      <div>
        <div style={{ display: "flex", width: "100%", justifyContent: "center", textAlign: "center" }} >
          <TitleContainer>
            <Title>
              Hello,<br></br> I'm Felipe<span>.</span>
            </Title>
            <SubTitle>
              javascript fullstack developer &#38; digital designer{" "}
            </SubTitle>
            <div>
              <Link to='/projects'><MainButton>see my projects</MainButton></Link>
            </div>

            <KnowMeText>
              <a href="#timeline" onClick={scrollToTimeline}>
                <h2>Know me &#8594;</h2>
              </a>
            </KnowMeText>

            <div style={{ width: "100%", display: "block" }}>
                
              <Title style={{ fontSize: 28 }}>
                this is my{" "}
                <u style={{ textDecorationColor: "#C365EF" }}>
                  professional timeline
                </u>
              </Title>
              
            </div>
          </TitleContainer>

          <SocialIconsDesktop>
            <div style={styles.socialContainer}>
              <div style={styles.socialWrapper}>
                {socialLinks.map(({ name, href, icon }) => (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    <img src={icon} alt={name} width="20" />
                  </a>
                ))}
              </div>
            </div>
          </SocialIconsDesktop>
        </div>

        <div style={{ width: "100vw", height: 'fit-content'}} id="timeline">

            <Timeline>
                <div className="timeline">

                    <div className="entries">
                        <div className="entry">
                            <div className="title">2014</div>
                            <div className="body">
                        <p>Entered an IT technical course at Colégio Anchieta</p>
                            </div>
                        </div>
                        <div className="entry">
                            <div className="title">2015</div>
                            <div className="body">
                            <p>Started working as a Freelancer</p>
                            </div>
                        </div>
                        <div className="entry">
                            <div className="title">2016</div>
                            <div className="body">
                            <p>Finished my IT course</p>
                            </div>
                        </div>
                        
                        <div className="entry">
                            <div className="title">2016</div>
                            <div className="body">
                            <p>Started working as a Teacher/Monitor at Eurodata </p>
                            </div>
                        </div>
                        <div className="entry">
                            <div className="title">2017</div>
                            <div className="body">
                            <p>Departure from Eurodata</p>
                            </div>
                        </div>
                        <div className="entry">
                            <div className="title big">2017</div>
                            <div className="body">
                            <p>Joined my bachelor’s
                            degree in Digital Design
                            at Anhembi Morumbi.</p>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </Timeline>

            <TimeLineMobile>
              <div className="entry"> 
                <div className="year">
                  <div className="circle"></div><h2>2014</h2>
                  <span className="line"/>
                </div>
                <div className="text">
                  <p>
                    Entered an IT technical course at Colégio Anchieta
                  </p>
                </div>
              </div>

              <div className="entry"> 
                <div className="year">
                  <div className="circle"></div><h2>2015</h2>
                  <span className="line"/>
                </div>
                <div className="text">
                  <p>
                    Started working as a Freelancer
                  </p>
                </div>
              </div>

              <div className="entry"> 
                <div className="year">
                  <div className="circle"></div><h2>2016</h2>
                  <span className="line"/>
                </div>
                <div className="text">
                  <p>
                    Finished my IT course
                  </p>
                </div>
              </div>

              <div className="entry"> 
                <div className="year">
                  <div className="circle"></div><h2>2016</h2>
                  <span className="line"/>
                </div>
                <div className="text">
                  <p>
                  Started working as a teacher/monitor at Eurodata
                  </p>
                </div>
              </div>

              <div className="entry"> 
                <div className="year">
                  <div className="circle"></div><h2>2017</h2>
                  <span className="line"/>
                </div>
                <div className="text">
                  <p>
                  Departure from Eurodata
                  </p>
                </div>
              </div>

              <div className="entry"> 
                <div className="year">
                  <div className="circle"></div><h2>2017</h2>
                  <span className="line"/>
                </div>
                <div className="text">
                  <p>
                  Joined my bachelor’s degree in Digital Design at Anhembi Morumbi.
                  </p>
                </div>
              </div>

              <div className="entry"> 
                <div className="year">
                  <div className="circle"></div><h2>2021</h2>
                </div>
                <div className="text">
                  <p>
                  Finished my bachelor’s degree in Digital Design.
                  </p>
                </div>
              </div>
            </TimeLineMobile>


        </div>
        
        <Footer />
      </div>
    );
}

//Passar socialContainer e SocialWrapper para styled components para usar mediaQuerries dps <--- @@@important
const styles = {
  socialContainer: {
    display: "flex",
    height: "30%",
    position: "absolute",
    width: "15%",
    alignItems: "center",
    right: 0,
  },

  socialWrapper: {
    height: "40%",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column",
  },
};

export default Index;

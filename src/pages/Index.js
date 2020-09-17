import React, { Component } from "react";
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

import behance from "../assets/social/behance.svg";
import ig from "../assets/social/ig.svg";
import linkedn from "../assets/social/linkedin.svg";
import Footer from "../components/footer";

class Index extends Component {
  render() {
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
              <MainButton>see my projects</MainButton>
            </div>

            <KnowMeText>
              <h2>Know me &#8594;</h2>
            </KnowMeText>

            <div style={{ width: "100%", display: "block" }}>
                
              <Title style={{ fontSize: 28 }}>
                this is my{" "}
                <u style={{ textDecorationColor: "#C365EF" }}>
                  professional timeline
                </u>
              </Title>
              <a style={{color: "#FFF", textDecoration: "underline", fontSize: 14 }} href="#">Download my resume PDF</a>
            </div>
          </TitleContainer>

          <SocialIconsDesktop>
            <div style={styles.socialContainer}>
              <div style={styles.socialWrapper}>
                <a
                  href="https://www.behance.net/lzfelipevs3c78"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={behance} alt="behance" width="20" />
                </a>

                <a
                  href="https://github.com/lzfelipe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ig} alt="ig" width="20"></img>
                </a>

                <a
                  href="https://www.linkedin.com/in/luiz-felipe-veiga-de-siqueira-a91491181/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedn} alt="linkedn" width="20"></img>
                </a>
              </div>
            </div>
          </SocialIconsDesktop>
        </div>

        <div style={{ width: "100vw", height: 'fit-content'}} id="timeline">

            <Timeline>
                <div className="timeline">

                    <div class="entries">
                        <div class="entry">
                            <div class="title">2014</div>
                            <div class="body">
                        <p>Entered an IT technical course at Colégio Anchieta</p>
                            </div>
                        </div>
                        <div class="entry">
                            <div class="title">2015</div>
                            <div class="body">
                            <p>Started working as a Freelancer</p>
                            </div>
                        </div>
                        <div class="entry">
                            <div class="title">2016</div>
                            <div class="body">
                            <p>Finished my IT course</p>
                            </div>
                        </div>
                        
                        <div class="entry">
                            <div class="title">2016</div>
                            <div class="body">
                            <p>Started working as a Teacher/Monitor at Eurodata </p>
                            </div>
                        </div>
                        <div class="entry">
                            <div class="title">2017</div>
                            <div class="body">
                            <p>Departure from Eurodata</p>
                            </div>
                        </div>
                        <div class="entry">
                            <div class="title big">2017</div>
                            <div class="body">
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

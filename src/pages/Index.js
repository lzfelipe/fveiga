import React, { Component } from "react";
import {
  SubTitle,
  Title,
  MainButton,
  TitleContainer,
  SocialIconsDesktop,
  KnowMeText,
  Timeline,
} from "../styles/title";

import behance from "../assets/social/behance.svg";
import ig from "../assets/social/ig.svg";
import linkedn from "../assets/social/linkedin.svg";

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
                
              <Title style={{ fontSize: 35 }}>
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

        <div style={{ width: "100vw", height: 1}} id="timeline">
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
                    <p>Started working as a Teacher/ Monitor at Eurodata (Techinical/IT Courses) </p>
                    </div>
                </div>
                <div class="entry">
                    <div class="title">2017</div>
                    <div class="body">
                    <p>Departure from Eurodata</p>
                    </div>
                </div>
                <div class="entry">
                    <div class="title big">2018</div>
                    <div class="body">
                    <p>Joined my bachelor’s
                    degree in Digital Design
                    at Anhembi Morumbi.</p>
                    </div>
                </div>

            </div>
        </div>
            </Timeline>
        </div>
      </div>
    );
  }
}

//Passar socialContainer e SocialWrapper para styled components para usar mediaQuerries dps <--- @@@important
const styles = {
  socialContainer: {
    display: "flex",
    height: "80%",
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

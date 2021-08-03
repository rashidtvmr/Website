import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Image from "next/image";
import styled from "styled-components";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { useTheme } from "@material-ui/core/styles";

import { useMediaQuery } from "@material-ui/core";

const OurLeaderShip = styled.div`
  color: #fff;
  font-size: 28px;
`;
const BIgText = styled.div`
  color: #fff;
  text-align: left;
  font-size: 20px;
  line-height: 24px;
  margin: 40px inherit !important;
`;
const OppsiteText = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

const TimeLine__ = styled.div`
  //   height: 2000px;
  margin: 110px auto;
`;

const useStyles = makeStyles({
  oc: {
    position: "absolute",
    left: 50,
  },
});
function TimelineSection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();
  return (
    <div>
      <Container>
        <TimeLine__>
          {/* <div className="aboutus__mobile_curve_1">
            <img src="assets/about-us/mobile_curve.svg" alt="" />
          </div> */}

          {/* <div className="aboutus_curve__round_1">
            <img src="assets/about-us/round.svg" alt="" />
          </div>
          <div className="aboutus_curve__round_2">
            <img src="assets/about-us/round.svg" alt="" />
          </div> */}

          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={4} style={{ position: "relative" }}>
                <div className="left-card__container">
                  <Card className="left-card">
                    <div className="left-card__content">
                      <div className="left-card__heading">
                        <div className="left-card__icon">
                          <img src="/assets/about-us/Mission.svg" alt="" />
                        </div>
                        Mission
                      </div>
                      <div className="left-card__main">
                        We foster an environment with unlimited opportunity to
                        provide innovative software and services with the
                        highest level of quality and excellence.
                      </div>
                    </div>
                  </Card>
                  <Card className="left-card">
                    <div className="left-card__content">
                      <div className="left-card__heading">Vision</div>
                      <div className="left-card__main">
                        Bring high quality software to the world in a more
                        efficient, affordable, and reliable way; software that
                        creates more job opportunities and higher income for
                        developers across the world.{" "}
                      </div>
                    </div>
                    <div className="left-card__icon">
                      <img src="/assets/about-us/Vision.svg" alt="" />
                    </div>
                  </Card>
                  <Card className="left-card">
                    <div className="left-card__content">
                      <div className="left-card__heading">Values</div>
                      <div className="left-card__main">
                        Hard work, growth, creativity, and honesty
                      </div>
                    </div>
                    <div
                      className="left-card__icon"
                      style={{ marginTop: isSmallScreen ? 10 : 0 }}
                    >
                      <img src="/assets/about-us/Values.svg" alt="" />
                    </div>
                  </Card>
                </div>
              </Grid>
              <Grid item xs={12} lg={8}>
                <Timeline align={isSmallScreen ? "left" : "right"}>
                  <TimelineItem style={{ marginTop: 20 }}>
                    <TimelineOppositeContent className="timeline__title">
                    Software Architect and Consultant
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "unset",
                          zIndex: 999999,
                        }}
                      >
                        <img
                          src="/assets/about-us/SoftwareArchitectAndConsultant.svg"
                          width="35px"
                          height="35px"
                        />
                        <div className="aboutus_curve">
                          <div className="aboutus_leadership">
                            <div>OUR</div>
                            <div className="bold">LEADERSHIP</div>
                          </div>
                          {isSmallScreen ? (
                            <img src="assets/about-us/line_mobile.svg" alt="" />
                          ) : (
                            <img src="assets/about-us/line.svg" alt="" />
                          )}
                          <div className="aboutus-ceo">
                            <div className="aboutus-ceo__name">
                              Matthew McKeller
                            </div>
                            <div className="aboutus-ceo__text">CEO</div>
                          </div>
                          <div className="aboutus__curved_profile_back">
                            <div style={{ position: "relative" }}>
                              <div className="aboutus__curved_profile">
                                <img
                                  src="/assets/about-us/profile.svg"
                                  height="219px"
                                  width="219px"
                                />
                              </div>
                            </div>
                            <img
                              src="/assets/about-us/profile_back.svg"
                              height="350px"
                              width="350px"
                            />
                          </div>
                        </div>
                      </TimelineDot>
                      <TimelineConnector
                        style={{ backgroundColor: "#805DA7", width: 0 }}
                      />
                    </TimelineSeparator>
                    <TimelineContent className="timeline__para">
                      Agile software development consultant and software
                      architect for MDU Resources Group Inc. a fortune 1000
                      company. Introduced Agile Development, Agile Project
                      Management, and Agile Roadmapping while rebuilding, and
                      continuously deploying end-of-life applications from the
                      ground up.
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem style={{ marginTop: 20 }}>
                    <TimelineOppositeContent className="timeline__title">
                      Senior Application Developer
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "unset",
                          zIndex: 999999,
                        }}
                      >
                        <img
                          src="/assets/about-us/SeniorApplicationDeveloper.svg"
                          width="35px"
                          height="35px"
                        />
                      </TimelineDot>
                      <TimelineConnector
                        style={{ backgroundColor: "#805DA7", width: 0 }}
                      />
                    </TimelineSeparator>
                    <TimelineContent className="timeline__para">
                      Senior web application developer partnering with a team of
                      25 in an agile scrum environment for LexisNexis Risk
                      Solutions we developed the Risk Intelligence Network, a
                      high-priority fraud platform for the U.S.
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem style={{ marginTop: 20 }}>
                    <TimelineOppositeContent className="timeline__title">
                    Director of Software Development
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "unset",
                          zIndex: 999999,
                        }}
                      >
                        <img
                          src="/assets/about-us/DirectorOfSoftwareDevelopment.svg"
                          width="35px"
                          height="35px"
                        />
                      </TimelineDot>
                      <TimelineConnector
                        style={{ backgroundColor: "#805DA7", width: 0 }}
                      />
                    </TimelineSeparator>
                    <TimelineContent className="timeline__para">
                      Started and directed a software development department at
                      an 8-figure student housing company and eventually grew
                      the department from just one to lead a team of 5 software
                      developers.
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Grid>
            </Grid>
          </div>
        </TimeLine__>
      </Container>
    </div>
  );
}

export default TimelineSection;

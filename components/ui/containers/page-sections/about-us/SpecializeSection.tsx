import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import Head from "next/head";

const HeadText = styled.div`
position:relative;
  color: #fff;
  font-family: Roboto;
  text-align: center;
  font-size: 48px;
  line-height: 56px;
  margin-top: 120px;
  margin-bottom: 60px;
`;
const CardChild = styled.div`
  height: 180px;
  width:100%;
  color: #fff !important;
  vertical-align: middle;
  background: #222a36;
  & div {
    padding: 20px;
  }
  display: block;
  text-align: center;
  & img {
  }
`;

const BottomText = styled.div`
  font-family: Roboto;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  color: #fff;
  margin-top: 40px;
  padding-bottom: 40px;
`;

export default function SpecializeSection({}) {
  return (
    <div style={{backgroundColor:'#1c232e'}}>
      <Container>
        <HeadText>
          <div className="aboutus__spl__heading">
            WE{" "}
            <br className="aboutus__spl__heading__lb"/>
            SPECIALIZE IN
          </div>
        </HeadText>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={10} sm={6} md={4}>
            <Card style={{ background: "#222a36", borderRadius: 12,}}>
              <CardChild>
                <Box my="auto">
                  <img src="/assets/icons/Web App Browser.svg" alt="" />
                  <div>WEB APPLICATION DEVELOPMENT & SOFTWARE ARCHITECTURE</div>
                </Box>
              </CardChild>
            </Card>
          </Grid>
          <Grid item xs={10} sm={6} md={4}>
            <Card style={{ background: "#222a36", borderRadius: 12 }}>
              <CardChild>
                <Box my="auto">
                  <img src="assets/icons/AgileCircle.svg" alt="" />
                  <div>AGILE SOFTWARE DEVELOPMENT & ANALYSIS</div>
                </Box>
              </CardChild>
            </Card>
          </Grid>
          <Grid item xs={10} sm={6} md={4}>
            <Card style={{ background: "#222a36", borderRadius: 12 }}>
              <CardChild>
                <Box my="auto">
                  <img src="assets/icons/LightBulb.svg" alt="" />
                  <div>LEADERSHIP & PROBLEM SOLVING</div>
                </Box>
              </CardChild>
            </Card>
          </Grid>
          <Grid item xs={10} sm={6} md={4}>
            <Card style={{ background: "#222a36", borderRadius: 12 }}>
              <CardChild>
                <Box my="auto">
                  <img src="assets/icons/SearchIcon.svg" alt="" />
                  <div>SOFTWARE TESTING & DEBUGGING</div>
                </Box>
              </CardChild>
            </Card>
          </Grid>
          <Grid item xs={10} sm={6} md={4}>
            <Card style={{ background: "#222a36", borderRadius: 12 }}>
              <CardChild>
                <Box my="auto">
                  <img src="assets/icons/ChatCommunication.svg" alt="" />
                  <div>DOCUMENTATION & CROSS-FUNCTIONAL COMMUNICATION</div>
                </Box>
              </CardChild>
            </Card>
          </Grid>
          <Grid item xs={10} sm={6} md={4}>
            <Card style={{ background: "#222a36", borderRadius: 12 }}>
              <CardChild>
                <Box my="auto">
                  <img src="assets/icons/Chart.svg" alt="" />
                  <div>MOTIVATION & GROWTH</div>
                </Box>
              </CardChild>
            </Card>
          </Grid>
        </Grid>
        <BottomText>
          <div className="aboutus__last-text">
            Through Expanse we provide superior products and services with the
            highest level of quality and excellence.
          </div>
        </BottomText>
      </Container>
    </div>
  );
}

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Image from "next/image";
import styled from "styled-components";
// import FastfoodIcon from "@material-ui/icons/Fastfood";
// import LaptopMacIcon from "@material-ui/icons/LaptopMac";
// import HotelIcon from "@material-ui/icons/Hotel";
// import RepeatIcon from "@material-ui/icons/Repeat";
import Typography from "@material-ui/core/Typography";
import SpecializeSection from "../components/ui/containers/page-sections/about-us/SpecializeSection";
import TimelineSection from "../components/ui/containers/page-sections/about-us/TimelineSection";

type Props = {};

const HeroImage = styled.div`
  overflow: hidden;
  background: url(/assets/about-us/about-us.svg) no-repeat center;
  background-size: cover;
    width: 100%;
  height: 90vh;
  overflow:hidden !important;
  &:before {
    overflow:hidden;
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    top: 0px;
    left: 0px;
    width: 100%;
    height: 90%;
  }
`;

const AboutUsHead = styled.div`
  font-size: 48px;
  line-height: 56px;
  position: absolute;
  top: 30%;
  left: 60px;
  color: #ffffff !important;
  &:before {
    content: "";
    position: absolute;
    background: white;
    top: 60px;
    left: 0px;
    width: 100px;
    height: 5px;
    border-radius:50px;
  }
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const AboutUs = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <HeroImage>
        <AboutUsHead>About Us</AboutUsHead>
      </HeroImage>
      <div style={{ position: "relative" }}>
        <img
          src="assets/about-us/back-icon.svg"
          width="80px"
          style={{ position: "absolute", right: 0, top: "100px" }}
        />
        <img
          src="assets/about-us/back-icon_2.svg"
          width="80px"
          style={{ position: "absolute", left: 0, top: "400px" }}
        />
        <TimelineSection />
        <SpecializeSection />
      </div>
    </div>
  );
};

export default AboutUs;

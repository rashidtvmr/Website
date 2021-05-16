import Head from 'next/head';
import styled, {createGlobalStyle} from "styled-components";
import React from "react";
import {HeroProps, HeroSection} from '../components/page-sections/hero-section';
import {OurProcessProps, OurProcessSection} from '../components/page-sections/our-process-section';
import {StatisticsProps, StatisticsSection} from '../components/page-sections/statistics-section';
import {WhyChooseUsProps, WhyChooseUsSection} from '../components/page-sections/why-choose-us-section';
import {TestimonialProps, TestimonialSection} from "../components/page-sections/testimonial-section";
import {OurServicesProps, OurServicesSection, ServiceCard} from "../components/page-sections/our-services-section";
import {BACKGROUND_DEFAULT} from "../config/app-config";
import {HomeConfig} from "../config/home-config";
import {BaseFlexContainer} from "../components/_utility/utility";

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 4rem;
  }
`;

type Props = {
  heroProps: HeroProps,
  ourServicesProps: OurServicesProps,
  ourProcessProps: OurProcessProps,
  statisticsProps: StatisticsProps,
  whyChooseUsProps: WhyChooseUsProps,
  testimonialProps: TestimonialProps
}



const SectionContainerStyled = styled.section`
  height: ${(props: any) => props?.height ? props?.height : "500px"};
  min-height: ${(props: any) => props?.height ? props?.height : "500px"};
  background-color: ${(props: any) => props?.backgroundColor ? props?.backgroundColor : BACKGROUND_DEFAULT};
  display: flex;
`;

const Home = ({
                heroProps,
                ourServicesProps,
                ourProcessProps,
                statisticsProps,
                whyChooseUsProps,
                testimonialProps
              }: Props) => {
  console.log({heroProps})

  return (
    <BaseFlexContainer>
      {/*<Head>*/}
      {/*  <title>Check header inject</title>*/}
      {/*</Head>*/}
      <SectionContainerStyled>
        <HeroSection {...heroProps} />
      </SectionContainerStyled>
      <SectionContainerStyled backgroundColor="red">
        <OurServicesSection {...ourServicesProps} />
      </SectionContainerStyled>
      <SectionContainerStyled backgroundColor="orange">
        <WhyChooseUsSection {...whyChooseUsProps} />
      </SectionContainerStyled>
      <SectionContainerStyled backgroundColor="blue">
        <StatisticsSection {...statisticsProps} />
      </SectionContainerStyled>
      <SectionContainerStyled backgroundColor="green">
        <OurProcessSection {...ourProcessProps} />
      </SectionContainerStyled>
      <SectionContainerStyled backgroundColor="teal">
        <TestimonialSection {...testimonialProps} />
      </SectionContainerStyled>
      <GlobalStyle/>
    </BaseFlexContainer>
  )
}


export const getStaticProps = async () => {
  return {
    props: HomeConfig,
  }
}

export default Home

import Head from 'next/head';
import styled, {createGlobalStyle} from "styled-components";
import React from "react";
import {HeroProps, HeroSection} from '../components/ui/containers/page-sections/home/hero-section';
import {OurProcessProps, OurProcessSection} from '../components/ui/containers/page-sections/home/our-process-section';
import {StatisticsProps, StatisticsSection} from '../components/ui/containers/page-sections/home/statistics-section';
import {WhyChooseUsProps, WhyChooseUsSection} from '../components/ui/containers/page-sections/home/why-choose-us-section';
import {TestimonialProps, TestimonialSection} from "../components/ui/containers/page-sections/home/testimonial-section";
import {OurServicesProps, OurServicesSection} from "../components/ui/containers/page-sections/home/our-services-section";
import {BACKGROUND_DEFAULT} from "../config/app-config";
import {HomeConfig} from "../config/home/home-config";
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


type SectionContainerProps = {
    backgroundColor: string;
    height: string;
}
const SectionContainerStyled = styled.section<SectionContainerProps | any>`
  height: ${(props) => props?.height ? props?.height : "500px"};
  min-height: ${(props) => props?.height ? props?.height : "500px"};
  background-color: ${(props) => props?.backgroundColor ? props?.backgroundColor : BACKGROUND_DEFAULT};
  display: flex;
`;

export const Index = ({
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

export default Index

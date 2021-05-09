import Head from 'next/head';
import {createGlobalStyle} from "styled-components";
import React from "react";
import {HeroProps, HeroSection} from '../components/page-sections/hero-section';
import {OurProcessProps, OurProcessSection} from '../components/page-sections/our-process-section';
import {StatisticsProps, StatisticsSection} from '../components/page-sections/statistics-section';
import {WhyChooseUsProps, WhyChooseUsSection} from '../components/page-sections/why-choose-us-section';
import {TestimonialProps, TestimonialSection} from "../components/page-sections/testimonial-section";
import {OurServicesProps, OurServicesSection, ServiceCard} from "../components/page-sections/our-services-section";
import {StatisticsConfig} from "../config/statistics-config";
import {
  CUTTING_EDGE_TECHNOLOGY,
  NATURAL_TRANSPARENCY,
  REAL_TIME_UPDATES,
  WORLD_CLASS_DEVELOPERS
} from "../config/why-choose-us-config";
import {TESTIMONIAL_1} from "../config/testemonials-config";
import {
  IntegrationsAndApiDevelopmentCard, OUR_SERVICES_HEADER,
  TechnologyMigrationServicesCard,
  WebAndMobileAppDevCard
} from "../config/our-services-config";
import {HERO_BACKGROUND_IMAGE_1, HERO_BODY_TEXT_1, HERO_BUTTON_LABEL_1, HERO_HEADER} from "../config/hero-config";
import {
  OUR_PROCESS_ACTION_BUTTON_LABEL,
  OUR_PROCESS_SECTION_TITLE,
  STEP_1,
  STEP_2, STEP_3
} from "../config/our-processes-config";

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

const Home = ({
                heroProps,
                ourServicesProps,
                ourProcessProps,
                statisticsProps,
                whyChooseUsProps,
                testimonialProps
              }: Props) => {
  return (
    <>
      {/*<Head>*/}
      {/*  <title>Check header inject</title>*/}
      {/*</Head>*/}
      <HeroSection {...heroProps} />
      <OurServicesSection {...ourServicesProps} />
      <WhyChooseUsSection {...whyChooseUsProps} />
      <StatisticsSection {...statisticsProps} />
      <OurProcessSection {...ourProcessProps} />
      <TestimonialSection {...testimonialProps} />
      <GlobalStyle/>
    </>
  )
}


export const getStaticProps = async () => {
  const staticProps: Props = {
    heroProps: {
      header: HERO_HEADER,
      bodyText: HERO_BODY_TEXT_1,
      buttonLabel: HERO_BUTTON_LABEL_1,
      backgroundImage: HERO_BACKGROUND_IMAGE_1,
    },
    ourServicesProps: {
      title: OUR_SERVICES_HEADER,
      cards: [
        WebAndMobileAppDevCard,
        IntegrationsAndApiDevelopmentCard,
        TechnologyMigrationServicesCard
      ],
    },
    whyChooseUsProps: {
      reasons: [
        NATURAL_TRANSPARENCY,
        WORLD_CLASS_DEVELOPERS,
        REAL_TIME_UPDATES,
        CUTTING_EDGE_TECHNOLOGY,
      ]
    },
    statisticsProps: {
      statistics: StatisticsConfig
    },
    ourProcessProps: {
      actionButtonLabel: OUR_PROCESS_ACTION_BUTTON_LABEL,
      steps: [STEP_1, STEP_2, STEP_3]
    },
    testimonialProps: {
      testimonials: [
        TESTIMONIAL_1
      ]
    }
  }
  return {
    props: {
      props: staticProps
    },
  }
}

export default Home

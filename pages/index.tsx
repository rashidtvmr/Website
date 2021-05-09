import Head from 'next/head';
import {createGlobalStyle} from "styled-components";
import React from "react";
import {HeroSection} from '../components/containers/page-sections/hero-section';
import {OurProcessSection} from '../components/containers/page-sections/our-process-section';
import {StatisticsSection} from '../components/containers/page-sections/statistics-section';
import {WhyChooseUsSection} from '../components/containers/page-sections/why-choose-us-section';

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 4rem;
  }
`;

type Props = {
  heroProps: any,
  ourProcessProps: any,
  statisticsProps: any,
  whyChooseUsProps: any
}

const Home = ({heroProps, ourProcessProps, statisticsProps, whyChooseUsProps}: Props) => {
  return (
    <>
      <Head>
        <title>SSR styled-components! Next.js Starter</title>
      </Head>
      <HeroSection {...heroProps}/>
      <OurProcessSection {...ourProcessProps} />
      <StatisticsSection {...statisticsProps} />
      <WhyChooseUsSection {...whyChooseUsProps} />
      <GlobalStyle/>
    </>
  )
}

const WebAndMobileAppDevCard = {
  title: "Web & Mobile App Development",
  text: "All of our solutions are mobile-ready and tested on all major devices.",
  image: "",
  component: (<div>web and mobile</div>)
}
const IntegrationsAndApiDevelopmentCard = {
  title: "Integrations & API Developent",
  text: "We link even the most complex systems together and synchronize data accross mobile, desktop, and web. We are Integration and API Experts.",
  image: "",
  component: (<div></div>)
}
const TechnologyMigrationServicesCard = {
  title: "Technology Migration Services",
  text: "Update from legacy systems and proprietary solutions to the latest technology.",
  image: "",
  component: (<div>TMSC</div>)
}

const SlowLoadingSiteStatistics = () => {
  const text = "Each year due to slow loading websites.";
  return (<div>$2.6 Billion Lost</div>)
};
const TimeToMarketStatistics = () => {
  const text = "Time to market with agile project management.";
  return (<div>$2.6 Billion Lost</div>)
};
const ReducedDevelopmentCostStatistic = () => {
  const text = "Development cost when using Node.js";
  return (<div>{text}</div>)
};


const Testimonials: Testemonial[] = [

]

export const getStaticProps = async () => {
  return {
    props: {
      props: {
        heroProps: {
          header: "EXPANSE SERVICES",
          bodyText: "With our game-changing development process we create best-in -class mobile & web apps to support your success, growth, and your users’ experience in record time.",
          buttonLabel: "Request Quote",
          // contactUs: "Contact Us",
        },
        ourServicesProps: {
          title: "Our Services",
          cards: [
            WebAndMobileAppDevCard,
            IntegrationsAndApiDevelopmentCard,
            TechnologyMigrationServicesCard
          ],
        },
        whyChooseUsProps: {
          logoTextPairs: [
            {
              text: "Natural Transparency",
              icon: ""
            },
            {
              text: "World Class Developers",
              icon: ""
            },
            {
              text: "Real-Time Updates",
              icon: ""
            },
            {
              text: "Cutting Edge Technology",
              icon: ""
            }
          ]
        },
        statisticsProps: {
          statistics: [
            SlowLoadingSiteStatistics,
            TimeToMarketStatistics,
            ReducedDevelopmentCostStatistic,
          ]
        },
        ourProcessProps: {},
        testimonialProps: {
          testemonials: []
        }
      }
    },

  }
}

export default Home

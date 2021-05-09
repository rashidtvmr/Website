import Head from 'next/head';
import {createGlobalStyle} from "styled-components";
import React from "react";
import {HeroSection} from '../components/page-sections/hero-section';
import {OurProcessSection} from '../components/page-sections/our-process-section';
import {StatisticsSection} from '../components/page-sections/statistics-section';
import {WhyChooseUsSection} from '../components/page-sections/why-choose-us-section';

const GlobalStyle = createGlobalStyle`
  h1 {
    font-size: 4rem;
  }
`;

type Props = {
  heroProps: any,
  ourProcessProps: any,
  statisticsProps: any,
  whyChooseUsProps: any,
  testimonialProps: any
}

const Home = ({
                heroProps,
                ourProcessProps,
                statisticsProps,
                whyChooseUsProps,
                testimonialProps
}: Props) => {
  return (
    <>
      <Head>
        <title>SSR styled-components! Next.js Starter</title>
      </Head>
      <HeroSection {...heroProps}/>
      <OurProcessSection {...ourProcessProps} />
      <StatisticsSection {...statisticsProps} />
      <WhyChooseUsSection {...whyChooseUsProps} />
      <TestimonialSection {...testimonialProps} />
      <GlobalStyle/>
    </TestimonialSection>
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

const StatisticsConfig = [
  {
    exclamatoryText: "37% Faster",
    text: "Time to market with agile project management.",
    image: ""
  },
  {
    exclamatoryText: "58% Reduced",
    text: "Development cost when using Node.js.",
    image: ""
  },
  {
    exclamatoryText: "$2.6 Billion Lost",
    text: "Each year due to slow loading websites.",
    image: ""
  },
];


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
          statistics: StatisticsConfig
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

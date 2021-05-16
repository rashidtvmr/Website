import {HeroProps} from "../components/page-sections/hero-section";
import {OurServicesProps} from "../components/page-sections/our-services-section";
import {OurProcessProps} from "../components/page-sections/our-process-section";
import {StatisticsProps} from "../components/page-sections/statistics-section";
import {WhyChooseUsProps} from "../components/page-sections/why-choose-us-section";
import {TestimonialProps} from "../components/page-sections/testimonial-section";
import {HERO_BACKGROUND_IMAGE, HERO_BODY_TEXT_1, HERO_BUTTON_LABEL_1, HERO_HEADER} from "./hero-config";
import {
  IntegrationsAndApiDevelopmentCard,
  OUR_SERVICES_HEADER,
  TechnologyMigrationServicesCard,
  WebAndMobileAppDevCard
} from "./our-services-config";
import {
  CUTTING_EDGE_TECHNOLOGY,
  NATURAL_TRANSPARENCY,
  REAL_TIME_UPDATES,
  WORLD_CLASS_DEVELOPERS
} from "./why-choose-us-config";
import {StatisticsConfig} from "./statistics-config";
import {
  OUR_PROCESS_ACTION_BUTTON_LABEL,
  OUR_PROCESS_SECTION_TITLE,
  STEP_1,
  STEP_2,
  STEP_3
} from "./our-processes-config";
import {TESTIMONIAL_1} from "./testemonials-config";



type Props = {
  heroProps: HeroProps,
  ourServicesProps: OurServicesProps,
  ourProcessProps: OurProcessProps,
  statisticsProps: StatisticsProps,
  whyChooseUsProps: WhyChooseUsProps,
  testimonialProps: TestimonialProps
}

export const HomeConfig: Props = {
  heroProps: {
    header: HERO_HEADER,
    bodyText: HERO_BODY_TEXT_1,
    buttonLabel: HERO_BUTTON_LABEL_1,
    backgroundImage: HERO_BACKGROUND_IMAGE,
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
    title: OUR_PROCESS_SECTION_TITLE,
    actionButtonLabel: OUR_PROCESS_ACTION_BUTTON_LABEL,
    // steps: [STEP_1, STEP_2, STEP_3]
    steps: [STEP_1, STEP_2, STEP_3]
  },
  testimonialProps: {
    testimonials: [
      TESTIMONIAL_1
    ]
  }
}


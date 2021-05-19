import React, {Component} from "react";
import {FlexContainer} from "../ui/containers/containers";
import styled from "styled-components";
import {
  IntegrationsAndApiDevelopmentCard,
  TechnologyMigrationServicesCard,
  WebAndMobileAppDevCard
} from "../../config/our-services-config";
import {GreenWatercolorBackgroundGraphic} from "../graphics/images/green-watercolor-background.graphic";
import {ShapeGraphic} from "../ui/containers/shape.graphic";
import {OurServicesCard} from "../ui/cards/our-services-card.component";

export type OurServicesProps = {
  title: string;
  cards: ServiceCard[];
}

export type ServiceCard = {
  title: string;
  text: string;
  image: string; // or component,
  component: Component | any;
}

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = styled.h3``

const CirclesLeftContainer = styled.div``

const CirclesRightContainer = styled.div``


export const OurServicesSection = (props: OurServicesProps) => {
  return (
    <>
      <FlexContainer flexDirection="row">
        <Header>Our <b>Services</b></Header>
        <CardContainer>
          <OurServicesCard type={WebAndMobileAppDevCard} />
          <OurServicesCard type={IntegrationsAndApiDevelopmentCard} />
          <OurServicesCard type={TechnologyMigrationServicesCard} />
        </CardContainer>
      </FlexContainer>
      <CirclesLeftContainer>
        <ShapeGraphic type="circle1"/>
      </CirclesLeftContainer>
      <CirclesRightContainer>
        <ShapeGraphic type="circle1" />
      </CirclesRightContainer>
      <GreenWatercolorBackgroundGraphic/>
    </>
  );
}

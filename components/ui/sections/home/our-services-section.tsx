import React, {Component} from "react";
import styled from "styled-components";
import {
  IntegrationsAndApiDevelopmentCard,
  TechnologyMigrationServicesCard,
  WebAndMobileAppDevCard
} from "../../../../config/our-services-config";
import {ShapeComponent} from "../../decor/shape.component";
import {OurServicesCard} from "../../cards/our-services-card.component";
import {GreenWatercolorBackgroundGraphic} from "../../decor/green-watercolor-background.component";

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
      <div style={{flexDirection: "row", display: "flex"}}>
        <Header>Our <b>Services</b></Header>
        <CardContainer>
          <OurServicesCard type={WebAndMobileAppDevCard} />
          <OurServicesCard type={IntegrationsAndApiDevelopmentCard} />
          <OurServicesCard type={TechnologyMigrationServicesCard} />
        </CardContainer>
      </div>
      <CirclesLeftContainer>
        <ShapeComponent type="circle1"/>
      </CirclesLeftContainer>
      <CirclesRightContainer>
        <ShapeComponent type="circle1" />
      </CirclesRightContainer>
      <GreenWatercolorBackgroundGraphic/>
    </>
  );
}

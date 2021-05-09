import React, {Component} from "react";

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

export const OurServicesSection = (props: OurServicesProps) => {
  return (
    <div>Our Services Section!</div>
  );
}

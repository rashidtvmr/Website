import {HERO_BACKGROUND_IMAGE} from "../../config/hero-config";
import styled from "styled-components";
import {BodyText} from "../ui/text/body-text";

export type HeroProps = {
  header: string;
  bodyText: string;
  buttonLabel: string;
  backgroundImage?: string; // or ?
}

const BodyTextContainer = styled.div`
  
`;

export const HeroSection = ({
                              header,
                              bodyText,
                              buttonLabel,
                              backgroundImage,
                            }: HeroProps) => {
  console.log({backgroundImage})


  const HeroImage = () => {
    return <img
      alt="technology background"
      src={backgroundImage}
      style={{position: "absolute", top: 0, zIndex: 0}}
    />
  }

  return (
    <>
      <HeroImage />
      <BodyTextContainer>
        <BodyText>{bodyText}</BodyText>
      </BodyTextContainer>
    </>
  )
}


import styled from "styled-components";
import {BodyText} from "../../../text/body-text";
import {BaseFlexContainer} from "../../../../_utility/utility";

export type HeroProps = {
    header: string;
    bodyText: string;
    buttonLabel: string;
    backgroundImage?: string; // or ?
}

const HeaderText = styled.h3`
  color: white;
  font-size: 2rem;
  text-align: center;
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
            style={{
                position: "absolute",
                top: "-24rem",
                zIndex: 0
            }}
        />
    }

    return (
        <BaseFlexContainer style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <HeroImage/>
            <div // todo extract and make a component?
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                }}>
                <div style={{
                    position: "relative", // todo - extract this to a component for zindexing
                    zIndex: 1
                }}>
                    <HeaderText>EXPANSE SERVICES</HeaderText>
                </div>
                <div style={{
                    color: "white",
                    width: "500px",
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center"
                }}>
                    <BodyText>{bodyText}</BodyText>
                </div>
            </div>
        </BaseFlexContainer>
    );
}

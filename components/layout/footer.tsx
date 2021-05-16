import {EXAMPLE_PATH} from '../../lib/constants'
import styled, {createGlobalStyle} from "styled-components";
import {LogoComponent} from "../company/logo.component";
import {GithubIcon} from "../graphics/icons/github-icon.component";
import {FacebookIcon} from "../graphics/icons/facebook-icon.component";
import {PhoneNumberIcon} from "../graphics/icons/phone-number-icon.component";
import {CompanyPhoneNumber} from "../company/company-phone-number.component";
import React from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-grow: 1;
  min-height: 3rem;
  background: #f5f5f5;
`
const GlobalStyle = createGlobalStyle`
  footer {
    background: #f5f5f5;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    min-height: 3rem;
  }
`;


type Props = {
  phoneNumber: string;
}
const Footer = ({}) => {
  return (
    <footer>
        {/*<LogoComponent/>*/}
        <FacebookIcon/>
        <GithubIcon/>
        <PhoneNumberIcon/>
        <CompanyPhoneNumber/>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
             className="mx-3 font-bold hover:underline"
          >View on GitHub</a>
        </div>
      <GlobalStyle/>
    </footer>
  )
}

export default Footer

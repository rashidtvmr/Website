import { EXAMPLE_PATH } from '../../lib/constants'
import styled from "styled-components";
import {LogoComponent} from "../company/logo.component";
import {GithubIcon} from "../graphics/icons/github-icon.component";
import {FacebookIcon} from "../graphics/icons/facebook-icon.component";
import {PhoneNumberIcon} from "../graphics/icons/phone-number-icon.component";
import {CompanyPhoneNumber} from "../company/company-phone-number.component";
import React from "react";

const FooterContainer = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 5rem;
`

type Props = {
    phoneNumber: string;
}
const Footer = ({}) => {
  return (
      <FooterContainer>
        <footer className="bg-accent-1 border-t border-accent-2">
          <LogoComponent />
            <FacebookIcon />
            <GithubIcon />
            <PhoneNumberIcon />
            <CompanyPhoneNumber />

          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
               className="mx-3 font-bold hover:underline"
            >View on GitHub</a>
          </div>
        </footer>
      </FooterContainer>
  )
}

export default Footer

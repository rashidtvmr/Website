import React from "react";
import styled, {createGlobalStyle} from 'styled-components'
import {LogoComponent} from "../company/logo.component";
import {NavLink, StyledNavLink} from "../ui/links/links";
import {MenuButton} from "../navigation/menu-button.component";
import {useRouter} from "next/router";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #1C232E;
  color: white;
  height: 5rem;
`;


const NavContainer = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 1rem;

  ${StyledNavLink} {
    //color: orange;
    :active {
      font-weight: 600;
    }
  }
`

const GlobalStyle = createGlobalStyle`
  a {
    margin: 5px;
  }
`;

const LogoContainer = styled.div`
  max-height: 70%;
  margin-top: auto;
  margin-left: 1rem;
  margin-bottom: auto;
  height: 50%;
  min-height: 50%;
`

// todo grab nav links from somewhere
const Header = () => {
  const router = useRouter();
  const isCurrentPath = (path: string) => {
    return path === router.pathname;
  }
  console.log({router});
  console.log(router.pathname, router.basePath);
  return (
    <HeaderContainer>
      <GlobalStyle/>
      <LogoContainer>
        <LogoComponent white/>
      </LogoContainer>
      <NavContainer>
        <NavLink href="/" name="Home" currentPage={isCurrentPath("/")}/>
        <NavLink href="/our-agile-development-process" name="Our Process"
                 currentPage={isCurrentPath("/our-agile-development-process")}/>
        <NavLink href="/about-us" name="About Us" currentPage={isCurrentPath("/about-us")}/>
      </NavContainer>
      {/*<MenuButton expanded={false}/>*/}
    </HeaderContainer>
  )
}

export default Header

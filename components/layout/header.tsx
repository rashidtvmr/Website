import NavLink from "../navigation/nav-link.component";
import React from "react";
import styled, {createGlobalStyle} from 'styled-components'
import {LogoComponent} from "../company/logo.component";
import {MenuButton} from "../navigation/menu-button.component";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: green;
  color: purple;
  height: 5rem;
`;

const StyledNavLink = styled(NavLink)`
  padding: 1rem;
  color: teal;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 1rem;

  ${StyledNavLink} {
    color: orange;
  }

`

const GlobalStyle = createGlobalStyle`
  a {
    margin: 5px;
  }
`;

// todo grab nav links from somewhere
const Header = () => {
  return (
    <HeaderContainer>
      <GlobalStyle/>
      <LogoComponent/>
      <NavContainer>
        <StyledNavLink href="/" name="Home"/>
        <StyledNavLink href="/our-agile-development-process" name="Our Process"/>
        <StyledNavLink href="/about-us" name="About Us"/>
      </NavContainer>
      {/*<MenuButton expanded={false}/>*/}
    </HeaderContainer>
  )
}

export default Header

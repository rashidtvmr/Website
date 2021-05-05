import NavLink from "../navigation/nav-link.component";
import React from "react";
import styled from 'styled-components'
import {LogoComponent} from "../company/logo.component";
import {MenuButton} from "../navigation/menu-button.component";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: green;
  color: purple;
  height: 5rem;
`;

// todo grab nav links from somewhere
const Header = () => {
    return (
        <HeaderContainer>
            <LogoComponent/>
            <nav>
                <NavLink href="/" name="Home"/>
                <NavLink href="/our-agile-development-process" name="Our Process"/>
                <NavLink href="/about-us" name="About Us"/>
            </nav>
            <MenuButton expanded={false}/>
        </HeaderContainer>
    )
}

export default Header

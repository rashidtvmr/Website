import styled, { createGlobalStyle } from "styled-components";
import Link from "next/link";

export const StyledNavLink = styled.a`
  padding: 1rem;
  position: relative;
  color: white;
  text-decoration: none;
  font-weight: 300;
  &:hover {
    font-weight: 300;
  }

  &.currentPage {
    font-weight: 600;
    &:after {
      position: absolute;
      content: "";
      top: 38px;
      left: 50%;
      transform:translateX(-50%);
      height: 6px;
      width: 6px;
      background: #81DE76;
      border-radius:50px;
    }
  }
`;

export const NavLink = (
  { href, name, currentPage } = {
    name: "Default",
    href: "/",
    currentPage: false,
  }
) => {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <StyledNavLink className={currentPage ? "currentPage" : ""}>
        {name}
      </StyledNavLink>
    </Link>
  );
};

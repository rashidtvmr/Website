import styled, {createGlobalStyle} from "styled-components";
import Link from "next/link";

export const StyledNavLink = styled.a`
  padding: 1rem;
  color: white;
  text-decoration: none;
  font-weight: 300;

  &:hover {
    font-weight: 300;
  }
  
  &.currentPage {
    font-weight: 600;
  }
`

export const NavLink = ({href, name, currentPage} = {
  name: "Default",
  href: "/",
  currentPage: false
}) => {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <StyledNavLink className={currentPage ? "currentPage" : ""}>
        {name}
      </StyledNavLink>
    </Link>
  )
}

import Link from 'next/link'
import styled from 'styled-components'

// This creates a custom component that wraps an <a> tag
const RegularLink = styled.a`
  color: blue;
`

export const NavLink = ({ href, name }) => {
    // Must add passHref to Link
    return (
        <Link href={href} passHref>
            <RegularLink>{name}</RegularLink>
        </Link>
    )
}

export default NavLink

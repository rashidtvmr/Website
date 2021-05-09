import Footer from './footer'
import Meta from '../_meta/meta'
import Header from "./header";
import styled from "styled-components";
import React from "react";

type Props = {
  preview?: boolean
  children: React.ReactNode
}
const Background = styled.div` // todo
  background-color: white;
`
const MinWidth = styled.div`
  min-width: 100%;
  width: 100%;
  max-width: 100%;
`;



const Layout = ({preview, children}: Props) => {
  // todo figure out preview
  return (
    <>
      <MinWidth>
        <Background>
          <div>
            <Header/>
            <main style={{minHeight: "100vh"}}>{children}</main>
            <Footer/>
          </div>
        </Background>
      </MinWidth>
    </>
  )
}

export default Layout

import Footer from './footer'
import Header from "./header";
import styled from "styled-components";
import React from "react";
import {APP_BACKGROUND_COLOR} from "../../config/app-config";
import {BaseFlexContainer} from "../_utility/utility";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Background = styled.div` // todo
  position: relative;
  background-color: ${APP_BACKGROUND_COLOR};
  width: 100%;
  min-width: 100%;
  height: 100vh;
  opacity: 1;
  top: 0;
  z-index: -99;
`
const PageContentContainer = styled.div`
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  position: absolute;
`;


const Layout = ({preview, children}: Props) => {
  // todo figure out preview
  return (
    <>
      <BaseFlexContainer>
        <Background/>
        <Header/>
        <PageContentContainer>
          <main style={{minHeight: "100vh"}}>{children}</main>
        </PageContentContainer>
        <Footer/>
      </BaseFlexContainer>
    </>
  )
}

export default Layout

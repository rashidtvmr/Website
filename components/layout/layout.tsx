import Footer from './footer'
import Meta from '../_meta/meta'
import Header from "./header";
import styled from "styled-components";
import React from "react";
import { Alert, AlertTitle } from '@material-ui/lab';

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const MinFullScreenHeight = styled.div`
  min-height: 100vh;
`

const Layout = ({ preview, children }: Props) => {
    // todo figure out preview
  return (
    <>
          <Meta />
        {/*<Alert severity="error">*/}
        {/*    <AlertTitle>Error</AlertTitle>*/}
        {/*    This is an error alert — <strong>check it out!</strong>*/}
        {/*</Alert>*/}
        {/*<Alert preview={preview} />*/}
        <MinFullScreenHeight>
            <Header/>
            <main>{children}</main>
            <Footer />
        </MinFullScreenHeight>
    </>
  )
}

export default Layout

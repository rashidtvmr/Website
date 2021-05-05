import Footer from './footer'
import Meta from '../_meta/meta'
import Header from "./header";
import styled from "styled-components";
import React from "react";
import {Alert, AlertTitle} from '@material-ui/lab';

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: blue;
  width: 100%;
  min-width: 100%;
`


const Layout = ({preview, children}: Props) => {
    // todo figure out preview
    return (
        <>

            {/*<Alert severity="error">*/}
            {/*    <AlertTitle>Error</AlertTitle>*/}
            {/*    This is an error alert — <strong>check it out!</strong>*/}
            {/*</Alert>*/}
            {/*<Alert preview={preview} />*/}
            <Container>
                <div>
                    <Header/>
                    <main>{children}</main>
                    <Footer/>
                </div>
            </Container>
        </>
    )
}

export default Layout

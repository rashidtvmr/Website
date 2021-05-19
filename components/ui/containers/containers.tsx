import React, { ReactNode } from 'react'
import styled from "styled-components";

type Props = {
  children?: ReactNode
}

export const zContainer = styled.div`
  display: flex;
  justify-content: stretch;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: stretch;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props?.flexDirection ? "row" : "column"};
`

export const PageContainer = ({ children }: Props) => {
  return <ContentContainer>
    {children}
  </ContentContainer>
}


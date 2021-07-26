import styled from 'styled-components'

export const Card = styled.div
`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #222A36;
  color: white;
  text-align: center;
  margin-right: 10px;
  h3 {
    font-size: 18px;
    font-weight: normal;
  }
  &:hover {
    box-shadow: 1px;
    shadow: white;
  }
  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-right: 0px;
  }
`
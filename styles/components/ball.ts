import styled from 'styled-components'

export const AnimeBall = styled.div
`
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  .circle1 {
    animation-delay: 0s
  }
  .circle2 {
    animation-delay: 0.25s
  }
  .circle3 {
    animation-delay: 0.5s
  }
  .circle4 {
    animation-delay: 0.75s
  }
  .circle5 {
    animation-delay: 1s
  }
  .circle6 {
    animation-delay: 1.25s
  }
  .circle7 {
    animation-delay: 1.5s
  }
  .circle8 {
    animation-delay: 1.75s
  }
`

export const ExpandCircle = styled.div
`
  border-radius: 50%;
  border: 1px solid rgba(128, 93, 167, 0.4);
  width: 40px;
  height: 40px;
  position: absolute;
  opacity: 0;
  animation: scaleIn 1.5s infinite linear;

  @keyframes scaleIn {
    from {
      transform: scale(.5, .5);
      opacity: .5;
    }
    to {
      transform: scale(2.5, 2.5);
      opacity: 0;
    }
  }
  
`
export const BallCenter = styled.div
`
  border-radius: 50%;
  background-color: white;
  position: absolute;
  width: 13px;
  height: 13px;
`
export const Ball = styled.div
`
  border-radius: 50%;
  background-color: white;
  position: absolute;
  width: 27px;
  height: 27px;
  background: #805DA7;
`
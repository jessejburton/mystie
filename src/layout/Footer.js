import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      footer
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  background-color: blue;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100vw;
`
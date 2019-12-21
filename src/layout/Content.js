import React from 'react'
import styled from 'styled-components'

export const Content = ({ children }) => {
  return (
    <StyledContent>
      {children}
    </StyledContent>
  )
}

export default Content;

const StyledContent = styled.div`
  p {
    margin-bottom: 2rem;
  }
  h1, h2 {
    margin-bottom: 2rem;
  }
`
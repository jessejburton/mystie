import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import { maxContentWidth } from '../theme/Theme'

export default function Layout(props) {
  return (
    <StyledLayout>
      <Header />
      <main>
        {props.children}
      </main>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  height: 100vh;

  main {
    max-width: ${maxContentWidth};
    padding: 0 5rem;
    margin: 0 auto;
  }
`


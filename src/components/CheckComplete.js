import React, { useState } from 'react'
import styled from 'styled-components'
import { borderColor } from '../theme/Theme'

export const CheckComplete = () => {

  const [isChecked, toggleChecked] = useState(false);

  return (
    <StyledDiv>
      <button
        onClick={() => toggleChecked(!isChecked)}
        className={isChecked ? 'complete' : 'not-complete'}
      />
    </StyledDiv>
  )
}

export default CheckComplete

const StyledDiv = styled.div`
  button {
    width: 3rem;
    height: 3rem;
    border: 3px solid black;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    transition: all .3s ease;
  }

  .not-complete:hover {
    background-color: ${borderColor};
  }

  .complete{
    background-color: black;

    &::after {
      opacity: 1;
      color: white;
    }
  }

`;
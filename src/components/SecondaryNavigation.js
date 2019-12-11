import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { darkGrey } from '../theme/Theme'

const SecondaryNavigation = ({ children }) => {

  const [current, setCurrent] = useState(0);

  const handleClick = (e, cb, index) => {
    setCurrent(index);
    if (cb) cb(e);
  }

  return (
    <Styles>
      {children.map((child, index) => {
        return (
          <li
            key={index}
            onClick={(e) => { handleClick(e, child.props.onClick, index) }}
            className={current === index ? 'active' : null}>
            {child.props.children}
          </li>
        )
      })}
    </Styles>
  )
}

export default SecondaryNavigation;

const Styles = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.4rem;
  margin-bottom: 3rem;
  cursor: pointer;

  li {
    margin: 0 2rem;
    color: ${darkGrey};
    transition: all .3s ease;
    position: relative;

    &:hover {
      font-weight: 500;
    }

    &.active {
      font-weight: 700;

      &::after {
        opacity: 0.6;
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: ${darkGrey};
    left: 0;
    bottom: -2px;
    opacity: 0;
    transition: all .3s ease;
  }
}
`
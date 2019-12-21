import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { black, borderColor, grey, darkGrey } from '../theme/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faTasks, faListAlt, faDollarSign, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

export const Navigation = () => {
  return (
    <StyledNavigation>
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faColumns} /> My Site
        </Link>
      </li>
      <li>
        <Link to="/plans">
          <FontAwesomeIcon icon={faListAlt} /> My Plan
        </Link>
      </li>
      <li>
        <Link to="/tasks">
          <FontAwesomeIcon icon={faTasks} /> My Tasks
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <FontAwesomeIcon icon={faProjectDiagram} /> My Projects
        </Link>
      </li>
      <li>
        <Link to="/invoices">
          <FontAwesomeIcon icon={faDollarSign} /> My Invoices
        </Link>
      </li>
    </StyledNavigation>
  )
}

export default Navigation

const StyledNavigation = styled.ul`
  list-style: none;
  display: flex;
  font-size: 1.4rem;

  li {
    line-height: 7rem;
    height: 7rem;
    display: inline-block;
    border-left: 1px solid ${borderColor};

    a {
      text-decoration: none;
      padding: 0 2rem;
      display: block;
      transition: all .3s ease;
      color: ${darkGrey};

      svg {
        margin-right: 0.7rem;
      }

      &:hover {
        background-color: ${grey};
        color: ${black};
      }
    }
  }
`
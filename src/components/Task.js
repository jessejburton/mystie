import React, { useState } from 'react'
import styled from 'styled-components'
import { borderColor, cardBorderRadius, cardBackgroundColor, cardShadow, darkGrey } from '../theme/Theme'
import { useSpring, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import CheckComplete from '../components/CheckComplete'

export const Task = ({ task }) => {
  const [hours, setHours] = useState(task.hours);
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  const incrementHours = () => {
    setHours(hours + 0.25);
  }

  const decrementHours = () => {
    setHours(hours - 0.25 < 0 ? 0 : hours - 0.25);
  }

  return (
    <animated.div
      style={{
        transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`)
      }}>
      <StyledTask>
        <div className="task-type" style={{ backgroundColor: "#000" }}></div>
        <div className="task-status">
          <CheckComplete />
        </div>
        <div className="task-text">{task.task}</div>
        <div className="task-hours">
          <span className="hours-label">hours</span>
          <button onClick={decrementHours}><FontAwesomeIcon icon={faMinus} /></button>
          <span className="hours-value">{hours}</span>
          <button onClick={incrementHours}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <div className="task-options">
          <a href="#" title="View task discussion">
            <FontAwesomeIcon icon={faComments} />
          </a>
          <a href="#" title="Remove task">
            <FontAwesomeIcon icon={faTrash} />
          </a>
        </div>
      </StyledTask>
    </animated.div>
  )
}

export default Task

const StyledTask = styled.div`
  display: grid;
  grid-template-columns: .5rem 6rem auto 10rem 10rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 7rem;
  margin-bottom: .5rem;
  border: 1px solid ${borderColor};
  background-color: ${cardBackgroundColor};
  box-shadow: ${cardShadow};
  border-radius: ${cardBorderRadius};
  z-index: 50;
  position: relative;

  a, a:link {
    color: ${darkGrey};
    display: inline-block;
    transition: all .3s ease;

    &:hover {
          transform: scale(1.1);
    }
  }

  .task-type {
    height: 100%;
    width: 100%;
    border-top-left-radius: ${cardBorderRadius};
    border-bottom-left-radius: ${cardBorderRadius};
  }

  .task-options a {
    display: inline-block;
    margin: 0 1rem;
  }

  .task-hours {
    position: relative;

    .hours-label {
      position: absolute;
      font-size: 1.2rem;
      color: ${borderColor};
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }

    .hours-value {
      display: inline-block;
      width: 3em;
      text-align: center;
    }

    button {
      display: inline-block;
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: all .3s ease;
      outline: 0;

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
`

const StyledComments = styled.div`
  background-color: ${cardBackgroundColor};
  border: 1px solid ${borderColor};
                border-top: none;
                margin: -10px 3px 1rem 3px;
  border-radius: ${cardBorderRadius};
                z-index: 10;

  p {
          padding: 2rem;
  }
`

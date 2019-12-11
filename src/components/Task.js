import React from 'react'
import styled from 'styled-components'
import { borderColor, cardBorderRadius, cardBackgroundColor, cardShadow, darkGrey } from '../theme/Theme'
import { useGesture } from 'react-with-gesture'
import { useSpring, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'

export const Task = ({ id, task }) => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }))

  const bind = useGesture(({ down, delta }) => {
    set({ y: down ? delta[1] : 0 })
  })

  return (
    <animated.div
      {...bind()}
      style={{
        transform: y.interpolate(y => `translate3d(0, ${y}px, 0)`)
      }}>
      <StyledTask>
        <div className="task-type" style={{ backgroundColor: "#000" }}></div>
        <div className="task-text">{task}</div>
        <div className="task-options">
          <a href="#">
            <FontAwesomeIcon icon={faComments} />
          </a>
        </div>
      </StyledTask>
    </animated.div>
  )
}

export default Task

const StyledTask = styled.div`
  display: grid;
  grid-template-columns: 5px auto 100px;
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

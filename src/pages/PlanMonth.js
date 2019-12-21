import React, { useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { grey } from '../theme/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faTachometerAlt, faPalette, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faAccessibleIcon } from '@fortawesome/free-brands-svg-icons'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const PlanMonth = () => {

  const [month, setMonth] = useState(moment().format('MMMM'))
  const [hours, setHours] = useState(0)

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      focusItems,
      result.source.index,
      result.destination.index
    );

    setFocusItems(items)
  }

  const [focusItems, setFocusItems] = useState([
    {
      id: "tasks",
      name: "Tasks",
      icon: faTasks,
      content: "Work related to the tasks on the task tab."
    },
    {
      id: "optimization",
      name: "Optimization & Performance",
      icon: faTachometerAlt,
      content: "Work related to the optimization and performance of your website."
    },
    {
      id: "design",
      name: "Design",
      icon: faPalette,
      content: "Work related to improving the design (visual and functional) of your site."
    },
    {
      id: "projects",
      name: "Projects",
      icon: faProjectDiagram,
      content: "Outlined project work"
    },
    {
      id: "accessibility",
      name: "Accessibility",
      icon: faAccessibleIcon,
      content: "Work to improve the accessibility of your website."
    },
  ]);

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // change background colour if dragging
    padding: "2rem",
    boxShadow: isDragging ? "0 0 10px 0 rgba(0,0,0,0.5)" : "0 0 5px 0 rgba(0,0,0,0.1)",

    // styles we need to apply on draggables
    ...draggableStyle
  });

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? grey : grey,
  });

  return (
    <div>
      <h1>{month}</h1>
      <h2>Let's create a plan for {month}!</h2>
      <p>Use the slider below to choose how many <strong>hours</strong> would you like to contribute towards your website this month?</p>

      <StyledHours>{hours} hours</StyledHours>

      <StyledInput>
        <InputRange
          minValue={0}
          maxValue={40}
          value={hours || 0}
          onChange={value => setHours(value)}
        />
      </StyledInput>

      {hours > 0 &&
        <div style={{ margin: '5rem 0' }}>
          <h2>Priorities</h2>
          <p>How would your like to prioritize these hours? (drag to reorder)</p>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                >
                  {focusItems.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                          className="sortable"
                        >
                          <h3><FontAwesomeIcon icon={item.icon} /> {item.name}</h3>
                          <div>{item.content}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      }
    </div>
  )
}

export default PlanMonth

const StyledInput = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;

  .input-range__slider {
    margin-top: -1rem;
    height: 2rem;
    width: 2rem;
  }

  .input-range__label-container {
    display: none;
  }
`

const StyledHours = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  text-align: center;
`;

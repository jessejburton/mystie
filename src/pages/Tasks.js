import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SecondaryNavigation from '../components/SecondaryNavigation'
import Task from '../components/Task'
import { useTrail, animated } from 'react-spring'
import { borderColor, cardBorderRadius, white, black, darkGrey, cardShadow } from '../theme/Theme'

const task_data = [
  {
    id: 1,
    task: 'This is the first not complete task',
    priority: 0,
    status: 0,
    type: 0,
    due: '',
    comments: []
  },
  {
    id: 2,
    task: 'This is the first complete task',
    priority: 0,
    status: 1,
    type: 0,
    due: '',
    comments: []
  },
  {
    id: 3,
    task: 'This is another not complete task',
    priority: 0,
    status: 0,
    type: 0,
    due: '',
    comments: []
  },
  {
    id: 4,
    task: 'This is another complete task',
    priority: 0,
    status: 1,
    type: 0,
    due: '',
    comments: []
  },
]

export const Tasks = () => {

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [activeTask, setActiveTask] = useState({
    id: null,
    task: '',
    priority: 0,
    status: 0,
    type: 0,
    due: '',
    comments: []
  });

  const trail = useTrail(filteredTasks.length, {
    from: {
      opacity: 0,
      transform: 'translate3d(0,20px,0)'
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0,0,0)'
    }
  })

  // TODO animation doesn't work between complete and not complete
  const filterTasks = (status) => {
    if (status >= 0) {
      setFilteredTasks(tasks.filter(task => task.status === status))
    } else {
      setFilteredTasks(tasks);
    }
  }

  const getTasks = () => {
    setTasks(task_data);
  }

  useEffect(() => {
    filterTasks(0);
  }, [tasks])

  useEffect(() => {
    getTasks();
  }, [])

  const handleChange = (e) => {
    setActiveTask({
      ...activeTask,
      id: tasks.length + 1,
      task: e.target.value
    })
  }

  const addTask = (e) => {
    e.preventDefault();
    if (activeTask.task.length === 0) return

    setTasks([activeTask, ...tasks]);
    setActiveTask({
      ...activeTask,
      task: ''
    })
    console.log(activeTask);
  }

  return (
    <Page>
      <SecondaryNavigation>
        <li onClick={() => filterTasks(0)}>Not Complete</li>
        <li onClick={() => filterTasks(1)}>Complete</li>
        <li onClick={() => filterTasks(-1)}>All</li>
      </SecondaryNavigation>

      <div className="page-content">
        <h1>Tasks</h1>

        <StyledForm onSubmit={addTask}>
          <input
            type="text"
            value={activeTask.task}
            onChange={handleChange}
            placeholder="Enter a new task..." />
          <button onClick={addTask}>Add Task</button>
        </StyledForm>

        {trail.map((animation, index) => (
          <animated.div style={animation} key={index}>
            <Task
              style={animation}
              id={filteredTasks[index].id}
              task={filteredTasks[index].task}
            />
          </animated.div>
        ))}
      </div>
    </Page>
  )
}

export default Tasks

const Page = styled.div`
  h1 {
    margin-bottom: 2rem;
  }
`

const StyledForm = styled.form`
  margin: 3rem 0;
  width: 100%;
  display: flex;
  font-size: 1.6rem;
  box-shadow: ${cardShadow};

  input[type=text]{
    padding: 1.5rem 2rem;
    outline: none;
    border: 1px solid ${borderColor};
    border-top-left-radius: ${cardBorderRadius};
    border-bottom-left-radius: ${cardBorderRadius};
    border-right: none;
    width: 100%;
  }

  button {
    outline: none;
    width: 11rem;
    border: 1px solid ${borderColor};
    border-top-right-radius: ${cardBorderRadius};
    border-bottom-right-radius: ${cardBorderRadius};
    border-left: none;
    background-color: ${black};
    color: ${white};
    cursor: pointer;
    transition: all .3s ease;
    text-transform: uppercase;

    &:hover {
      background-color: ${darkGrey};
    }
  }
`
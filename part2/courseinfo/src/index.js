import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Total = ({ sum }) => {
  return(
    <h4>total of {sum} exercises</h4>
  ) 
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
  )
}

const Course = ({ course }) => {
  const total_exercises = course.parts.reduce(
    (acc, value) => acc + value.exercises,
    0
  )

  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total sum={total_exercises} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Debugging',
        exercises: 5,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
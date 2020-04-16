import React from 'react';
import ReactDOM from 'react-dom';

const Title = ({ text }) => <h1>{text}</h1>

const Header = ({ text }) => <h2>{text}</h2>

const Total = ({ sum }) => {
  return(
    <b>total of {sum} exercises</b>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <Title text="Web dev curriculum" />
      {courses.map(
        course => <Course key={course.id} course={course} />
      )}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react';

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

export default Course

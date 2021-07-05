import React from 'react'

/* const Header = (props) => {
  // console.log(props)
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
} */

/* const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
} */

const Header = ({ course }) => <h1>{course}</h1>

/* const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
} */

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

/* const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
} */

const Content = ({ parts }) => {
  const [part1, part2, part3] = parts

  return (
    <div>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </div>
  )
}

/* const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
} */

/* const Total = ({parts}) => {
  let total = parts[0].exercises + parts[1].exercises + parts[2].exercises 
  return (
    <p>Number of exercises {total}</p>
  )
} */

// Based on https://dmitripavlutin.com/javascript-array-reduce/
/* const numbers = [2, 4, 6];
const sum = numbers.reduce(function(sum, number) {
  const updatedSum = sum + number;
  return updatedSum;
}, 0) */
// array.reduce(callback, initialValue)

const Total = ({ parts }) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0)
  return <div>Total exercises: {total}</div>
}

/* const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
} */

const App = () => {
  // const-definitions
  // const course = 'Half Stack application development'
  /* const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 */

  // Exercise 1.3: course information step3
  /* const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  } */

  // Exercise 1.4: course information step4
  /* const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ] */

  // Exercise 1.5: course information step5
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  /* return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3} />
      <Total 
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3} />
    </div>
  ) */

  // Exercise 1.5: course information step5 (modified)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App